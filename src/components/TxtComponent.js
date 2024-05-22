import { Text, View } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function TxtComponent({ styletxt, txt }) {
  return <Text style={styletxt}>{txt}</Text>;
}
