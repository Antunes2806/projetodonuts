import { View, Text, Image } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function Carrinho() {
  return (
    <View style={styles.container}>
      <Text style={styles.txtcarrinho}>Carrinho</Text>
      <View style={styles.carro}>
        <View style={styles.imgcarrodnt}>
          <Image
            resizeMode="cover"
            style={{ width: "100%", height: 150 }}
            source={require("../assets/image/donutsmorango.png")}
          />
        </View>
        <View style={styles.txtdntcar}>
          <Text style={styles.txtdonutsmorcarro}> Donuts de Morango</Text>
          <Text style={styles.valor}>R$14,99</Text>
        </View>
      </View>
      <View style={styles.carro}>
        <View style={styles.imgcarrodnt}>
          <Image
            resizeMode="cover"
            style={{ width: "100%", height: 150 }}
            source={require("../assets/image/dntoreo1.png")}
          />
        </View>
        <View style={styles.txtdntcar}>
          <Text style={styles.txtdonutsmorcarro}> Donuts de Morango</Text>
          <Text style={styles.valor}>R$14,99</Text>
        </View>
      </View>
      <View style={styles.carro}>
        <View style={styles.imgcarrodnt}>
          <Image
            resizeMode="cover"
            style={{ width: "100%", height: 150 }}
            source={require("../assets/image/donutschoc.png")}
          />
        </View>
        <View style={styles.txtdntcar}>
          <Text style={styles.txtdonutsmorcarro}> Donuts de Morango</Text>
          <Text style={styles.valor}>R$14,99</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.resumo}>Resumo do pedido:</Text>
        <Text style={styles.itens}>Itens Total ...............................................$44,99</Text>
        <Text style={styles.taxa}>Taxa de Entrega ......................................$5,0</Text>
        <Text style={styles.total}>Total:........................................................$50,00</Text>
      </View>
    </View>
  );
}
