import { createStackNavigator } from "@react-navigation/stack";
import CommentsScreen from "../NestedScreens/CommentsScreen";
import DefaultScreenPosts from "../NestedScreens/DefaultScreenPosts";
import MapScreen from "../NestedScreens/MapScreen";

const NestedScreen = createStackNavigator();

const PostsScreen = () => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="DefaultScreen"
        component={DefaultScreenPosts}
      />
      <NestedScreen.Screen name="Comments" component={CommentsScreen} />
      <NestedScreen.Screen name="Map" component={MapScreen} />
    </NestedScreen.Navigator>
  );
};

export default PostsScreen;
