import React from "react";

// Stack Navigation
import { NavigationContainer } from "@react-navigation/native"; // Importa o componente NavigationContainer de "@react-navigation/native" para envolver a navegação da aplicação.
import { createDrawerNavigator } from "@react-navigation/drawer";

// Páginas
import Home from "../pages/Home";
import Donuts from "../pages/Donuts";
import Bolos from "../pages/Bolos";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import { MaterialIcons } from '@expo/vector-icons';



const Drawer = createDrawerNavigator();

export default function RotaDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: { backgroundColor: "white" },
        drawerActiveBackgroundColor: "#662520",
        drawerActiveTintColor: "white",

        drawerInactiveBackgroundColor: "white",
        drawerInactiveTintColor: "#662520",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ color, size }) => {
            return <FontAwesome name="home" size={size} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="Donuts"
        component={Donuts}
        options={{
          drawerIcon: ({ color, size }) => {
            return <MaterialIcons name="food-bank" size={size} color={color} />
          },
        }}
      />
      <Drawer.Screen
        name="Bolos"
        component={Bolos}
        options={{
          drawerIcon: ({ color, size }) => {
            return <MaterialIcons name="cake" size={size} color={color} />
          },
        }}
      />
    </Drawer.Navigator>
  );
}
