import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

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

const PostsScreen = ({ route }) => {
  const { photo } = route.params;
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setPosts((prevState) => [...prevState, route.params.photo]);
    console.log(posts);
    return () => {
      // cleanup
    };
  }, [route.params]);
  console.log(route.params);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FlatList
        data={COURSES}
        renderItem={({ item }) => <Item title={item.title} source={item.src} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  item: {
    marginTop: 20,
    alignItems: "center",
  },
});
