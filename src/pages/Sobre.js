import { View, Text, ImageBackground, Image } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function Sobre() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assets/image/fundo.png")} style={styles.fundo}
        blurRadius={9}>
          <View style={styles.vieew1}>
          <Text style={styles.sobrenos}> Sobre Nós</Text>
          <Text style={styles.nome}> DONUTS DREAMS</Text>
          </View>
          <View style={styles.vieew}>
          <Image source={require("../assets/image/donutsrosa.png")} style={styles.donutsrosa}/>
          </View>
          <View style={styles.vieew3}>
          <Text style={styles.texto}> "A Jam's Açaí nasceu do amor e da união de quatro pessoas especiais: 
      João, Ana, Maykon e Stefany. Nossa história começoucom a paixão pelo açaí e a vontade de compartilhar esse amor 
      com o mundo. Desde então, trabalhamos juntos para oferecer a você o melhor açaí, feito com carinho e dedicação."</Text>
          </View>

      </ImageBackground>
    </View>
    
  );
}
