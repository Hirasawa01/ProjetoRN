import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import estiloPerfil from './estiloPerfil';
import ItemLista from '../../components/ItemLista/ItemLista';
import { MaterialIcons } from '@expo/vector-icons';
import { AlunoFB } from '../../firebase/alunoFB';

function Perfil({ navigation }) {

    const [perfil, setPerfil] = useState( [] );

    const alunoFb = new AlunoFB();

    useEffect(() => {
        alunoFb.pegarPerfil()
        .orderBy('nome')
        .onSnapshot((query) => {
            const items = [];
            query.forEach((doc) => {
                items.push({...doc.data(), id: doc.id});
            });
            setPerfil(items);
        });
    },[]);

    const voltar = () => {
        navigation.navigate('Inicial')
    }

    const adicionar = () => {
        navigation.navigate('Item', {item: {}, operacao: 'adicionar'})
    }
    
    const editar = (item) => {
        navigation.navigate('Item', {item: item, operacao: 'editar'})
    }
    
    
    return (
        <View style={estiloPerfil.container}>

            <View style={estiloPerfil.header}>
                <TouchableOpacity onPress={voltar}>
                    <MaterialIcons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                
                <Text style={estiloPerfil.texto}>Perfil dos alunos</Text>
                
                <TouchableOpacity onPress={adicionar}>
                    <MaterialIcons name="add" size={24} color="white" />
                </TouchableOpacity>
            </View>

            <FlatList 
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                data={perfil}
                renderItem={ ({item}) => <ItemLista data={item} detalhe={() => editar(item)} />}
            />

        </View>
    )
}

export default Perfil;
