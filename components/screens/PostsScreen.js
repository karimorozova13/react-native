import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";

const PostsScreen = ({ route }) => {
  const { photo } = route.params;
  const [posts, setPosts] = useState([]);
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
        renderItem={({ item }) => (
          <View style={{ alignContent: "center", marginBottom: 5 }}>
            <Image
              source={{ uri: item }}
              style={{ height: 200, marginHorizontal: 20 }}
            />
          </View>
        )}
        keyExtractor={(item, idx) => idx.toString()}
      />
    </View>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
  },
  item: {
    marginTop: 20,
    alignItems: "center",
  },
});
