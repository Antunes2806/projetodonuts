import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../styles/StyleSheet";
import { useNavigation } from "@react-navigation/native";

import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function Donutschoc() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.viewmodelo2}>
        <Image
          style={styles.imgdntchoc}
          source={require("../assets/image/chocdonuts.png")}
        />
      </View>

      <View style={{ bottom: 180, left: 20 }}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <EvilIcons name="arrow-left" size={45} color="white" />
        </TouchableOpacity>
      </View>

      <View style={{ bottom: 220, left: 350 }}>
        <Ionicons name="heart-circle-outline" size={40} color="white" />
      </View>

      <View style={styles.avaliacaodntchoc}>
        <FontAwesome name="star" size={20} color="white" />
        <Text style={{ color: "white" }}>4.3</Text>
      </View>

      <Text style={styles.txtdntchoc}>Donuts de Chocolate</Text>

      <Text style={styles.txtaboutchoc}>About</Text>

      <Text style={styles.txtdescricaochoc}>
        Prepare-se para uma explosão de sabor com o nosso irresistível Donut de
        Chocolate! Feito com uma massa macia e perfeitamente frita, cada mordida
        é uma combinação perfeita de textura e sabor que derrete na boca.
      </Text>

      <View style={{ flexDirection: "row" }}>
        <View style={styles.txtvalorchoc}>
          <Text style={{ fontSize: 15, color: "white" }}>R$14,99</Text>
        </View>

        <TouchableOpacity style={styles.btnadcchoc}>
          <Text style={styles.txtadcchoc}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
