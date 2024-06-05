import { View, Text, Image } from "react-native";
import { styles } from "../styles/StyleSheet";

import { EvilIcons } from "@expo/vector-icons";

export default function Carrinho() {
  return (
    <View style={[styles.container, { alignItems: "center" }]}>
      <Text style={styles.txtcarrinho}>Carrinho</Text>

      {/*View primeiro produto*/}
      <View style={styles.carro}>
        <View style={styles.viewimgC}>
          <Image
            style={styles.imgcarrodnt}
            source={require("../assets/image/donutsmorango.png")}
          />
        </View>
        <View style={styles.txtdntcar}>
          <Text style={styles.txtdonutsmorcarro}> Donuts de Morango</Text>
          <Text style={styles.valor}>R$14,99</Text>
        </View>
        <View style={{ top: 70 }}>
          <EvilIcons name="trash" size={24} color="black" />
        </View>
      </View>

      {/* view segundo produto*/}
      <View style={styles.carro}>
        <View style={styles.viewimgC}>
          <Image
            style={styles.imgcarrodnt2}
            source={require("../assets/image/dntoreo1.png")}
          />
        </View>
        <View style={styles.txtdntcar}>
          <Text style={styles.txtdonutsmorcarro}> Donuts de Oreo</Text>
          <Text style={styles.valor}>R$14,99</Text>
          <View style={{ top: 10, left: 200 }}>
            <EvilIcons name="trash" size={24} color="black" />
          </View>
        </View>
      </View>

      {/* view terceiro produto */}
      <View style={styles.carro}>
        <View style={styles.viewimgC}>
          <Image
            style={styles.imgcarrodnt3}
            source={require("../assets/image/chocdonuts.png")}
          />
        </View>
        <View style={styles.txtdntcar}>
          <Text style={styles.txtdonutsmorcarro}> Donuts de Chocolate</Text>
          <Text style={styles.valor}>R$14,99</Text>
        </View>
        <View style={{ top: 70, right: 10 }}>
            <EvilIcons name="trash" size={24} color="black" />
          </View>

      </View>
      <View style={styles.footer}>
        <Text style={styles.resumo}>Resumo do pedido:</Text>
        <Text style={styles.itens}>
          Itens Total ...............................................$44,97
        </Text>
        <Text style={styles.taxa}>
          Taxa de Entrega ......................................$5,0
        </Text>
        <Text style={styles.total}>
          Total:........................................................$49,97
        </Text>
      </View>
    </View>
  );
}
