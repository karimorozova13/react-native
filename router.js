import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const MainStack = createStackNavigator();
const MainTabs = createBottomTabNavigator();

import CreatePostsScreen from "./components/screens/MainScreens/CreatePostsScreen";
import LoginScreen from "./components/screens/AuthScreens/LoginScreen";
import PostsScreen from "./components/screens/MainScreens/PostsScreen";
import ProfileScreen from "./components/screens/MainScreens/ProfileScreen";
import RegistrationScreen from "./components/screens/AuthScreens/RegistrationScreen";

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <MainStack.Navigator>
        <MainStack.Screen
          name="Log in"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Register"
          component={RegistrationScreen}
          options={{
            headerShown: false,
          }}
        />
      </MainStack.Navigator>
    );
  }
  return (
    <MainTabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <MainTabs.Screen
        name={"CreatePosts"}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons name="add-circle-outline" size={35} color="gray" />
            );
          },
        }}
        component={CreatePostsScreen}
      />
      <MainTabs.Screen
        name={"Posts"}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <MaterialIcons name="bug-report" size={35} color="blue" />;
          },
        }}
        component={PostsScreen}
      />

      <MainTabs.Screen
        name={"Profile"}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <AntDesign name="frown" size={size} color={"red"} />;
          },
        }}
        component={ProfileScreen}
      />
    </MainTabs.Navigator>
  );
};
