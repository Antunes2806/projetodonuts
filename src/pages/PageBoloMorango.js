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
        <View
          style={{
            height: "20%",
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 15,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <EvilIcons name="arrow-left" size={45} color="#f2ece3" />
          </TouchableOpacity>
          <Ionicons name="heart-circle-outline" size={40} color="#f2ece3" />
        </View>
        <View style={{ flex: 1 }}>
          <Image
            style={{
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
            source={require("../assets/image/bolomorango.png")}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "#f2ece3",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
      >
        <Text
          style={{
            color: "#662520",
            fontSize: 35,
            top: -20,
            left: 30,
          }}
        >
          Bolo de Ninho com Morango
        </Text>

        <Text
          style={{
            top: -20,
            fontSize: 20,
            left: 30,
          }}
        >
          About
        </Text>

        <Text
          style={{
            top: -10,
            width: 350,
            left: 30,
            color: "gray",
          }}
        >
          Desfrute do nosso Bolo de Leite Ninho com Morango! Feito com camadas
          macias de pão de ló, recheio cremoso de Leite Ninho e pedaços de
          morango fresco. Coberto com chantilly e decorado com um morango
          inteiro.
        </Text>

        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              backgroundColor: "#800000",
              width: 90,
              height: 30,
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
              top: 20,
              left: 30,
            }}
          >
            <Text style={{ fontSize: 15, color: "white" }}>R$14,99</Text>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: "#662520",
              width: 200,
              height: 60,
              borderRadius: 30,
              top: 10,
              left: 100,
              justifyContent: "center",
            }}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 25 }}>
              Adicionar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
