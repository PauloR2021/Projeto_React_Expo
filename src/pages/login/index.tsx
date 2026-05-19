import React, {useState} from "react";

import {Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator} from "react-native";
import { style } from "./styles";
import {MaterialIcons} from '@expo/vector-icons'

import Logo from "../../assets/login_icon.png";
import { themes } from "../../global/themes";



export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);


    async function getLogin() {

        try {
            setLoading(true);

            if(!email || !password){
                return Alert.alert('Atenção', 'Preencha todos os campos para continuar !');
            }

            setTimeout(() => {
                Alert.alert('Sucesso', 'Logado com sucesso !');
                setLoading(false);
                
            }, 3000);
 
            
        } catch (error) {
            console.log(error);
            
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

            <Text style={style.textBottom}>Não tem conta? <Text style={{color:themes.colors.primary, fontWeight:'bold'}}>Crie agora !</Text></Text>
                
        </View>
       
    )
}