import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../styles/StyleSheet";
import { useNavigation } from "@react-navigation/native";

import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function Donuts() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.viewmodelo}>
        <Image
          style={styles.imgdnt}
          source={require("../assets/image/donutsmorango.png")}
        />
      </View>
      <View>
        <View style={{ bottom: 180, left: 20 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <EvilIcons name="arrow-left" size={45} color="white" />
          </TouchableOpacity>
        </View>
        <View style={{ bottom: 220, left: 350 }}>
          <Ionicons name="heart-circle-outline" size={40} color="white" />
        </View>
      </View>

      <View style={styles.avaliacaodnt}>
        <FontAwesome name="star" size={20} color="black" />
        <Text>4.3</Text>
      </View>

      <Text style={styles.txtdntmor}>Donuts de Morango</Text>

      <Text style={styles.txtabout}>About</Text>

      <Text style={styles.txtdescricao}>
        Delicie-se com nosso Donut de Morango! Coberto com uma suave glacê rosa
        e decorado com listras brancas e pedaços de morango desidratado, este
        donut é uma explosão de sabor e uma verdadeira festa para os olhos.
        Perfeito para qualquer ocasião!
      </Text>

      <View style={{ flexDirection: "row" }}>
        <View style={styles.txtvalor}>
          <Text style={{ fontSize: 15 }}>R$14,99</Text>
        </View>

        <TouchableOpacity style={styles.btnadc}>
          <Text style={styles.txtadc}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
