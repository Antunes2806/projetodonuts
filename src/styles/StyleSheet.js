import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2ece3",
  },

  img: {
    width: 300,
    height: 300,
  },

  pesquisa: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "30%",
    backgroundColor: "#662520",
    borderBottomLeftRadius: 500,
    borderBottomRightRadius: 500,
  },

  input: {
    backgroundColor: "#f2ece3",
    width: "80%",
    borderRadius: 50,
    padding: 7,
  },

  txtproduto: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#662520",
    textAlign: "left",
  },

  areaCategory: {
    flexDirection: "row",
    width: "100%",
    height: 150,
    alignItems: "center",
    justifyContent: "space-around",
  },

  productsCategory: {
    backgroundColor: "#662520",
    height: 100,
    width: 70,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
