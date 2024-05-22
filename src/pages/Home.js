import { View, TextInput, Image, Text, ScrollView } from "react-native";
import { styles } from "../styles/StyleSheet";

import React, { useState } from "react";

import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";

import TxtComponent from "../components/TxtComponent";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function Home() {
  const [Texto, setTexto] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.pesquisa}>
        <TextInput
          style={styles.input}
          placeholder="   Pesquisar"
          value={Texto}
          onChangeText={(value) => setTexto(value)}
        />

        <Ionicons
          name="search-circle-sharp"
          size={40}
          color="#662520"
          onPress={() => {}}
        />
      </View>

      <TxtComponent txt="Produtos" styletxt={styles.txtproduto} />

      <View style={styles.doces}>
        {/*produtos: donuts*/}
        <View style={styles.donuts}>
          <MaterialCommunityIcons
            name="record-circle-outline"
            size={24}
            color="#662520"
          />
          <Text style={{ color: "#662520" }}>Donuts</Text>
        </View>
        {/*produtos: bolo*/}
        <View style={styles.donuts}>
          <FontAwesome6 name="cake-candles" size={24} color="#662520" />
          <Text style={{ color: "#662520" }}>Bolo</Text>
        </View>
        {/*produtos: brownie*/}
        <View style={styles.donuts}>
          <Feather name="square" size={24} color="#662520" />
          <Text style={{ color: "#662520" }}>brownie</Text>
        </View>
        {/*produtos: sorvete*/}
        <View style={styles.donuts}>
          <Ionicons name="ice-cream-outline" size={24} color="#662520" />
          <Text style={{ color: "#662520" }}>Sorvete</Text>
        </View>
      </View>

<ScrollView>
<TxtComponent txt="Donuts" styletxt={styles.txtdonuts} />

{/*componente do Donuts*/}
<View style={styles.dnttrad}>
      <Image
        style={styles.imgchoc}
        source={require("../assets/image/donutschoc.png")}
      />
      <TxtComponent txt="Donuts Tradicional" styletxt={styles.txtdnt} />
      <TxtComponent
        txt="com ganache de chocolate"
        styletxt={{ bottom: 60, textAlign: "center", bottom: 70 }}
      />
      <TxtComponent
        txt="R$ 20"
        styletxt={{ bottom: 60, fontWeight: "bold", left: 35, fontSize: 17 }}
      />
      <View
        style={{
          bottom: 70,
          left: 210,
          backgroundColor: "#662520",
          borderRadius: 50,
          width: 40,
          height: 40,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AntDesign name="shoppingcart" size={24} color="white" />
      </View>
    </View>

    {/*componente do Bolo*/}

    <TxtComponent txt="Bolos" styletxt={styles.txtbolo} />
    <View style={styles.bolo}>
      <Image
        style={styles.imgchoc}
        source={require("../assets/image/donutschoc.png")}
      />
      <TxtComponent txt="Donuts Tradicional" styletxt={styles.txtdnt} />
      <TxtComponent
        txt="com ganache de chocolate"
        styletxt={{ bottom: 60, textAlign: "center", bottom: 70 }}
      />
      <TxtComponent
        txt="R$ 20"
        styletxt={{ bottom: 60, fontWeight: "bold", left: 35, fontSize: 17 }}
      />
      <View
        style={{
          bottom: 70,
          left: 210,
          backgroundColor: "#662520",
          borderRadius: 50,
          width: 40,
          height: 40,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AntDesign name="shoppingcart" size={24} color="white" />
      </View>
    </View>
</ScrollView>
      

      
    </View>
  );
}
