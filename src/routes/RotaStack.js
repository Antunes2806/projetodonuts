import React from "react";

// Stack Navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Páginas
import Home from "../pages/Home";
import Donuts from "../pages/Donuts";
import Bolos from "../pages/Bolos";
import Donutschoc from "../pages/Donutschoc";
import Donutsoreo from "../pages/Donutsoreo";
import PageBoloMorango from "../pages/PageBoloMorango";

const Stack = createNativeStackNavigator();

export default function RotaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Donuts"
        component={Donuts}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Bolos"
        component={Bolos}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Donutschoc"
        component={Donutschoc}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Donutsoreo"
        component={Donutsoreo}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="PageBoloMorango"
        component={PageBoloMorango}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
