import React, { useState } from "react";
import { TextInput } from "react-native";

const CustomInput = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => setIsFocused(false);
  return (
    <TextInput
      onBlur={handleBlur}
      onFocus={handleFocus}
      value={login}
      onChangeText={loginHandler}
      style={{
        ...styles.input,
        borderColor: !isFocused ? "#E8E8E8" : "#FF6C00",
      }}
      placeholder={"Login"}
      placeholderTextColor={"#BDBDBD"}
    />
  );
};

export default CustomInput;
