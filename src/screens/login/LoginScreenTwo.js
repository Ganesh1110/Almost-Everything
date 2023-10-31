import React, { useEffect, useState } from "react";
import {
  Text,
  SafeAreaView,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import CustomHeader from "../../components/CustomHeader";
import { Colors, DIM, Icons } from "../../utilities/Constants";
import { GlobalStyles, isDarkMode } from "../../utilities/GlobalStyles";
import CustomButton from "../../components/CustomButton";
const LoginScreenTwo = ({ navigation }) => {
  const [userCredential, setUserCredential] = useState({
    email: "",
    passWord: "",
  });
  const [inputFieldColor, setInputFieldColor] = useState({
    email: Colors.Iceberg,
    passWord: Colors.Iceberg,
  });
  const [isInvalidFlag, setIsInvalidFlag] = useState({
    email: false,
    passWord: false,
  });
  const [buttonLoader, setButtonLoader] = useState(false);
  const [showPass, setShowPass] = useState(false);

  useEffect(() => {
    getInitialState();
  }, []);

  const getInitialState = () => {
    setUserCredential({
      email: "1",
      passWord: "1  ",
    });
    setInputFieldColor({
      email: Colors.Iceberg,
      passWord: Colors.Iceberg,
    });
    setIsInvalidFlag({
      email: false,
      passWord: false,
    });
    setButtonLoader(false);
    setShowPass(false);
  };

  const leftNav = () => {
    navigation.navigate("LoginOne");
  };

  const onBlur = () => {
    setInputFieldColor({
      email: Colors.Iceberg,
      passWord: Colors.Iceberg,
    });
  };

  const onFocus = (value) => {
    if (value == "Email") {
      setInputFieldColor({
        email: Colors.CuriousBlue,
        passWord: Colors.Iceberg,
      });
    } else if (value == "password") {
      setInputFieldColor({
        email: Colors.Iceberg,
        passWord: Colors.CuriousBlue,
      });
    }
  };

  const validateFields = () => {
    let isValid = true;
    const field = { ...userCredential };
    const isValidColor = { ...inputFieldColor };
    const inValidFlag = { ...isInvalidFlag };

    if (field.email.trim() == "") {
      isValidColor.email = Colors.DustyRed;
      inValidFlag.email = true;
      isValid = false;
    }
    if (field.passWord.trim() == "") {
      isValidColor.passWord = Colors.DustyRed;
      inValidFlag.passWord = true;
      isValid = false;
    }
    setInputFieldColor(isValidColor);
    setIsInvalidFlag(inValidFlag);
    return isValid;
  };

  const submitFunction = () => {
    if (validateFields()) {
      navigation.navigate("Home");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
      <CustomHeader
        heading={"Login"}
        leftIconName={Icons.leftArrow}
        onLeftIconPress={leftNav}
        headerBg={Colors.DustyRed_Op}
      />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={{ marginTop: DIM.deviceHeight * 0.03 }}>
          <Image
            source={Icons.listen}
            style={{
              height: DIM.deviceHeight * 0.25,
              width: DIM.deviceWidth * 0.55,
            }}
          />
        </View>
      </View>
      <View style={GlobalStyles.marginView}>
        <View style={{ marginTop: DIM.deviceHeight * 0.03 }}>
          <Text
            style={{
              color: Colors.Charcoal,
              fontSize: DIM.deviceFont * 14,
              fontWeight: "700",
              lineHeight: DIM.deviceFont * 21,
            }}
          >
            Email{" "}
            <Text
              style={{
                color: Colors.DustyRed,
              }}
            >
              *
            </Text>
          </Text>
          <View
            style={{
              borderWidth: DIM.deviceWidth * 0.003,
              marginTop: DIM.deviceHeight * 0.01,
              borderRadius: DIM.deviceWidth * 0.02,
              borderColor: inputFieldColor.email,
            }}
          >
            <TextInput
              onBlur={() => onBlur("Email")}
              onFocus={() => onFocus("Email")}
              style={{
                height: 46,
                fontSize: DIM.deviceFont * 16,
                borderRadius: DIM.deviceWidth * 0.02,
                fontWeight: "400",
                padding: 10,
                color: Colors.Charcoal,
                borderColor: inputFieldColor.email,
              }}
              placeholder={"Enter Your Email"}
              value={userCredential.email}
              onChangeText={(text) => {
                setUserCredential({
                  ...userCredential,
                  email: text,
                });
                setIsInvalidFlag({ ...isInvalidFlag, email: false }); // Clear the validation flag
              }}
              keyboardType="ascii-capable"
            />
          </View>
          {isInvalidFlag.email && (
            <Text
              style={{
                fontSize: DIM.deviceFont * 14,
                fontWeight: "700",
                lineHeight: 21,
                color: Colors.DustyRed,
                marginLeft: DIM.deviceWidth * 0.01,
              }}
            >
              Enter your Email
            </Text>
          )}
        </View>
        <View style={{ marginTop: DIM.deviceHeight * 0.03 }}>
          <Text
            style={{
              color: Colors.Charcoal,
              fontSize: DIM.deviceFont * 14,
              fontWeight: "700",
              lineHeight: DIM.deviceFont * 21,
            }}
          >
            Password{" "}
            <Text
              style={{
                color: Colors.DustyRed,
              }}
            >
              *
            </Text>
          </Text>
          <View
            style={{
              flexDirection: "row",
              borderWidth: DIM.deviceWidth * 0.003,
              marginTop: DIM.deviceHeight * 0.01,
              borderRadius: DIM.deviceWidth * 0.02,
              borderColor: inputFieldColor.passWord,
            }}
          >
            <TextInput
              onBlur={() => onBlur("password")}
              onFocus={() => onFocus("password")}
              style={{
                height: 46,
                fontSize: DIM.deviceFont * 16,
                borderRadius: DIM.deviceWidth * 0.02,
                fontWeight: "400",
                padding: 10,
                width: "85%",
                color: Colors.Charcoal,
                borderColor: inputFieldColor.passWord,
              }}
              placeholder={"Enter Your PassWord"}
              value={userCredential.passWord}
              onChangeText={(text) => {
                setUserCredential({
                  ...userCredential,
                  passWord: text,
                });
                setIsInvalidFlag({ ...isInvalidFlag, passWord: false }); // Clear the validation flag
              }}
              keyboardType="ascii-capable"
              secureTextEntry={!showPass ? true : false}
            />
            <View style={{ marginLeft: DIM.deviceWidth * 0.025 }}>
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 10,
                }}
                onPress={() => {
                  setShowPass(!showPass);
                }}
              >
                <Image
                  style={GlobalStyles.iconSize}
                  source={showPass ? Icons.showEye : Icons.hideEye}
                />
              </TouchableOpacity>
            </View>
          </View>
          {isInvalidFlag.passWord && (
            <Text
              style={{
                fontSize: DIM.deviceFont * 14,
                fontWeight: "700",
                lineHeight: 21,
                color: Colors.DustyRed,
              }}
            >
              Enter your PassWord
            </Text>
          )}
          <Text
            style={{
              color: Colors.Mist,
              fontWeight: "500",
              marginTop: DIM.deviceHeight * 0.01,
              fontSize: DIM.deviceFont * 14,
              marginLeft: DIM.deviceWidth * 0.012,
            }}
            onPress={() => {
              navigation.navigate("Forgot Password");
            }}
          >
            Forgot Password?
          </Text>
        </View>
        <TouchableOpacity
          style={{ marginTop: DIM.deviceHeight * 0.05 }}
          onPress={() => {
            submitFunction();
          }}
        >
          <CustomButton
            Btn_Title={"Login"}
            TextColor={Colors.White}
            backgroundColor={Colors.SnakeGreen}
            buttonLoader={buttonLoader}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreenTwo;
