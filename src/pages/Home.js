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
  const navigation = useNavigation();
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
              onTouchStart={() => navigation.navigate("Bolos")}
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
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <View>
              <TxtComponent txt="Donuts" styletxt={styles.txtdonuts} />
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
              onTouchStart={() => navigation.navigate("Donuts")}
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
                    width: "130%",
                    height: "100%",
                    left: -10,
                  }}
                  source={require("../assets/image/donutsmorango.png")}
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
                <Text style={{ color: "#662520" }}>DONUTS DE MORANGO</Text>
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
              onTouchStart={() => navigation.navigate("Donutschoc")}
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
                    bottom: 10,
                  }}
                  source={require("../assets/image/chocdonuts.png")}
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
                <Text style={{ color: "#662520" }}>DONUTS DE CHOCOLATE</Text>
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
              onTouchStart={() => navigation.navigate("Donutsoreo")}
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
                    width: "90%",
                    height: "90%",
                  }}
                  source={require("../assets/image/dntoreo1.png")}
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
                <Text style={{ color: "#662520" }}>DONUTS DE OREO</Text>
              </View>
            </View>
          </View>
        </View>

        {/* criando os botoẽs do bolo*/}
        <View style={styles.bolos}>
          <TxtComponent txt="Bolos" styletxt={styles.txtbolo} />
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
              bottom: 100,
            }}
            onTouchStart={() => navigation.navigate("PageBoloMorango")}
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
                  width: "100%",
                  height: "100%",
                  bottom: 10,
                }}
                source={require("../assets/image/bolomorango.png")}
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
              <Text style={{ color: "#662520" }}>MORANGO COM NINHO</Text>
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
              bottom: 100,
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
                  bottom: 10,
                }}
                source={require("../assets/image/bolocenoura.png")}
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
              <Text style={{ color: "#662520" }}>
                CENOURA COM COBERTURA DE CHOCOLATE
              </Text>
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
              bottom: 100,
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
                  width: "110%",
                  height: "110%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                source={require("../assets/image/bolochoc.png")}
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
              <Text style={{ color: "#662520" }}>CHOCOLATE</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
