import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../pages/Home";
import Carrinho from "../pages/Carrinho";
import Sobre from "../pages/Sobre";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

import RotaDrawer from "./RotaStack";

export default function RoutesTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#f2ece3",
        tabBarInactiveTintColor: "#FFFFFF",
        tabBarStyle: {
          backgroundColor: "#662520",
          height: 50,
          position: "absolute",
          bottom: 20,
          right: 20,
          left: 20,
          borderTopEndRadius: 15,
          borderTopColor: "transparent",
          padding: 10,
          shadowColor: "#662520",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,

          elevation: 8,
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
          title: "",
        }}
        name="HomeScreen"
        component={RotaDrawer}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name="newspaper-o" size={size} color={color} />;
          },
          title: "",
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
          title: "",
        }}
        name="Carrinho"
        component={Carrinho}
      />
    </Tab.Navigator>
  );
}
