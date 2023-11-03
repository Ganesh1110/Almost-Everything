import React, { useEffect, useState } from "react";
import {
  Text,
  SafeAreaView,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Modal from "react-native-modal";
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
  const [selectedLang, setSelectedLang] = useState("eng");
  const [showBottomSheet, setShowBottomSheet] = useState(false);

  const data = [
    {
      label: "English",
      value: "eng",
      selected: selectedLang === "eng",
    },
    {
      label: "தமிழ்",
      value: "tam",
      selected: selectedLang === "tam",
    },
    {
      label: "മലയാളം",
      value: "mal",
      selected: selectedLang === "mal",
    },
    {
      label: "हिंदी",
      value: "hin",
      selected: selectedLang === "hin",
    },
    {
      label: "తెలుగు",
      value: "tel",
      selected: selectedLang === "tel",
    },
  ];

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

  const chooseLang = () => {
    setShowBottomSheet(true);
  };

  const LangList = ({ data }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          selectLangFunction(data);
        }}
      >
        <View
          style={{
            borderColor: data.selected ? Colors.CuriousBlue : Colors.Iceberg,
            backgroundColor: null,
            borderWidth: DIM.deviceWidth * 0.004,
            borderRadius: 10,
            height: 50,
            marginTop: DIM.deviceHeight * 0.02,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                marginLeft: DIM.deviceWidth * 0.02,
                marginRight: DIM.deviceWidth * 0.02,
              }}
            >
              <Image
                source={data.selected ? Icons.checked : Icons.unChecked}
                style={[
                  GlobalStyles.iconSize,
                  {
                    tintColor: data.selected
                      ? Colors.CuriousBlue
                      : Colors.Silver,
                  },
                ]}
              />
            </View>
            <Text
              style={{
                fontSize: DIM.deviceFont * 18,
                fontWeight: "700",
                color: data.border,
                padding: 5,
              }}
            >
              {data.label}
            </Text>
          </View>
          <View style={{ marginRight: DIM.deviceWidth * 0.05 }}>
            <Image
              source={Icons.world}
              style={[
                GlobalStyles.iconSize,
                {
                  tintColor: data.selected ? Colors.CuriousBlue : Colors.Silver,
                  opacity: data.selected ? 1 : 0.5,
                },
              ]}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const selectLangFunction = (value) => {
    setSelectedLang(value.value); // Update the selected language
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.White,
      }}
    >
      {/* <CustomHeader
        heading={"Login"}
        leftIconName={Icons.leftArrow}
        onLeftIconPress={leftNav}
        headerBg={Colors.DustyRed_Op}
      /> */}
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: DIM.deviceHeight * 0.1,
        }}
      >
        <View>
          <Image
            source={Icons.listen}
            style={{
              height: DIM.deviceHeight * 0.25,
              width: DIM.deviceWidth * 0.55,
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        style={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: DIM.deviceHeight * 0.02,
        }}
        onPress={() => {
          chooseLang();
        }}
      >
        <Image source={Icons.world} style={GlobalStyles.iconSize} />
        <Text
          style={{
            color: Colors.Charcoal,
            fontWeight: "500",
            fontSize: DIM.deviceFont * 14,
            marginLeft: DIM.deviceWidth * 0.012,
          }}
        >
          Choose Language
        </Text>
      </TouchableOpacity>
      <View
        style={[
          GlobalStyles.marginView,
          { marginTop: DIM.deviceHeight * 0.03 },
        ]}
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
      <Modal
        isVisible={showBottomSheet}
        onBackdropPress={() => {
          setShowBottomSheet(false);
        }}
        style={{ justifyContent: "flex-end", margin: 0 }}
        animationIn={"slideInUp"}
        animationOut={"slideOutDown"}
        animationInTiming={900}
        animationOutTiming={900}
      >
        <View
          style={{
            backgroundColor: Colors.White,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            height: 300,
            width: DIM.deviceWidth * 1,
            padding: 10,
          }}
        >
          <View style={GlobalStyles.marginView}>
            <FlatList
              data={data}
              renderItem={({ item }) => <LangList data={item} />}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default LoginScreenTwo;
