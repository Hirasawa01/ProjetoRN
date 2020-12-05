import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerPersonalizado from './DrawerPersonalizado';
import Inicial from '../../views/Inicial/Inicial';
import Perfil from '../../views/Perfil/Perfil';
import Item from '../../views/Item/Item';
import { MaterialIcons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const RotasDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={DrawerPersonalizado}
    >

      <Drawer.Screen 
        name="Inicial" 
        component={Inicial}
        options={{
          drawerIcon: ({color, size}) => (
            <MaterialIcons name='home' size={size} color={color} />
          )
        }}
      />

      <Drawer.Screen 
        name="Perfil" 
        component={Perfil}
        options={{
          drawerIcon: ({color, size}) => (
            <MaterialIcons name="storage" size={size} color={color} />
          )
        }}      
      />
      <Drawer.Screen 
        name="Item" 
        component={Item}
        initialParams={{item: {}, operacao: 'adicionar'}}
        options={{
          drawerIcon: ({color, size}) => (
            <MaterialIcons name="done-all" size={size} color={color} />
          )
        }}      
      />
      

    </Drawer.Navigator>
  );
}

export default RotasDrawer;