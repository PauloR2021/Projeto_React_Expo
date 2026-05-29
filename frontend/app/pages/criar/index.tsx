import React,{useState} from "react";
import {
    View,
    Text, 
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator
} from "react-native";

import { style } from "../../../src/styles/style_criar";
import { router } from "expo-router";
import { api } from "../../../src/services/api";

export default function CriarUsuario() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);


    async function cadastrarUsuario() {
        try {
        
            setLoading(true);  //Carregando aqui para simular o processo de cadastro

            if(!nome || !email || !password || !confirmPassword) {
                Alert.alert('Erro', 'Por favor, preencha todos os campos.');
                setLoading(false);
                return;
            }

            if(password !== confirmPassword) {
                Alert.alert('Erro', 'As senhas não coincidem. Por favor, tente novamente.');
                setLoading(false);
                return;
                
            }

            const response = await api.post("/usuario",{
                nome: nome,
                email: email,
                password: password

            });

      

            setLoading(false);

            Alert.alert(
                "Sucesso",
                "Usuário criado com sucesso",
                [
                    {
                        text:"OK",
                        onPress: () => router.push("pages/login")
                    }
                ]
            );
           
        } catch (error) {
            setLoading(false);
            console.log('Erro ao cadastrar usuário:', error);
            Alert.alert('Erro', 'Ocorreu um erro ao cadastrar o usuário. Por favor, tente novamente.');

        }
    }

   return (
        <View style={style.container}>

            {/* Header */}
            <Text style={style.title}>
                Criar{" "}
                <Text style={{ color: "#6C63FF" }}>Conta</Text>
            </Text>
            <Text style={style.subtitle}>Preencha os dados para se cadastrar</Text>

            {/* Formulário */}
            <View style={style.form}>

                <Text style={style.text}>Nome</Text>
                <TextInput
                    style={style.input}
                    value={nome}
                    onChangeText={setNome}
                    placeholder="Seu nome completo"
                    placeholderTextColor="#4B5563"
                />

                <Text style={style.text}>Email</Text>
                <TextInput
                    style={style.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="seu@email.com"
                    placeholderTextColor="#4B5563"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <Text style={style.text}>Senha</Text>
                <TextInput
                    style={style.input}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="••••••••"
                    placeholderTextColor="#4B5563"
                    secureTextEntry={true}
                />

                <Text style={style.text}>Confirmar Senha</Text>
                <TextInput
                    style={style.input}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    placeholder="••••••••"
                    placeholderTextColor="#4B5563"
                    secureTextEntry={true}
                />

            </View>

            {/* Botão */}
            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={cadastrarUsuario}>
                    {loading
                        ? <ActivityIndicator color="#FFFFFF" size="small" />
                        : <Text style={style.buttonText}>CRIAR CONTA</Text>
                    }
                </TouchableOpacity>

                <Text style={style.textLogin}>
                    Já tem conta?{" "}
                    <Text
                        style={{ color: "#6C63FF", fontWeight: "700" }}
                        onPress={() => router.push('/pages/login')}
                    >
                        Fazer login
                    </Text>
                </Text>
            </View>

        </View>
    );
}