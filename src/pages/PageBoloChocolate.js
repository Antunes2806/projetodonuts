import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../styles/StyleSheet";
import { useNavigation } from "@react-navigation/native";

import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function PageBoloChocolate() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "#402816" }}>
      <View style={styles.viewmodelochoc}>
        <View style={styles.cssicons}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <EvilIcons name="arrow-left" size={45} color="#f2ece3" />
          </TouchableOpacity>
          <Ionicons name="heart-circle-outline" size={40} color="#f2ece3" />
        </View>
        <View style={styles.imgbolo}>
          <Image
            style={{
              width: 450,
              height: 400,
              bottom: -25,
            }}
            source={require("../assets/image/bolochoc.png")}
            resizeMode="cover"
          />
        </View>
      </View>
      <View style={styles.view2morango}>
        <Text style={styles.titulochoc}>Bolo de Chocolate</Text>
        <Text style={styles.sobre}>About</Text>
        <Text style={styles.txtdescricaomorango}>
          Experimente a perfeição do nosso Bolo de Chocolate, feito com o
          autêntico chocolate belga. Com camadas úmidas e macias, recheio de
          creme aveludado e uma cobertura de ganache brilhante, cada pedaço
          oferece uma experiência de sabor incomparável. Ideal para tornar
          qualquer ocasião especial inesquecível!
        </Text>

        <View style={{ flexDirection: "row" }}>
          <View style={styles.fundovalorchoc}>
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
