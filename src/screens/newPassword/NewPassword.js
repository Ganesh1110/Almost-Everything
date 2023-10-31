import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import CustomHeader from "../../components/CustomHeader";
import { Colors, DIM, Icons } from "../../utilities/Constants";
import CustomButton from "../../components/CustomButton";
import { GlobalStyles } from "../../utilities/GlobalStyles";

const NewPassword = ({ navigation }) => {
  const [userCredential, setUserCredential] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [inputFieldColor, setInputFieldColor] = useState({
    newPassword: Colors.Iceberg,
    confirmPassword: Colors.Iceberg,
  });
  const [isInvalidFlag, setIsInvalidFlag] = useState({
    newPassword: false,
    confirmPassword: false,
  });
  const [buttonLoader, setButtonLoader] = useState(false);
  const [showPass, setShowPass] = useState(false);

  useEffect(() => {
    getInitialState();
  }, []);

  const getInitialState = () => {
    setUserCredential({
      newPassword: "",
      confirmPassword: "",
    });
    setInputFieldColor({
      newPassword: Colors.Iceberg,
      confirmPassword: Colors.Iceberg,
    });
    setIsInvalidFlag({
      newPassword: false,
      confirmPassword: false,
    });
    setButtonLoader(false);
    setShowPass(false);
  };

  const onBlur = () => {
    setInputFieldColor({
      newPassword: Colors.Iceberg,
      confirmPassword: Colors.Iceberg,
    });
  };

  const onFocus = (value) => {
    if (value == "new pass") {
      setInputFieldColor({
        newPassword: Colors.CuriousBlue,
        confirmPassword: Colors.Iceberg,
      });
    } else if (value == "confirm pass") {
      setInputFieldColor({
        newPassword: Colors.Iceberg,
        confirmPassword: Colors.CuriousBlue,
      });
    }
  };

  const validateFields = () => {
    let isValid = true;
    const field = { ...userCredential };
    const isValidColor = { ...inputFieldColor };
    const inValidFlag = { ...isInvalidFlag };

    if (field.newPassword.trim() == "") {
      isValidColor.newPassword = Colors.DustyRed;
      inValidFlag.newPassword = true;
      isValid = false;
    }
    if (field.confirmPassword.trim() == "") {
      isValidColor.confirmPassword = Colors.DustyRed;
      inValidFlag.confirmPassword = true;
      isValid = false;
    }
    setInputFieldColor(isValidColor);
    setIsInvalidFlag(inValidFlag);
    return isValid;
  };

  const submitFunction = () => {
    if (validateFields()) {
      navigation.navigate("LoginTwo");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
      <CustomHeader
        heading={"Create New Password"}
        headerBg={Colors.DustyRed_Op}
      />
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: DIM.deviceHeight * 0.035,
        }}
      >
        <View
          style={{
            backgroundColor: Colors.ButteryWhite,
            height: 220,
            width: 220,
            borderRadius: 150,
            opacity: 0.7,
          }}
        />
        <Image
          source={Icons.ResetPass}
          style={{
            width: DIM.deviceWidth * 0.3,
            height: DIM.deviceHeight * 0.23,
            position: "absolute",
            resizeMode: "contain",
          }}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: DIM.deviceHeight * 0.03,
        }}
      >
        <>
          <Text
            style={{
              fontSize: DIM.deviceFont * 17,
              color: Colors.CarbonGrey,
              fontWeight: "500",
            }}
          >
            Your New Password Must Be Different
          </Text>
          <Text
            style={{
              fontSize: DIM.deviceFont * 17,
              color: Colors.CarbonGrey,
              fontWeight: "500",
            }}
          >
            from Previously Used Password.
          </Text>
        </>
      </View>
      <View
        style={{
          marginLeft: DIM.deviceWidth * 0.02,
          marginRight: DIM.deviceWidth * 0.02,
        }}
      >
        <View style={{ marginTop: DIM.deviceHeight * 0.03 }}>
          <Text
            style={{
              color: Colors.Charcoal,
              fontSize: DIM.deviceFont * 14,
              fontWeight: "700",
              lineHeight: DIM.deviceFont * 21,
            }}
          >
            New Password{" "}
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
              borderColor: inputFieldColor.newPassword,
            }}
          >
            <TextInput
              onBlur={() => onBlur()}
              onFocus={() => onFocus("new pass")}
              style={{
                height: 46,
                fontSize: DIM.deviceFont * 16,
                borderRadius: DIM.deviceWidth * 0.02,
                fontWeight: "400",
                padding: 10,
                width: "85%",
                color: Colors.Charcoal,
                borderColor: inputFieldColor.newPassword,
              }}
              placeholder={"Enter Your New PassWord"}
              value={userCredential.newPassword}
              onChangeText={(text) => {
                setUserCredential({
                  ...userCredential,
                  newPassword: text,
                });
                setIsInvalidFlag({ ...isInvalidFlag, newPassword: false }); // Clear the validation flag
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
          {isInvalidFlag.newPassword && (
            <Text
              style={{
                fontSize: DIM.deviceFont * 14,
                fontWeight: "700",
                lineHeight: 21,
                color: Colors.DustyRed,
              }}
            >
              Enter your New PassWord
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
            Confirm Password{" "}
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
              borderColor: inputFieldColor.confirmPassword,
            }}
          >
            <TextInput
              onBlur={() => onBlur("confirm pass")}
              onFocus={() => onFocus("confirm pass")}
              style={{
                height: 46,
                fontSize: DIM.deviceFont * 16,
                borderRadius: DIM.deviceWidth * 0.02,
                fontWeight: "400",
                padding: 10,
                width: "85%",
                color: Colors.Charcoal,
                borderColor: inputFieldColor.confirmPassword,
              }}
              placeholder={"Enter Your Confirm PassWord"}
              value={userCredential.confirmPassword}
              onChangeText={(text) => {
                setUserCredential({
                  ...userCredential,
                  confirmPassword: text,
                });
                setIsInvalidFlag({ ...isInvalidFlag, confirmPassword: false }); // Clear the validation flag
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
          {isInvalidFlag.confirmPassword && (
            <Text
              style={{
                fontSize: DIM.deviceFont * 14,
                fontWeight: "700",
                lineHeight: 21,
                color: Colors.DustyRed,
              }}
            >
              Enter your confirm PassWord
            </Text>
          )}
        </View>
        <TouchableOpacity
          onPress={() => {
            submitFunction();
          }}
          style={{ marginTop: DIM.deviceHeight * 0.02 }}
        >
          <CustomButton
            Btn_Title={"Save"}
            TextColor={Colors.White}
            backgroundColor={Colors.SnakeGreen}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NewPassword;
