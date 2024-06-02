import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import { styles } from "../styles/StyleSheet";
import { EvilIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";

export default function Sobre() {
  const [sobreTexto, setSobreTexto] = useState([]);
  const isFocused = useIsFocused();

  const handleAddressPress = () => {
    // Abre o endereço no Google Maps quando o texto for clicado
    Linking.openURL("https://www.google.com/maps?q=SESI+436");
  };
  const insta = () => {
    // Abre o endereço no Google Maps quando o texto for clicado
    Linking.openURL("https://www.instagram.com/sesisp/");
  };

  useEffect(() => {
    if (isFocused) {
      readSobre();
    }
  }, [isFocused]);

  async function readSobre() {
    try {
      const response = await axios.get("http://192.168.1.201:3000/api/sobre");
      setSobreTexto(response.data);
      console.log(sobreTexto[0].texto);
      console.log(sobreTexto[0].id);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/image/fundo.png")}
        style={styles.fundo}
        blurRadius={9}
      >
        <View style={styles.vieew}>
          <Image
            source={require("../assets/image/donutsrosa.png")}
            style={styles.donutsrosa}
          />
        </View>
        <View style={styles.vieew3}>
          <Text style={styles.sobrenos}> Sobre Nós</Text>
          <Text style={styles.nome}> DONUTS DREAMS</Text>
          {sobreTexto.length > 0 ? (
            <Text style={styles.texto}>{sobreTexto[0].texto}</Text>
          ) : (
            <Text>Carregando...</Text>
          )}
          <EvilIcons
            name="location"
            size={30}
            color="black"
            bottom={250}
            left={45}
          />
          <SimpleLineIcons
            name="social-instagram"
            size={20}
            color="black"
            bottom={230}
            left={49}
          />
          <TouchableOpacity onPress={insta}>
            <Text style={styles.instaa}>Donuts_Dreams</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleAddressPress}>
            <Text style={styles.end}>
              Endereço: SESI 436 - R. dos Jacarandás, 100 - Jardim das
              Palmeiras, Nova Odessa - SP, 13460-000
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
