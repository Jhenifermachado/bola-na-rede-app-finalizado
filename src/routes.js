import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import Home from "./screens/Home";
import Perfil from "./screens/Perfil";
import Pedidos from "./screens/Pedidos";
import Pagamentos from "./screens/Pagamentos";
import Item from "./screens/Item";
import Favoritos from "./screens/Favoritos";
import Login from "./screens/Login";
import Endereco from "./screens/Endereco";

import { useRecoilValue } from "recoil";
import { userState } from "./recoil/atoms/auth";

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function LoginRouter() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

function HomeRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Item" component={Item} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function PedidosRouter() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Pedidos" component={Pedidos} />
    </Tab.Navigator>
  );
}

function PerfilRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Perfil" component={Perfil} options={{ headerShown: false }} />
      <Stack.Screen name="Pagamentos" component={Pagamentos} options={{ headerShown: false }} />
      <Stack.Screen name="Favoritos" component={Favoritos} options={{ headerShown: false }} />
      <Stack.Screen name="Endereco" component={Endereco} options={{ headerShown: false }} />

    </Stack.Navigator>
  );
}

export default function Routes() {
  const currentUserState = useRecoilValue(userState);

  if (currentUserState.loggedIn) {
    return (
      <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "red",
            tabBarInactiveTintColor: "black",
          }}
        >
          <BottomTab.Screen
            name="HomeRoutes"
            component={HomeRoutes}
            options={{
              headerShown: false,
              tabBarLabel: "Home",
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="home" color={color} size={26} />
              ),
            }}
          />
 
          <BottomTab.Screen
            name="PerfilRoutes"
            component={PerfilRoutes}
            options={{
              headerShown: false,
              tabBarLabel: "Perfil",
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="person" color={color} size={26} />
              ),
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "#E06903",
            tabBarInactiveTintColor: "#fff",
            tabBarStyle: { backgroundColor: "black" },
          }}
        >
          <BottomTab.Screen
            name="LoginRouter"
            component={LoginRouter}
            options={{
              headerShown: false,
              tabBarLabel: "Login",
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="home" color={color} size={26} />
              ),
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    );
  }
}
