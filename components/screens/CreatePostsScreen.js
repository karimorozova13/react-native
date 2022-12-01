import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Camera, CameraType } from "expo-camera";

const CreatePostsScreen = ({ navigation }) => {
  const [type, setType] = useState(CameraType.back);
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  const toggleCameraType = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };
  const savePhoto = () => {
    navigation.navigate("Posts", { photo });
  };
  const takePhoto = async () => {
    let photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={setCamera}>
        {photo && (
          <View style={styles.imgBox}>
            <Text
              style={{ color: "#fff" }}
            >{`${new Date().toLocaleTimeString()}`}</Text>
            <Image
              source={{ uri: photo }}
              style={{ width: 160, height: 160, borderRadius: 10 }}
            ></Image>
          </View>
        )}

        <TouchableOpacity style={styles.snapWrap} onPress={takePhoto}>
          <Text style={styles.snap}>Snap</Text>
        </TouchableOpacity>
      </Camera>
      <TouchableOpacity
        style={styles.saveBtn}
        activeOpacity={0.7}
        onPress={savePhoto}
      >
        <Text style={styles.btn}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreatePostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    marginTop: 40,
    height: "70%",
    marginHorizontal: 7,
    borderRadius: 10,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  snapWrap: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 50,
    borderColor: "red",
    borderWidth: 1,
    width: 70,
    height: 70,
  },
  snap: {
    color: "#fff",
  },
  saveBtn: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 10,
    borderColor: "teal",
    borderWidth: 2,
    height: 40,
    width: 225,
    marginHorizontal: 110,
  },
  btn: {
    color: "#6495ed",
    fontSize: 20,
  },
  imgBox: {
    borderColor: "#fff",
    borderWidth: 1,
    width: 200,
    height: 200,
    position: "absolute",
    top: 20,
    left: 10,
    alignItems: "center",
    borderRadius: 10,
  },
});
