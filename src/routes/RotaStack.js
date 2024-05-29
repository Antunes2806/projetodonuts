import React from "react";

// Stack Navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Páginas
import Home from "../pages/Home";
import Donuts from "../pages/Donuts";
import Donutschoc from "../pages/Donutschoc";
import Donutsoreo from "../pages/Donutsoreo";
import PageBoloMorango from "../pages/PageBoloMorango";
import PageBoloCenoura from "../pages/PageBoloCenoura";
import PageBoloChocolate from "../pages/PageBoloChocolate";

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

      <Stack.Screen
        name="PageBoloCenoura"
        component={PageBoloCenoura}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="PageBoloChocolate"
        component={PageBoloChocolate}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
