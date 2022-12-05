import React from "react";
import { View, TouchableWithoutFeedback, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import PostsScreen from "./PostsScreen";
import ProfileScreen from "./ProfileScreen";

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
    </View>
  );
}

const Tabs = createBottomTabNavigator();
const MainScreen = ({ route }) => {
  const { userName } = route.params;
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Text>Hello {userName}!</Text>
        <Tabs.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Profile") {
                iconName = focused
                  ? "ios-information-circle"
                  : "ios-information-circle-outline";
              } else if (route.name === "Posts") {
                iconName = focused ? "ios-list-box" : "ios-list";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
          }}
        >
          <Tabs.Screen
            name="Posts"
            options={{
              headerShown: false,
            }}
            component={PostsScreen}
          />
          <Tabs.Screen
            name="Profile"
            options={{
              headerShown: false,
            }}
            component={ProfileScreen}
          />
        </Tabs.Navigator>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingBottom: 20,
  },
  item: {
    marginTop: 20,
    alignItems: "center",
  },
});
