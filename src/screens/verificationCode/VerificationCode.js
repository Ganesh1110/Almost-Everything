import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import CustomHeader from "../../components/CustomHeader";
import { Colors, DIM, Icons } from "../../utilities/Constants";
import CustomButton from "../../components/CustomButton";

const VerificationCode = ({ navigation }) => {
  const et1 = useRef();
  const et2 = useRef();
  const et3 = useRef();
  const et4 = useRef();

  const [f1, setF1] = useState("");
  const [f2, setF2] = useState("");
  const [f3, setF3] = useState("");
  const [f4, setF4] = useState("");

  const leftNav = () => {
    navigation.navigate("Forgot Password");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
      <CustomHeader
        heading={"Verify You Email"}
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
          source={Icons.openEmail}
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
            Please Enter 6 Digit Code Sent To
          </Text>
          <Text
            style={{
              fontSize: DIM.deviceFont * 17,
              color: Colors.CarbonGrey,
              fontWeight: "500",
            }}
          >
            admin1011@gmail.com
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
          <View style={styles.otpView}>
            <TextInput
              ref={et1}
              style={[
                styles.inputView,
                {
                  borderBottomColor:
                    f1.length >= 1 ? Colors.CuriousBlue : Colors.Iceberg,
                },
              ]}
              placeholder="0"
              placeholderTextColor={Colors.Iceberg}
              keyboardType="number-pad"
              maxLength={1}
              value={f1}
              onChangeText={(text) => {
                setF1(text);
                if (text.length >= 1) {
                  et2.current.focus();
                }
              }}
            />
            <TextInput
              ref={et2}
              style={[
                styles.inputView,
                {
                  borderColor:
                    f2.length >= 1 ? Colors.CuriousBlue : Colors.Iceberg,
                },
              ]}
              placeholder="0"
              placeholderTextColor={Colors.Iceberg}
              keyboardType="number-pad"
              maxLength={1}
              value={f2}
              onChangeText={(text) => {
                setF2(text);
                if (text.length >= 1) {
                  et3.current.focus();
                } else if (text.length < 1) {
                  et1.current.focus();
                }
              }}
            />
            <TextInput
              ref={et3}
              style={[
                styles.inputView,
                {
                  borderColor:
                    f3.length >= 1 ? Colors.CuriousBlue : Colors.Iceberg,
                },
              ]}
              placeholder="0"
              placeholderTextColor={Colors.Iceberg}
              keyboardType="number-pad"
              maxLength={1}
              value={f3}
              onChangeText={(text) => {
                setF3(text);
                if (text.length >= 1) {
                  et4.current.focus();
                } else if (text.length < 1) {
                  et2.current.focus();
                }
              }}
            />
            <TextInput
              ref={et4}
              style={[
                styles.inputView,
                {
                  borderColor:
                    f4.length >= 1 ? Colors.CuriousBlue : Colors.Iceberg,
                },
              ]}
              placeholder="0"
              placeholderTextColor={Colors.Iceberg}
              keyboardType="number-pad"
              maxLength={1}
              value={f4}
              onChangeText={(text) => {
                setF4(text);
                if (text.length < 1) {
                  et3.current.focus();
                }
              }}
            />
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: DIM.deviceHeight * 0.05,
          }}
        >
          <TouchableOpacity>
            <Text
              style={{
                fontSize: DIM.deviceFont * 14,
                color: Colors.CuriousBlue,
                fontWeight: "500",
                textDecorationLine: "underline",
              }}
            >
              Resend Code
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("New Password");
          }}
          style={{ marginTop: DIM.deviceHeight * 0.02 }}
        >
          <CustomButton
            Btn_Title={"Verify"}
            TextColor={Colors.White}
            backgroundColor={Colors.SnakeGreen}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  otpView: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
  },
  inputView: {
    minWidth: 50,
    height: 50,
    borderBottomWidth: DIM.deviceWidth * 0.006,
    borderRadius: DIM.deviceWidth * 0.018,
    textAlign: "center",
    fontSize: DIM.deviceFont * 16,
    fontWeight: "700",
  },
});

export default VerificationCode;
