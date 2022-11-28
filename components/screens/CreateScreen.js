import React from "react";
import {
  View,
  TouchableWithoutFeedback,
  Text,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const COURSES = [
  {
    id: "45k6-j54k-4jth",
    title: "HTML",
    src: require("../../assets/favicon.png"),
  },
  {
    id: "4116-jfk5-43rh",
    title: "JavaScript",
    src: require("../../assets/favicon.png"),
  },
  {
    id: "4d16-5tt5-4j55",
    title: "React",
    src: require("../../assets/favicon.png"),
  },
  {
    id: "LG16-ant5-0J25",
    title: "React Native",
    src: require("../../assets/favicon.png"),
  },
];
const Item = ({ title, source }) => {
  return (
    <View style={styles.item} key={title}>
      <Image source={source} style={{ width: 50, height: 50 }} />
      <Text style={{ marginTop: 5, color: "teal" }}>{title}</Text>
    </View>
  );
};
function Settings() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FlatList
        data={COURSES}
        renderItem={({ item }) => <Item title={item.title} source={item.src} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
    </View>
  );
}

const Tabs = createBottomTabNavigator();
const CreateScreen = () => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        {/* <Text>Hello World</Text> */}
        <Tabs.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Profile") {
                iconName = focused
                  ? "ios-information-circle"
                  : "ios-information-circle-outline";
              } else if (route.name === "Settings") {
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
          <Tabs.Screen name="Settings" component={Settings} />
          <Tabs.Screen name="Profile" component={Profile} />
        </Tabs.Navigator>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CreateScreen;

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
