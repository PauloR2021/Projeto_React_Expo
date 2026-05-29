import React,{useEffect, useState} from "react";
import * as SecureStore from 'expo-secure-store';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    Alert
 } from "react-native";

import { style } from "../../../src/styles/styles_home";
import {MaterialIcons} from '@expo/vector-icons'
import { themes } from "../../../src/global/themes";
import { router } from 'expo-router';
import { api } from "../../../src/services/api";


 type Tarefa = {
    id?: string | number;
    idUsuario?: string | number;
    nome: string;
    titulo: string;
    status: string;
 };

export default function Home() {
    const [titulo, setTitulo] = useState("");
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);
    const [status, setStatus] = useState("Em andamento");
    const [loading, setLoading] = useState(false);
    
    //Busca as tarefas da API 
    useEffect( () =>{
        buscarTarefas();

    },[]);

    async function buscarTarefas() {
        try{

            const response = await api.get("/tarefas");

            console.log("Tarefas:",JSON.stringify(response.data));

            setTarefas(response.data.data);


        }catch (error:any){
            console.log("Erro:", JSON.stringify(error?.response?.data));
            Alert.alert("Erro", "Não foi possível carregar as tarefas.");

        }

        
    }

    //Função parapegar os dados que venm dentro do TOKEN de Acesso
    async function getDecodedToken(){
        const token = await SecureStore.getItemAsync("token");

        if(!token){
            console.log("TOken vazio: ",token);
            return null;
        }

        //Decodificando os dados do Token

        const payload = token.split(".")[1];
        const decoded = JSON.parse(atob(payload));

        return decoded;
    }

    async function adicionarTarefa(){
        try{
                 
            if(titulo.trim() === ""){
                Alert.alert("Erro","Digite uma tarefa válida!");
                return;
            }
            
            setLoading(true); //Aparece o Logo de Carregamento

            console.log("Enviando",{titulo,status});
            console.log("URL:",api.defaults.baseURL +"/tarefas");

            // ✅ Ver exatamente o que está sendo mandado no header
            const token = await SecureStore.getItemAsync("token");
            console.log("Token:", token);

            //Pega os dados do Usuário pelo TOken
            const usuario = await getDecodedToken();          
        
            const novaTarefa: Tarefa={
                idUsuario: usuario?.id,
                nome: usuario.nome,
                titulo: titulo,
                status: status
            }

            const response = await api.post("/tarefas", novaTarefa,{
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }

            });
            
            // ✅ Log 2: Ver o retorno completo
            console.log("Resposta completa:", JSON.stringify(response.data));

            setTarefas([...tarefas, novaTarefa]);
            setTitulo("");
            setStatus("Em andamento");
        }catch (error:any){
            console.log("Status:", error?.response?.status);
            console.log("Erro da API:", JSON.stringify(error?.response?.data)); // ← mensagem exata
            console.log("Erro ao criar tarefa: ", error);
            Alert.alert("Erro","Erro ao criar tarefa, tente novamente");
        }finally{
            setLoading(false);
        }
    }

    function corStatus(status : String) {

        switch (status) {
            case "Concluido":
                return themes.colors.statusConcluido;

            case "Em andamento":
                return themes.colors.statusEmAndamento;

            case "Pendente":
                return themes.colors.statusPendente;
        
            default:
                return themes.colors.statusDefault;
        }
        
    }

    return (
        <View style={style.container}>

            {/* Header */}
            <View style={style.header}>
                <Text style={style.title}>
                    Minhas{" "}
                    <Text style={style.titleAccent}>Tarefas</Text>
                </Text>
                <Text style={style.login} onPress={() => router.push('pages/login')}>
                    Login
                </Text>
            </View>

            {/* Formulário */}
            <View style={style.boxMid}>
                <Text style={style.text}>Tarefa</Text>
                <TextInput
                    style={style.input}
                    placeholder="Digite sua tarefa..."
                    placeholderTextColor="#4B5563"
                    value={titulo}
                    onChangeText={setTitulo}
                />

                <Text style={style.text}>Status</Text>
                <View style={style.boxStatusButton}>

                    <TouchableOpacity
                        onPress={() => setStatus("Concluido")}
                        style={[style.buttonStatus, {
                            backgroundColor: status === "Concluido" ? themes.colors.statusConcluido + "22" : "transparent",
                            borderColor: status === "Concluido" ? themes.colors.statusConcluido : "#2A2D3A",
                        }]}
                    >
                        <Text style={{ color: status === "Concluido" ? themes.colors.statusConcluido : "#6B7280", fontWeight: "700", fontSize: 12 }}>
                            ✓ Concluído
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => setStatus("Em andamento")}
                        style={[style.buttonStatus, {
                            backgroundColor: status === "Em andamento" ? themes.colors.statusEmAndamento + "22" : "transparent",
                            borderColor: status === "Em andamento" ? themes.colors.statusEmAndamento : "#2A2D3A",
                        }]}
                    >
                        <Text style={{ color: status === "Em andamento" ? themes.colors.statusEmAndamento : "#6B7280", fontWeight: "700", fontSize: 12 }}>
                            ⟳ Andamento
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => setStatus("Pendente")}
                        style={[style.buttonStatus, {
                            backgroundColor: status === "Pendente" ? themes.colors.statusPendente + "22" : "transparent",
                            borderColor: status === "Pendente" ? themes.colors.statusPendente : "#2A2D3A",
                        }]}
                    >
                        <Text style={{ color: status === "Pendente" ? themes.colors.statusPendente : "#6B7280", fontWeight: "700", fontSize: 12 }}>
                            ⏳ Pendente
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>

            {/* Botão */}
            <TouchableOpacity
                style={[style.buttonAdicionar, loading && { opacity: 0.6 }]}
                onPress={adicionarTarefa}
                disabled={loading}
            >
                <Text style={style.textButtonAdicionar}>
                    {loading ? "Adicionando..." : "Adicionar Tarefa"}
                </Text>
                <MaterialIcons name="add" size={20} color="#fff" style={{ marginLeft: 8 }} />
            </TouchableOpacity>

            {/* Lista */}
            <Text style={style.sectionTitle}>
                {tarefas.length} tarefa{tarefas.length !== 1 ? "s" : ""}
            </Text>

            <FlatList
                data={tarefas}
                keyExtractor={(item, index) => `tarefa-${item.id ?? index}`}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={style.viewList}>
                        <View style={[style.statusDot, { backgroundColor: corStatus(item.status) }]} />
                        <View style={{ flex: 1 }}>
                            <Text style={style.textList}>{item.titulo}</Text>
                            <View style={[style.statusBadge, { backgroundColor: corStatus(item.status) + "22" }]}>
                                <Text style={[style.statusBadgeText, { color: corStatus(item.status) }]}>
                                    {item.status}
                                </Text>
                            </View>
                        </View>
                    </View>
                )}
                ListEmptyComponent={
                    <Text style={style.emptyText}>Nenhuma tarefa encontrada.</Text>
                }
            />
        </View>
    );

}