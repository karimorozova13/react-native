import { useEffect, useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import RegistrationScreen from "./components/screens/RegistrationScreen";
import LoginScreen from "./components/screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import Form from "./components/screens/Form";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./components/screens/MainScreen";

const MainStack = createStackNavigator();

export default function App() {
  return (
    <>
      {/* <Form /> */}
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="Log in">
          <MainStack.Screen name="Log in" component={LoginScreen} />
          <MainStack.Screen
            name="Register"
            component={RegistrationScreen}
            options={{
              headerShown: false,
            }}
          />
          <MainStack.Screen
            name="Home"
            component={MainScreen}
            options={{
              title: "Home",
              headerStyle: {
                backgroundColor: "#1B4371",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 20,
              },
              headerRight: () => (
                <Button
                  onPress={() => alert("This is a button!")}
                  title="Press me"
                  color="#fff"
                />
              ),
            }}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
