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
          style={{
            top: 100,
            alignItems: "center",
            right: 50,
            width: "75%",
            height: "120%",
            left: 0,
          }}
          source={require("../assets/image/dntoreo1.png")}
        />
      </View>
      <View>
        <View style={{ bottom: 180, left: 20 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <EvilIcons name="arrow-left" size={45} color="white" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            bottom: 220,
            left: 350,
          }}
        >
          <Ionicons name="heart-circle-outline" size={40} color="white" />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          backgroundColor: "black",
          width: 70,
          top: 50,
          left: 30,
          borderRadius: 20,
          height: 30,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FontAwesome name="star" size={20} color="white" />
        <Text style={{color: "white"}}>4.3</Text>
      </View>

      <Text
        style={{
          color: "#3e2217",
          fontSize: 35,
          top: 60,
          left: 30,
        }}
      >
        Donuts de Oreo
      </Text>

      <Text
        style={{
          top: 70,
          fontSize: 20,
          left: 30,
        }}
      >
        About
      </Text>

      <Text
        style={{
          top: 80,
          width: 350,
          left: 30,
          color: "gray",
        }}
      >
        Delicie-se com nosso Donut de Oreo! Com uma massa macia, 
        cobertura de chocolate, pedaços de biscoito Oreo e calda de 
        chocolate, é a combinação perfeita para os amantes de Oreo.
      </Text>

      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            backgroundColor: "black",
            width: 90,
            height: 30,
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
            top: 150,
            left: 30,
          }}
        >
          <Text style={{ fontSize: 15, color:"white" }}>R$14,99</Text>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "#3e2217",
            width: 200,
            height: 60,
            borderRadius: 30,
            top: 140,
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
  );
}
