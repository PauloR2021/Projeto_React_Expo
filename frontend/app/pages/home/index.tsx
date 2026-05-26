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

        }catch (error){

        }

        
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
        
            const novaTarefa: Tarefa={
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

    return(
    
        <View style={style.container}>
            <Text style={style.title}>Minhas Tarefas</Text>

            <Text style={style.login} onPress={() => router.push('pages/login')}>
                Login
            </Text>

            {/* Box do meio com input e botões */}
            <View style={style.boxMid}>
                <Text style={style.text}>Tarefa</Text>
                <TextInput
                    style={style.input}
                    placeholder="Digite sua tarefa"
                    value={titulo}
                    onChangeText={setTitulo}
                />

                {/* Adicionando os botões de status */}
                <Text style={style.text}>Status</Text>
                <View style={style.boxStatusButton}>

                   {/*Status Concluído*/}
                    <TouchableOpacity
                        onPress={() => setStatus("Concluido")}
                        style={[
                            style.buttonStatus,
                            {
                                backgroundColor:
                                    status === "Concluido"
                                        ? themes.colors.statusConcluido
                                        : themes.colors.statusDefault,
                            }

                        ]}
                    >
                        <Text
                             style={{
                                color: status === "Concluido" ? "#fff" : "#000",
                                fontWeight: "bold",
                                textAlign: "center",
                            }}                        
                        >Concluído</Text>
                    </TouchableOpacity>
                            
                    {/*Status Em Andamento*/}
                    <TouchableOpacity 
                        onPress={() => setStatus("Em andamento")}
                        style={[                        
                            style.buttonStatus,
                                {
                                    backgroundColor:
                                        status === "Em andamento" 
                                        ? themes.colors.statusEmAndamento 
                                        : themes.colors.statusDefault,
                                }
                            ]}
                    >
                        <Text style={{
                                color: status === "Em andamento" ? "#fff" : "#000",
                                fontWeight: "bold",
                                textAlign: "center",
                            }}
                        >Em Andamento</Text>
                    </TouchableOpacity>
                            
                     {/*Status Pendente*/}
                    <TouchableOpacity 
                        onPress={() => setStatus("Pendente")}
                        style={[
                            style.buttonStatus,
                            {
                                backgroundColor:
                                    status === "Pendente"
                                        ? themes.colors.statusPendente 
                                        : themes.colors.statusDefault,
                            }
                        ]}
                    >
                        <Text style={{ color: status === "Pendente" ? "#fff" : "#000",
                                        fontWeight: "bold",
                                        textAlign: "center",
                                      
                            }}
                        >Pendente</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity style={style.buttonAdicionar} onPress={adicionarTarefa}>
                <Text style={style.textButtonAdicionar}>Adicionar Tarefa</Text>
                <MaterialIcons name="add" size={24} color="#fff" style={{ marginLeft: 8 }} />
            </TouchableOpacity>

            <FlatList
                data={tarefas}
                keyExtractor={(item, index) => item.id ? String(item.id) : String(index)}
                renderItem={({ item }) => (
                    <View style={[ { borderLeftColor: corStatus(item.status), borderLeftWidth: 5 }]}>
                        <Text>{item.titulo}</Text>
                        <Text style={[ { color: corStatus(item.status) }]}>
                            {item.status}
                        </Text>
                    </View>
                )}
                ListEmptyComponent={
                    <Text style={{ textAlign: "center", marginTop: 20, color: "#aaa" }}>
                        Nenhuma tarefa encontrada.
                    </Text>
                }
            />

            
        </View>
    );

}