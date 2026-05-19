import React,{useState} from "react";
import {
    View,
    Text, 
    TextInput,
    TouchableOpacity
} from "react-native";

import { style } from "./styles";
import {MaterialIcons} from '@expo/vector-icons'




export default function CriarUsuario() {
    return (
        <View style={style.container}>
            <Text style={style.title}>Criar Usuario</Text>

            <View style={style.form}>

                <Text style={style.text}>NOME:</Text>
                <TextInput
                    style={style.input}
                />

                <Text style={style.text}>EMAIL:</Text>
                <TextInput
                    style={style.input}
                    
                />
            
                <Text style={style.text}>PASSWORD:</Text>
                <TextInput
                    style={style.input}
                    secureTextEntry={true}
                />

                <Text style={style.text}>CONFIRM PASSWORD:</Text>
                <TextInput
                    style={style.input}
                    secureTextEntry={true}
                />

            </View>

            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button}>
                    <Text style={style.buttonText}>Criar Usuario</Text>
                </TouchableOpacity>

            </View>

            <Text style={style.textLogin}>Realizar Login !</Text>
            
        </View>

    )
}