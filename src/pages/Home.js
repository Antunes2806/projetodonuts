// https://br.pinterest.com/pin/pinterest--58969076362805082/

import { View, TextInput, Image, Text, ScrollView } from "react-native";
import { styles } from "../styles/StyleSheet";

import React, { useState } from "react";
import Carousel from "react-native-snap-carousel";

import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import TxtComponent from "../components/TxtComponent";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const data = [
  {
    imgUrl: require("../assets/image/donutsCarousel.png"),
  },
  {
    imgUrl: require("../assets/image/donutsNotBack.png"),
  },
  {
    imgUrl: require("../assets/image/donutsCarousel.png"),
  },
  {
    imgUrl: require("../assets/image/donutsNotBack.png"),
  },
];

function CarouselCardItem({ item }) {
  return (
    <View style={styles.viewimg}>
      <Image source={item.imgUrl} style={styles.img} resizeMode="stretch" />
    </View>
  );
}

export default function Home() {
  const navigation = useNavigation();
  const [texto, setTexto] = useState("");
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.pesquisa}>
          <View style={styles.carrosel}>
            <Carousel
              data={data}
              renderItem={CarouselCardItem}
              sliderWidth={390}
              itemWidth={390}
              autoplay={true}
              autoplayInterval={3000}
              loop={true}
              layout={"tinder"}
              layoutCardOffset={`9`}
            />
          </View>
        </View>
        <View style={styles.viewtotal}>
          <TxtComponent txt="Donuts Dreams" styletxt={styles.txttitle} />

          <TxtComponent txt="Categorias" styletxt={styles.txtproduto} />

          <View style={styles.areaCategory}>
            {/*produtos: donuts*/}
            <View style={styles.productsCategory}>
              <MaterialCommunityIcons
                name="record-circle-outline"
                size={24}
                color="#f2ece3"
              />
              <Text style={{ color: "#f2ece3" }}>Donuts</Text>
            </View>
            {/*produtos: bolo*/}
            <View
              style={styles.productsCategory}
            >
              <FontAwesome6 name="cake-candles" size={24} color="#f2ece3" />
              <Text style={{ color: "#f2ece3" }}>Bolo</Text>
            </View>
            {/*produtos: brownie*/}
            <View style={styles.productsCategory}>
              <Feather name="square" size={24} color="#f2ece3" />
              <Text style={{ color: "#f2ece3" }}>brownie</Text>
            </View>
            {/*produtos: sorvete*/}
            <View style={styles.productsCategory}>
              <Ionicons name="ice-cream-outline" size={24} color="#f2ece3" />
              <Text style={{ color: "#f2ece3" }}>Sorvete</Text>
            </View>
          </View>
          <View style={styles.viewtotal2}>
            <View>
              <TxtComponent txt="Donuts" styletxt={styles.txtdonuts} />
            </View>
            <View
              style={styles.inputpricipal}
              onTouchStart={() => navigation.navigate("Donuts")}
            >
              <View style={styles.viewimgH}>
                <Image
                  style={styles.imgHome}
                  source={require("../assets/image/donutsmorango.png")}
                />
              </View>
              <View style={styles.txtdnthome}>
                <Text style={{ color: "#662520" }}>DONUTS DE MORANGO</Text>
              </View>
            </View>

            <View
              style={styles.inputpricipal}
              onTouchStart={() => navigation.navigate("Donutschoc")}
            >
              <View style={styles.viewimgH}>
                <Image
                  style={styles.imgHome2}
                  source={require("../assets/image/chocdonuts.png")}
                />
              </View>
              <View style={styles.txtdnthome}>
                <Text style={{ color: "#662520" }}>DONUTS DE CHOCOLATE</Text>
              </View>
            </View>

            <View
              style={styles.inputpricipal}
              onTouchStart={() => navigation.navigate("Donutsoreo")}
            >
              <View style={styles.viewimgH}>
                <Image
                  style={{
                    width: "90%",
                    height: "90%",
                  }}
                  source={require("../assets/image/dntoreo1.png")}
                />
              </View>
              <View style={styles.txtdnthome}>
                <Text style={{ color: "#662520" }}>DONUTS DE OREO</Text>
              </View>
            </View>
          </View>
        </View>

        {/* criando os botoẽs do bolo*/}
        <View style={styles.bolos}>
          <TxtComponent txt="Bolos" styletxt={styles.txtbolo} />
          <View
            style={styles.inputpricipalbolo}
            onTouchStart={() => navigation.navigate("PageBoloMorango")}
          >
            <View style={styles.viewimgH}>
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  bottom: 10,
                }}
                source={require("../assets/image/bolomorango.png")}
              />
            </View>
            <View style={styles.txtdnthome}>
              <Text style={{ color: "#662520" }}>MORANGO COM NINHO</Text>
            </View>
          </View>
          <View
            style={styles.inputpricipalbolo}
            onTouchStart={() => navigation.navigate("PageBoloCenoura")}
          >
            <View style={styles.viewimgH}>
              <Image
                style={{
                  width: "95%",
                  height: "95%",
                  bottom: 10,
                }}
                source={require("../assets/image/bolocenoura.png")}
              />
            </View>
            <View style={styles.txtdnthome}>
              <Text style={{ color: "#662520" }}>
                CENOURA COM COBERTURA DE CHOCOLATE
              </Text>
            </View>
          </View>
          <View
            style={styles.inputpricipalbolo}
            onTouchStart={() => navigation.navigate("PageBoloChocolate")}
          >
            <View style={styles.viewimgH}>
              <Image
                style={styles.imgbolochoc}
                source={require("../assets/image/bolochoc.png")}
              />
            </View>
            <View style={styles.txtdnthome}>
              <Text style={{ color: "#662520" }}>CHOCOLATE</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
