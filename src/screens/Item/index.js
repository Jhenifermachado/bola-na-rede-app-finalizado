import React from "react";
import {
  Image,
  TouchableOpacity,
  ScrollView,
  Text,
  View,
  StyleSheet,
} from "react-native";

export default function Item({ route }) {
  const { item } = route.params;

  return (
    <ScrollView showsVerticalScrollIndicator={true} style={styles.container}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.capa.url }} style={styles.imagem} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.nome}>{item.descricao}</Text>
          <Text style={styles.valor}>R${item.preco}</Text>
          <Text>Restam apenas {item.quantidade} camisas!</Text>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.botaoText}>Comprar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    marginHorizontal: 0,
    alignContent: "center",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    flexDirection: "row", // Para colocar a imagem e o texto em linha
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    marginRight: 15,
  },
  textContainer: {
    flex: 1, // Para o container de texto ocupar o espaço restante
  },
  imagem: {
    width: 25 * 2,
    height: 29 * 2,
    borderRadius: 10,
    marginBottom: 10,
  },
  nome: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  valor: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  botao: {
    backgroundColor: "black",
    borderWidth: 1,
    borderRadius: 36,
    width: 100,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  botaoText: {
    color: "white",
  },
});
