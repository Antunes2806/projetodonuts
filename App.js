import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RoutesTab from "./src/routes/Index";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RoutesTab />
    </NavigationContainer>
  );
}
