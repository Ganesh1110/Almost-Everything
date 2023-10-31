import React, { useState } from "react";
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

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const leftNav = () => {
    navigation.navigate("LoginTwo");
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
      <CustomHeader
        heading={"Forgot Password"}
        leftIconName={Icons.leftArrow}
        onLeftIconPress={leftNav}
        headerBg={Colors.DustyRed_Op}
      />
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: DIM.deviceHeight * 0.055,
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
          source={Icons.forgot}
          style={{
            width: DIM.deviceWidth * 0.35,
            height: DIM.deviceHeight * 0.2,
            position: "absolute",
            resizeMode: "contain",
          }}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: DIM.deviceHeight * 0.05,
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
            Please Enter your Email Address To
          </Text>
          <Text
            style={{
              fontSize: DIM.deviceFont * 17,
              color: Colors.CarbonGrey,
              fontWeight: "500",
            }}
          >
            Receive a Verification Code.
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
            Email
          </Text>
          <View
            style={{
              borderWidth: DIM.deviceWidth * 0.003,
              marginTop: DIM.deviceHeight * 0.01,
              borderRadius: DIM.deviceWidth * 0.02,
              borderColor: Colors.Iceberg,
            }}
          >
            <TextInput
              style={{
                height: 46,
                fontSize: DIM.deviceFont * 16,
                borderRadius: DIM.deviceWidth * 0.02,
                fontWeight: "400",
                padding: 10,
                color: Colors.Charcoal,
              }}
              placeholder={"Enter Your Email"}
              value={email}
              onChangeText={(text) => {
                setEmail({
                  email: text,
                });
              }}
              keyboardType="ascii-capable"
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Verification Code");
          }}
          style={{ marginTop: DIM.deviceHeight * 0.02 }}
        >
          <CustomButton
            Btn_Title={"Send"}
            TextColor={Colors.White}
            backgroundColor={Colors.SnakeGreen}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
