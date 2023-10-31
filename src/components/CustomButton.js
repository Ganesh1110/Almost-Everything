import React from "react";
import { Text, View, Platform, ActivityIndicator } from "react-native";
import { Colors, DIM } from "../utilities/Constants";

const CustomButton = ({
  Btn_Title,
  backgroundColor,
  TextColor,
  buttonLoader,
}) => {
  return (
    <>
      {Btn_Title && (
        <View
          style={{
            marginTop: DIM.deviceHeight * 0.025,
            borderRadius: DIM.deviceWidth * 0.02,
            backgroundColor: backgroundColor,
          }}
        >
          {buttonLoader ? (
            <View style={{ padding: DIM.deviceHeight * 0.015 }}>
              <ActivityIndicator size={30} color={Colors.GhostWhite} />
            </View>
          ) : (
            <Text
              style={{
                textAlign: "center",
                fontSize: DIM.deviceFont * 18,
                fontWeight: Platform.OS == "ios" ? "500" : "700",
                fontStyle: "normal",
                color: TextColor,
                padding: DIM.deviceHeight * 0.02,
              }}
            >
              {Btn_Title}
            </Text>
          )}
        </View>
      )}
    </>
  );
};

export default CustomButton;
