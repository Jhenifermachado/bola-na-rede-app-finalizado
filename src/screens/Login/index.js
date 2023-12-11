import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import * as SecureStore from "expo-secure-store";
import { useSetRecoilState } from "recoil";
import loginApi from "../../services/login";
import { userState } from "../../recoil/atoms/auth";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  const setUser = useSetRecoilState(userState);

  const login = async () => {
    try {
      const data = await loginApi.login(email, password);
      setUser({
        loggedIn: true,
        access: data.access,
        refresh: data.refresh,
      });
      setEmail("");
      setPassword("");
      setErrorMsg(null);
      // await SecureStore.setItemAsync('access', data.access);
      navigation.goBack();
    } catch (error) {
      setUser({ loggedIn: true, access: null, refresh: null });
      setErrorMsg("Usuário ou senha inválidos!");
      await SecureStore.deleteItemAsync("access");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        label="Senha"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />
      <Button mode="contained" onPress={() => login()} style={styles.button}>
        Entrar
      </Button>

      <Text style={styles.errorText}>{errorMsg}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff", // Background color
  },
  input: {
    width: "80%",
    marginBottom: 10,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 25,
    padding: 10,
    color: "black",
  },
  button: {
    marginTop: 20,
    borderRadius: 25,
    backgroundColor: "#1DB954", 
  },
  errorText: {
    color: "red",
    marginTop: 10,
  },
});
