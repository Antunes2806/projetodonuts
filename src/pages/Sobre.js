import { View, Text, ImageBackground, Image, TouchableOpacity, Linking } from "react-native";
import { styles } from "../styles/StyleSheet";
import { EvilIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

export default function Sobre() {
  const handleAddressPress = () => {
    // Abre o endereço no Google Maps quando o texto for clicado
    Linking.openURL("https://www.google.com/maps?q=SESI+436");
  };
  const insta = () => {
    // Abre o endereço no Google Maps quando o texto for clicado
    Linking.openURL("https://www.instagram.com/sesisp/");
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assets/image/fundo.png")} style={styles.fundo}
        blurRadius={9}>
          <View style={styles.vieew}>
          <Image source={require("../assets/image/donutsrosa.png")} style={styles.donutsrosa}/>
          </View>
          <View style={styles.vieew3}>
          <Text style={styles.sobrenos}> Sobre Nós</Text>
          <Text style={styles.nome}> DONUTS DREAMS</Text>
          <Text style={styles.texto}>A Donuts Dreams nasceu do amor e da união de quatro pessoas especiais: 
      João, Ana, Maykon e Stefany. Nossa história começoucom a paixão per Donuts e a vontade de compartilhar esse amor 
      com o mundo. Desde então, trabalhamos juntos para oferecer a você o melhor Donuts, feito com carinho e dedicação.</Text>
      <EvilIcons name="location" size={30} color="black" bottom={250} left={45} />
      <SimpleLineIcons name="social-instagram" size={20} color="black" bottom={230} left={49} />
      <TouchableOpacity onPress={insta}>
      <Text style={styles.instaa}>
          Donuts_Dreams
        </Text>
        </TouchableOpacity>
      <TouchableOpacity onPress={handleAddressPress}>
        <Text style={styles.end}>
          Endereço: SESI 436 - R. dos Jacarandás, 100 - Jardim das Palmeiras,
          Nova Odessa - SP, 13460-000
        </Text>
      </TouchableOpacity>
       
      
          </View>
      </ImageBackground>
    </View>
    
  );
}
