import React, {useState} from "react";

import * as SecureStore from 'expo-secure-store';
import {Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator} from "react-native";
import { style } from "../../../src/styles/styles_login";
import {MaterialIcons} from '@expo/vector-icons'

import Logo from "../../../src/assets/login_icon.png";
import { themes } from "../../../src/global/themes";
import { router } from 'expo-router';
import { api } from "../../../src/services/api";    



export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);


    async function getLogin() {

        try {

            setLoading(true);

            if(!email || !password){
                setLoading(false);
                return Alert.alert('Atenção', 'Preencha todos os campos para continuar !');
                
            }

            //Log para Debugar
            console.log("Enviando", {email, password});
            console.log("URL:",api.defaults.baseURL +"/auth/login");


            const response = await api.post("/auth/login", {
                email: email,
                password: password
            });

            // ✅ Log 2: Ver o retorno completo
            console.log("Resposta completa:", JSON.stringify(response.data));    

            const token = response.data.data.token; //Token de Validação
            const payload = token.split(".")[1];
            const decoded = JSON.parse(atob(payload));
            console.log(decoded.nome); // "Paulo Ricardo Soares"
            console.log(decoded.id); 
            console.log(decoded.email);

            if(!token){
                // ✅ Log 3: Se não vier token, mostrar onde ele realmente está
                console.log("Token não encontrado em response.data.token");
                console.log("Estrutura retornada:", Object.keys(response.data));
            }

            // ✅ Salva o token no dispositivo
            await SecureStore.setItemAsync("token", token);

            setLoading(false);


            Alert.alert(
                "Sucesso",
                "Logado com sucesso!",
                [
                    {
                        text: "OK",
                        onPress: () => router.push("/pages/home")
                    }
                ]
            );

            console.log(token);

           

        } catch (error:any) {
            setLoading(false);

            // ✅ Log 4: Ver o erro completo da API
            console.log("Status do erro:", error?.response?.status);
            console.log("Mensagem da API:", JSON.stringify(error?.response?.data));
            console.log("Erro completo:", error?.message);

            Alert.alert("Erro", "E-mail ou senha incorretos...");
            setEmail("");
            setPassword("");
            
        } 
    }


    return (
        <View style={style.container}>

            <View style={style.boxTop}>
                <Image 
                    style={style.logo}
                    source={Logo}
                    resizeMode="contain"
                />
                <Text style={style.text}>Bem vindo de volta !</Text>
            </View>

            <View style={style.boxMid}>
                <Text style={style.titleInput}>ENDEREÇO DE EMAIL:</Text>

                <View style={style.boxInput}>
                    <TextInput style={style.input} 
                        value={email} 
                        onChangeText={setEmail}
                    />
                    <MaterialIcons name="mail" size={24} color={themes.colors.gray} />
                
                </View>

                <Text style={style.titleInput}>SENHA:</Text>

                <View style={style.boxInput}>
                    <TextInput style={style.input} 
                        value={password} 
                        onChangeText={setPassword}
                        secureTextEntry={true}
                    />
                    <MaterialIcons name="remove-red-eye" size={24} color={themes.colors.gray} />
                </View>
               
            </View>

           
            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={getLogin}>
                    {
                        loading?
                            <ActivityIndicator color={'#FFFFFF'} size="small" />
                        :
                            <Text style={style.buttonText}>ENTRAR</Text>
                    }
                   
                </TouchableOpacity>

            </View>

            <Text style={style.textBottom}>
                Não tem conta?{" "}

                <Text
                    style={{
                    color: themes.colors.primary,
                    fontWeight: 'bold'
                    }}

                    onPress={() => router.push('/pages/criar')}
                >
                    Crie agora!
                </Text>

            </Text>

            
        </View>
       
    )
}