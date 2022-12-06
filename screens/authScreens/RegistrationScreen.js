import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  Alert,
  Platform,
  ImageBackground,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const initialState = {
  email: "",
  password: "",
  login: "",
};

const RegistrationScreen = ({ navigation, route }) => {
  const { userName } = route.params;
  const [credentials, setCredentials] = useState(initialState);
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  const [isLoginFocused, setIsLoginFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  const handleLoginFocus = () => {
    setIsLoginFocused(true);
    setIsKeyboardVisible(true);
  };
  const handleLoginBlur = () => {
    setIsLoginFocused(false);
    setIsKeyboardVisible(false);
  };
  const handleEmailFocus = () => {
    setIsEmailFocused(true);
    setIsKeyboardVisible(true);
  };
  const handleEmailBlur = () => {
    setIsEmailFocused(false);
    setIsKeyboardVisible(false);
  };
  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
    setIsKeyboardVisible(true);
  };
  const handlePasswordBlur = () => {
    setIsPasswordFocused(false);
    setIsKeyboardVisible(false);
  };
  const [dimensionWidth, setDimensionWidth] = useState(
    Dimensions.get("window").width
  );
  const [dimensionHeight, setDimensionHeight] = useState(
    Dimensions.get("window").height - 20 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width;
      const height = Dimensions.get("window").height - 20 * 2;
      setDimensionHeight(height);
      setDimensionWidth(width);
      console.log(height);
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      // Dimensions.removeEventListener("change", onChange);
    };
  }, []);
  const loginHandler = (text) => {
    setLogin(text);
  };
  const emailHandler = (text) => {
    setEmail(text);
  };
  const passwordHandler = (text) => {
    setPassword(text);
  };
  const onLogin = () => {
    // Alert.alert("Welcome, " + `${email} ${password} ${login}`);
    Keyboard.dismiss();
    setIsKeyboardVisible(false);
    console.log(credentials);
    setCredentials(initialState);
    // navigation.navigate("Log in");
    // navigation.navigate("Home", { userName: "Kari" });
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={{
            ...styles.img,
            // height: dimensionHeight,
            width: dimensionWidth,
          }}
          source={require("../../assets/photo.png")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
                marginBottom: isKeyboardVisible ? -120 : 0,
              }}
            >
              <View style={styles.imgBox}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.icon}
                  onPress={() => console.log(33)}
                >
                  <Ionicons name={"ios-add"} size={13} color={"orange"} />
                </TouchableOpacity>
              </View>
              <Text style={styles.title}>Register</Text>
              <TextInput
                onBlur={handleLoginBlur}
                onFocus={handleLoginFocus}
                value={credentials.login}
                onChangeText={(text) => {
                  console.log(33);
                  setCredentials((prevState) => ({
                    ...prevState,
                    login: text,
                  }));
                }}
                style={{
                  ...styles.input,
                  borderColor: !isLoginFocused ? "#E8E8E8" : "#FF6C00",
                }}
                placeholder={"Login"}
                placeholderTextColor={"#BDBDBD"}
              />
              <TextInput
                onBlur={handleEmailBlur}
                onFocus={handleEmailFocus}
                value={credentials.email}
                onChangeText={(text) => {
                  setCredentials((prevState) => ({
                    ...prevState,
                    email: text,
                  }));
                }}
                style={{
                  ...styles.input,
                  borderColor: !isEmailFocused ? "#E8E8E8" : "#FF6C00",
                }}
                placeholder={"Enter your email"}
                placeholderTextColor={"#BDBDBD"}
                textContentType={"emailAddress"}
              />
              <View style={styles.inputContainer}>
                <TextInput
                  onBlur={handlePasswordBlur}
                  onFocus={handlePasswordFocus}
                  value={credentials.password}
                  onChangeText={(text) => {
                    setCredentials((prevState) => ({
                      ...prevState,
                      password: text,
                    }));
                  }}
                  style={{
                    ...styles.input,
                    borderColor: !isPasswordFocused ? "#E8E8E8" : "#FF6C00",
                  }}
                  placeholder={"Enter your password"}
                  placeholderTextColor={"#BDBDBD"}
                  secureTextEntry={isSecureEntry}
                />
                <TouchableOpacity
                  style={styles.inputText}
                  onPress={() => setIsSecureEntry(!isSecureEntry)}
                >
                  <Text style={{ color: "#1B4371" }}>
                    {isSecureEntry ? "Show" : "Hide"}
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.btn}
                activeOpacity={0.8}
                onPress={onLogin}
              >
                <Text style={styles.btnText}>Register</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Log in");
                }}
              >
                <Text
                  style={{
                    ...styles.register,
                    color: "#BDBDBD",
                  }}
                >
                  Have an account?
                  <Text
                    style={{
                      ...styles.register,
                      textDecorationLine: "underline",
                      marginLeft: 15,
                    }}
                  >
                    Log In
                  </Text>
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  img: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "flex-end",
  },
  form: {
    position: "relative",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 32,
    paddingTop: 92,
  },
  imgBox: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    position: "absolute",
    borderRadius: 16,
    left: 125,
    top: -60,
  },
  icon: {
    position: "absolute",
    right: -10,
    bottom: 15,
    borderColor: "orange",
    borderRadius: 50,
    borderWidth: 1,
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    color: "#212121",
    letterSpacing: 0.01,
    lineHeight: 35.16,
    marginBottom: 30,
  },
  input: {
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    height: 50,
    padding: 7,
    marginBottom: 15,
  },
  inputContainer: {
    position: "relative",
    marginBottom: 43,
  },
  inputText: {
    position: "absolute",
    right: 7,
    top: 15,
  },
  btn: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    height: 50,
    padding: 16,
    marginBottom: 15,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
  register: {
    textAlign: "center",
    color: "#1B4371",
  },
});
