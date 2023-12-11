import React from "react";

import { ScrollView, StyleSheet } from "react-native";
import Endereco from "../../components/Home/Endereco";
import Input from "../../components/Input";
import Categorias from "../../components/Home/Categorias";

export default function Home({ navigation }) {
  return (
    <ScrollView showsHorizontalScrollIndicator={true} style={styles.container}>
      <Endereco />
      <Input placeholder="Busque por camisa" />
      <Categorias navigation={navigation} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
