import { useState } from "react";
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
} from "react-native";

const RegistrationScreen = ({ navigation, route }) => {
  const { userName } = route.params;
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  const [isLoginFocused, setIsLoginFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const handleLoginFocus = () => setIsLoginFocused(true);
  const handleLoginBlur = () => setIsLoginFocused(false);
  const handleEmailFocus = () => setIsEmailFocused(true);
  const handleEmailBlur = () => setIsEmailFocused(false);
  const handlePasswordFocus = () => setIsPasswordFocused(true);
  const handlePasswordBlur = () => setIsPasswordFocused(false);

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
    Alert.alert("Welcome, " + `${email} ${password} ${login}`);
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.img}
          source={require("../../assets/photo.png")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={styles.form}>
              <Text style={styles.title}>Register</Text>
              <TextInput
                onBlur={handleLoginBlur}
                onFocus={handleLoginFocus}
                value={login}
                onChangeText={loginHandler}
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
                value={email}
                onChangeText={emailHandler}
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
                  value={password}
                  onChangeText={passwordHandler}
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
                <Text style={styles.btnText}>Log in</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Home");
                }}
              >
                <Text style={styles.register}>Have an account? Log in</Text>
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
    width: 375,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 32,
    alignSelf: "flex-end",
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
