import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Perfil from '../../views/Perfil/Perfil';
import Item from '../../views/Item/Item';
import { MaterialIcons } from '@expo/vector-icons';
import RotasDrawer from '../rotasDrawer/RotasDrawer';

const Tab = createBottomTabNavigator();

const icones = {
  Inicial: { name: 'home' },
  Perfil: { name: 'storage' },
  Item: { name: 'done-all' }, 
}

const RotasTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={
        {
          style: {backgroundColor: '#081a31', borderTopColor: '#081a31'},
          activeTintColor: '#FFFFFF',
          showLabel: false,
        }
      }
      screenOptions={ ({route}) => ({
        tabBarIcon: ({color}) => {
            const {name} = icones[route.name];
            return <MaterialIcons name={name} size={30} color={color} />
          }
        })
      }
    >
      <Tab.Screen 
        name="Inicial" 
        component={RotasDrawer}
        options={{
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen 
        name="Perfil" 
        component={Perfil} 
        options={{
          unmountOnBlur: true,
        }}
      />      
      <Tab.Screen name="Item" component={Item} initialParams={{item: {}, operacao: 'adicionar'}} />
    </Tab.Navigator>
  );
}

export default RotasTab;