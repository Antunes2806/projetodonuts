import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../styles/StyleSheet";
import { useNavigation } from "@react-navigation/native";

import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function PageBoloMorango() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "#800000" }}>
      <View style={styles.viewmodelo3}>
        <View style={styles.cssicons}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <EvilIcons name="arrow-left" size={45} color="#f2ece3" />
          </TouchableOpacity>
          <Ionicons name="heart-circle-outline" size={40} color="#f2ece3" />
        </View>
        <View style={styles.imgbolo}>
          <Image
            style={{
              width: 400,
              height: 400,
            }}
            source={require("../assets/image/bolomorango.png")}
            resizeMode="cover"
          />
        </View>
      </View>
      <View style={styles.view2morango}>
        <Text style={styles.titulo}>Bolo de Ninho com Morango</Text>
        <Text style={styles.sobre}>About</Text>
        <Text style={styles.txtdescricaomorango}>
          Desfrute do nosso Bolo de Leite Ninho com Morango! Feito com camadas
          macias de pão de ló, recheio cremoso de Leite Ninho e pedaços de
          morango fresco. Coberto com chantilly e decorado com um morango
          inteiro.
        </Text>

        <View style={{ flexDirection: "row" }}>
          <View style={styles.fundovalor}>
            <Text style={{ fontSize: 15, color: "white" }}>R$14,99</Text>
          </View>

          <TouchableOpacity style={styles.btnadcbolo}>
            <Text style={{ textAlign: "center", color: "white", fontSize: 25 }}>
              Adicionar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
