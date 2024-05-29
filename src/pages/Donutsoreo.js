import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../styles/StyleSheet";
import { useNavigation } from "@react-navigation/native";

import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function Donutsoreo() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.viewmodelo1}>
        <Image
          style={styles.imgdntoreo}
          source={require("../assets/image/dntoreo1.png")}
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

      <View style={styles.avaliacaodntoreo}>
        <FontAwesome name="star" size={20} color="white" />
        <Text style={{ color: "white" }}>4.3</Text>
      </View>

      <Text style={styles.txtdntoreo}>Donuts de Oreo</Text>

      <Text style={styles.txtaboutoreo}>About</Text>

      <Text style={styles.txtdescricaooreo}>
        Delicie-se com nosso Donut de Oreo! Com uma massa macia, cobertura de
        chocolate, pedaços de biscoito Oreo e calda de chocolate, é a combinação
        perfeita para os amantes de Oreo.
      </Text>

      <View style={{ flexDirection: "row" }}>
        <View style={styles.txtvalororeo}>
          <Text style={{ fontSize: 15, color: "white" }}>R$14,99</Text>
        </View>

        <TouchableOpacity style={styles.btnadcoreo}>
          <Text style={styles.txtadcoreo}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
