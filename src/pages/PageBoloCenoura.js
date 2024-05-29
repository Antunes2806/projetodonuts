import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "../styles/StyleSheet";
import { useNavigation } from "@react-navigation/native";

import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function PageBoloCenoura() {
  const navigation = useNavigation();
  return (
    <View style={styles.containercenoura}>
      <View style={styles.viewmodelocenoura1}>
        <View style={styles.cssicons}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <EvilIcons name="arrow-left" size={45} color="#f2ece3" />
          </TouchableOpacity>
          <Ionicons name="heart-circle-outline" size={40} color="#f2ece3" />
        </View>
        <View style={styles.imgbolo}>
          <Image
            style={styles.imgbolocenoura}
            source={require("../assets/image/bolocenoura.png")}
            resizeMode="cover"
          />
        </View>
      </View>
      <View style={styles.view2morango}>
        <Text style={styles.titulobolocenoura}>
          Bolo de Cenoura com cobertura de Chocolate
        </Text>
        <Text style={styles.sobre}>About</Text>
        <Text style={styles.txtdescricaomorango}>
        O bolo de cenoura com cobertura de chocolate é uma delícia clássica, com massa fofinha e úmida feita de cenouras frescas, e uma cobertura espessa e brilhante de chocolate. A combinação do sabor suave das cenouras com a cremosidade do chocolate cria uma experiência irresistível e nostálgica.
        </Text>

        <View style={{ flexDirection: "row" }}>
          <View style={styles.fundovalorbolocenoura}>
            <Text style={{ fontSize: 15, color: "white" }}>R$14,99</Text>
          </View>

          <TouchableOpacity style={styles.btnadcbolocenoura}>
            <Text style={{ textAlign: "center", color: "white", fontSize: 25 }}>
              Adicionar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
