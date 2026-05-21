import React,{useState} from "react";
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


 type Tarefa = {
    id: number;
    titulo: string;
    status: string;
 };

export default function Home() {

    const [titulo, setTitulo] = useState("");
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);
    const [status, setStatus] = useState("Em andamento");

    function adicionarTarefa(){''
        if(titulo.trim() === ""){
            Alert.alert("Erro","Digite uma tarefa válida!");
            return;
        }
       
        const novaTarefa: Tarefa={
            id: Date.now(),
            titulo: titulo,
            status: status
        }
        setTarefas([...tarefas, novaTarefa]);
        setTitulo("");
        setStatus("Em andamento");
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
                                color: status === "Concluído" ? "#fff" : "#000",
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
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (
                    <View style={style.viewList}>
                        <Text style={style.textList}>{item.titulo}</Text>
                        <View style={[
                                style.viewList,
                                {
                                    backgroundColor: corStatus(item.status),
                                }
                            ]}
                        >
                            <Text style={style.textList}>{item.status}</Text>
                        </View>
                    </View >
                )}
                
            /> 
        </View>
    );

}