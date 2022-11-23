import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { StyleSheet, Platform } from "react-native";
import LoginScreen from "./components/screens/LoginScreen";
import RegistrationScreen from "./components/screens/RegistrationScreen";

const img = {
  uri: "https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/16:9/w_2560%2Cc_limit/1521-WIRED-Cat.jpeg",
};

// const loadFonts = async () => {
//   await Font.loadAsync({
//     "Roboto-Regulat": require("./assets/fonts/DMMono-Italic.ttf"),
//     "Roboto-Bold": require("./assets/fonts/DMMono-Regular.ttf"),
//   });
// };
// {!isReady && (
//   <AppLoading startAsync={loadFonts} finish={() => setIsReady(true)} />
// )}

export default function App() {
  return (
    <>
      <RegistrationScreen />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: "teal",
      },
      android: {
        backgroundColor: "orange",
      },
    }),

    alignItems: "center",
    justifyContent: "flex-end",
    padding: 30,
  },
  title: {
    color: "#fff",
    fontSize: 30,
    marginBottom: 20,
  },
  input: {
    outline: "none",
    display: "block",
    width: 220,
    marginLeft: "auto",
    marginRight: "auto",
    height: 32,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 7,
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  btn: {
    width: 300,
    height: 50,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "orange",
    color: "#fff",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    zIndex: 10,
  },
});
