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
            <Text style={style.title}>Criar Usuario</Text>

            <View style={style.form}>

                <Text style={style.text}>NOME:</Text>
                <TextInput
                    style={style.input}
                    value={nome}
                    onChangeText={setNome}
                    placeholder="Digite o nome"
                />

                <Text style={style.text}>EMAIL:</Text>
                <TextInput
                    style={style.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Digite o email"
                    keyboardType="email-address"
                />
            
                <Text style={style.text}>PASSWORD:</Text>
                <TextInput
                    style={style.input}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Digite a senha"
                />

                <Text style={style.text}>CONFIRM PASSWORD:</Text>
                <TextInput
                    style={style.input}
                    secureTextEntry={true}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    placeholder="Confirme a senha"
                />

            </View>

            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={cadastrarUsuario}>
                    {
                        loading ?
                            <ActivityIndicator color={'#FFFFFF'} size="small" />
                        :
                            <Text style={style.buttonText}>CRIAR USUÁRIO</Text>
                    }
                    
                </TouchableOpacity>

            </View>

            <Text style={style.textLogin}
                onPress={() => router.push('/pages/login')}
            >   
                Realizar Login !
            </Text>
            
        </View>

    )
}