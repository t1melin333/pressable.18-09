import React from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";

export default function TelaCoelhos (props) {
    return (
        <View style={ estilos.container }>
            <Image source={{uri: 'https://i.pinimg.com/236x/df/0a/24/df0a241a374f0fab61f9532775e5fda6.jpg'}} style={ estilos.cardImg }/>

            <Text style={ estilos.titulo }>Saiba mais sobre animais fofos</Text>
            <Text style={ estilos.descricao }>Toque no botão abaixo de conheça mais sobre o mundo animal</Text>

            <View style={estilos.boxBotoes}>
                <Pressable onPress={ () => {props.navigation.navigate("TelaInicial") } }
                style={ estilos.botaoContainer }    
                >
                    <Text style={ estilos.botaoLabel}>Tela inicial</Text>
                </Pressable>

                <Pressable
                onPress={ () => {props.navigation.navigate("TelaCachorros") } }
                style={estilos.botaoContainer}
                >
                    <Text style={ estilos.botaoLabel}>Cachorro</Text>
                </Pressable>

                <Pressable
                onPress={ () => {props.navigation.navigate("TelaGatos") } }
                style={ estilos.botaoContainer }
                >
                    <Text style={estilos.botaoLabel}>Gatos</Text>
                </Pressable>
            </View>
        </View>
    )
}
const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    titulo: {
        color: '#000', 
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    descricao: {
        fontSize: 14,  
        color: '#000', 
    },
   botaoContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#cf9556',
    marginVertical: 5,
    borderRadius: 20,
    width: 200, // define uma largura
    },

    boxBotoes: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
    },
    cardImg: {
        width: 200,
        height: 200,
        marginBottom: 50,
    },
    botaoLabel: {
        fontSize: 14,  
        color: '#fff',
    },
});