import { View, Text, ImageBackground, Image } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function Sobre() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/image/donuts2.png")}
        style={styles.donuts2}
        blurRadius={6}>
        <View style={styles.vieew}>
        <Image 
         source={require("../assets/image/donutsrosa.png")} style={styles.donuts3}/>

        <Text style={styles.texto1}>Donuts Dreams</Text>
        <Text style={styles.texto2}>A Donuts Dreams nasceu do amor e da união de quatro pessoas especiais: 
      João, Ana, Maykon e Stefany. Nossa história começoucom a paixão pelo Donuts e a vontade de compartilhar esse amor 
      com o mundo. Desde então, trabalhamos juntos para oferecer a você o melhor Donuts, feito com carinho e dedicação.</Text>
    </View>
      </ImageBackground>
      </View>
    
  );
}
