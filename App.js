import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect, useState } from "react";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {
  StyleSheet,
  Platform,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import LoginScreen from "./components/screens/LoginScreen";
import RegistrationScreen from "./components/screens/RegistrationScreen";

const img = {
  uri: "https://cdn.vox-cdn.com/thumbor/HEMfmkYPnve3JJGpAUWqxr-jjQo=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19533502/690958main_p1237a1.jpg",
};
const initialState = {
  email: "",
  password: "",
};
const loadApp = async () => {
  await Font.loadAsync({
    "NerkoOne-Regular": require("./assets/fonts/NerkoOne-Regular.ttf"),
  });
};

export default function App() {
  console.log(Platform.OS);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [credentials, setCredentials] = useState(initialState);
  const [appIsReady, setAppIsReady] = useState(false);
  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 20 * 2
  );

  const keyboardHandler = () => {
    setIsKeyboardVisible(false);
    Keyboard.dismiss();
    console.log(credentials);
    setCredentials(initialState);
  };
  const loadApp = async () => {
    try {
      await Font.loadAsync({
        "NerkoOne-Regular": require("./assets/fonts/NerkoOne-Regular.ttf"),
      });
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (e) {
      console.warn(e);
    } finally {
      setAppIsReady(true);
    }
  };
  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 20 * 2;
      const height = Dimensions.get("window").height;
      setDimensions(width);
      console.log(width);
    };
    Dimensions.addEventListener("change", onChange);
    loadApp();
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => keyboardHandler()}
      onLayout={onLayoutRootView}
    >
      <View style={styles.container}>
        <ImageBackground source={img} style={styles.image}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
                marginBottom: isKeyboardVisible ? -60 : 100,
                width: dimensions,
              }}
            >
              <View style={styles.header}>
                <Text style={styles.title}>{"Welcome back!"}</Text>
              </View>
              <View>
                <Text style={styles.inputLabel}>Email Address</Text>
                <TextInput
                  style={styles.input}
                  value={credentials.email}
                  onChangeText={(text) => {
                    setCredentials((prevState) => ({
                      ...prevState,
                      email: text,
                    }));
                  }}
                  onFocus={() => {
                    setIsKeyboardVisible(true);
                  }}
                />
              </View>
              <View style={{ marginTop: 20 }}>
                <Text style={styles.inputLabel}>Password</Text>
                <TextInput
                  value={credentials.password}
                  style={styles.input}
                  secureTextEntry={true}
                  onChangeText={(text) => {
                    setCredentials((prevState) => ({
                      ...prevState,
                      password: text,
                    }));
                  }}
                  onFocus={() => {
                    setIsKeyboardVisible(true);
                  }}
                />
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.btn}
                onPress={() => keyboardHandler()}
              >
                <Text style={{ color: "#fff", fontFamily: "NerkoOne-Regular" }}>
                  SIGN IN
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>

        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // ...Platform.select({
    //   ios: {
    //     backgroundColor: "teal",
    //   },
    //   android: {
    //     backgroundColor: "orange",
    //   },
    // default: {
    //   backgroundColor: "violet",
    // }
    // }),

    // alignItems: "center",
    // justifyContent: "flex-end",
    // padding: 30,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    resizeMode: "cover",
  },
  inner: {
    borderWidth: 2,
    borderRadius: 15,
    padding: 40,
    borderColor: "violet",
    backgroundColor: "#fff",
    opacity: 0.8,
    // width: "50%",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "red",
    marginBottom: 150,
    marginHorizontal: 20,
    fontFamily: "NerkoOne-Regular",
  },
  form: {
    // marginHorizontal: 20,
    // width: "100%",
    // backgroundColor: "#fff",
    // opacity: 0.8,
    // padding: 30,
  },
  input: {
    minWidth: 220,
    height: 32,
    borderColor: "#ccc",
    borderWidth: 2,
    borderRadius: 4,
    padding: 7,
    color: "#fff",
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 7,
    color: "#fff",
    textTransform: "uppercase",
    fontFamily: "NerkoOne-Regular",
  },
  btn: {
    // width: 300,
    height: 50,
    backgroundColor: Platform.OS === "ios" ? "teal" : "orangered",
    // display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 7,
    borderRadius: 8,
    marginTop: 40,
  },
});
