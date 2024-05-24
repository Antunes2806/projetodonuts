// https://br.pinterest.com/pin/pinterest--58969076362805082/

import { View, TextInput, Image, Text, ScrollView } from "react-native";
import { styles } from "../styles/StyleSheet";

import React, { useState } from "react";
import Carousel from "react-native-snap-carousel";

import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";

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
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={item.imgUrl} style={styles.img} resizeMode="stretch" />
    </View>
  );
}

export default function Home() {
  const [texto, setTexto] = useState("");
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.pesquisa}>
          <View
            style={{
              position: "relative",
              top: "30%",
              width: "100%",
              height: 390,
            }}
          >
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
        <View
          style={{
            flex: 1,
            padding: 10,
            marginTop: "30%",
          }}
        >
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
            <View style={styles.productsCategory}>
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
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <View
              style={{
                width: "95%",
                height: 100,
                backgroundColor: "#f2ece3",
                borderRadius: 20,
                shadowColor: "#662520",
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                shadowOpacity: 0.7,
                shadowRadius: 8.3,
                elevation: 13,
                flexDirection: "row",
                borderRadius: 20,
                overflow: "hidden",
                margin: 10,
              }}
            >
              <View
                style={{
                  width: "30%",
                  height: "100%",
                  backgroundColor: "#662520",

                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    width: "95%",
                    height: "95%",
                  }}
                  source={require("../assets/image/donutsNotBack.png")}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: "#f2ece3",
                  padding: 10,
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "#662520" }}>DONUTS BEM LOKO!</Text>
              </View>
            </View>

            <View
              style={{
                width: "95%",
                height: 100,
                backgroundColor: "#f2ece3",
                borderRadius: 20,
                shadowColor: "#662520",
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                shadowOpacity: 0.7,
                shadowRadius: 8.3,
                elevation: 13,
                flexDirection: "row",
                borderRadius: 20,
                overflow: "hidden",
                margin: 10,
              }}
            >
              <View
                style={{
                  width: "30%",
                  height: "100%",
                  backgroundColor: "#662520",

                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    width: "95%",
                    height: "95%",
                  }}
                  source={require("../assets/image/donutsNotBack.png")}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: "#f2ece3",
                  padding: 10,
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "#662520" }}>DONUTS BEM LOKO!</Text>
              </View>
            </View>

            <View
              style={{
                width: "95%",
                height: 100,
                backgroundColor: "#f2ece3",
                borderRadius: 20,
                shadowColor: "#662520",
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                shadowOpacity: 0.7,
                shadowRadius: 8.3,
                elevation: 13,
                flexDirection: "row",
                borderRadius: 20,
                overflow: "hidden",
                margin: 10,
              }}
            >
              <View
                style={{
                  width: "30%",
                  height: "100%",
                  backgroundColor: "#662520",

                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{
                    width: "95%",
                    height: "95%",
                  }}
                  source={require("../assets/image/donutsNotBack.png")}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: "#f2ece3",
                  padding: 10,
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "#662520" }}>DONUTS BEM LOKO!</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
