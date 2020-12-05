import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import estiloInicial from './estiloInicial';
import { AntDesign } from '@expo/vector-icons';
import { useIsDrawerOpen } from '@react-navigation/drawer';

function Inicial({ navigation }) {

    const isDrawerOpen = useIsDrawerOpen();

    const exibirDrawer = () => {
        if(!isDrawerOpen){
            navigation.openDrawer();
        }
    }

    const abrirPerfil = () => {
        navigation.navigate('Perfil')
    }
    
    const abrirItem = () => {
        navigation.navigate('Item')
    }
    
    return (
        <View style={estiloInicial.container}>

            <View style={estiloInicial.header}>
                <TouchableOpacity onPress={exibirDrawer}>
                    <AntDesign name="menu-fold" size={20} color="white" />
                </TouchableOpacity>
            </View>

            <ImageBackground style={estiloInicial.fundo} source={require('../../../assets/imagens/aco.jpg')}>

                <TouchableOpacity onPress={abrirPerfil}>
                    <ImageBackground style={estiloInicial.botaoBackground} source={require('../../../assets/imagens/espaco.jpg')}>
                        <Text style={estiloInicial.botaoTexto}>Perfil</Text>                    
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity onPress={abrirItem}>
                    <ImageBackground style={estiloInicial.botaoBackground} source={require('../../../assets/imagens/ring.jpg')}>
                        <Text style={estiloInicial.botaoTexto}>Alunos</Text>                    
                    </ImageBackground>
                </TouchableOpacity>

            </ImageBackground>
        </View>
    )
}

export default Inicial;
