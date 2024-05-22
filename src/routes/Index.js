import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
import Carrinho from "../pages/Carrinho";
import Sobre from "../pages/Sobre";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

import RotaDrawer from "../routes/RotaDrawer";

export default function RoutesTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#f2ece3",
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
          backgroundColor: "#662520",
          borderTopColor: "transparent",
          padding: 3,
          bottom: 50,
          right: 15,
          left: 15,
          position: "absolute",
          borderRadius: 100,
        height: 60,
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowColor:"#662520",
          shadowOpacity: 0.5,
          shadowRadius: 6.65,
          alignItems: "center",
          alignContent: "center",
        },
      }}
    >
      {/* Componente Navigator do navegador tab.*/}
      <Tab.Screen
        options={{
          headerShown: false,

          tabBarIcon: ({ color, size }) => {
            return <FontAwesome size={size} color={color} name="home" />;
          },
          title: ""
        }}
        name="Home"
        component={RotaDrawer}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name="newspaper-o" size={size} color={color} />;
          },
          title: ""
        }}
        name="Sobre"
        component={Sobre}
      />

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialIcons name="shopping-cart" size={size} color={color} />
            );
          },
          title: ""
        }}
        name="Carrinho"
        component={Carrinho}
      />
    </Tab.Navigator>
  );
}
