import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, View, Button } from "react-native";
// import MapView from "react-native-maps";

const DefaultScreenPosts = ({ navigation, route }) => {
  // const { photo } = route.params;
  console.log(route.params, "route.params");

  const [posts, setPosts] = useState([]);
  console.log(posts, "posts");

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params.photo]);
    }
    return () => {
      // cleanup
    };
  }, [route.params]);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, idx) => idx.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              marginBottom: 10,
              alignContent: "center",
            }}
          >
            <Image
              source={{ uri: item }}
              style={{ height: 200, marginHorizontal: 20 }}
            />
          </View>
        )}
      />
      <Button title="go to map" onPress={() => navigation.navigate("Map")} />
      <Button
        title="go to Comments"
        onPress={() => navigation.navigate("Comments")}
      />
    </View>
  );
};
export default DefaultScreenPosts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  item: {
    marginTop: 20,
    alignItems: "center",
  },
});

// import React, { useState, useEffect } from "react";
// import { View, StyleSheet, FlatList, Image, Button } from "react-native";

// const DefaultScreenPosts = ({ route, navigation }) => {
//   const [posts, setPosts] = useState([]);
//   console.log("route.params", route.params);

//   useEffect(() => {
//     if (route.params) {
//       setPosts((prevState) => [...prevState, route.params]);
//     }
//   }, [route.params]);
//   console.log("posts", posts);
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={posts}
//         keyExtractor={(item, indx) => indx.toString()}
//         renderItem={({ item }) => (
//           <View
//             style={{
//               marginBottom: 10,
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <Image
//               source={{ uri: item.photo }}
//               style={{ width: 350, height: 200 }}
//             />
//           </View>
//         )}
//       />
//       <Button title="go to map" onPress={() => navigation.navigate("Map")} />
//       <Button
//         title="go to Comments"
//         onPress={() => navigation.navigate("Comments")}
//       />
//     </View>
//   );
// };
