import RegistrationScreen from "./components/screens/RegistrationScreen";
import LoginScreen from "./components/screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "./components/screens/PostsScreen";
import ProfileScreen from "./components/screens/ProfileScreen";
import CreatePostsScreen from "./components/screens/CreatePostsScreen";

const MainStack = createStackNavigator();
const MainTabs = createBottomTabNavigator();

const useRoute = (isAuth) => {
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
    <MainTabs.Navigator>
      <MainTabs.Screen name={"Posts"} component={PostsScreen} />
      <MainTabs.Screen name={"Profile"} component={ProfileScreen} />
      <MainTabs.Screen name={"CreatePosts"} component={CreatePostsScreen} />
    </MainTabs.Navigator>
  );
};

export default function App() {
  const routing = useRoute(null);
  return <NavigationContainer>{routing}</NavigationContainer>;
}
