import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Colors, DIM } from "../utilities/Constants";
import { GlobalStyles } from "../utilities/GlobalStyles";

const CustomHeader = ({
  heading,
  leftIconName,
  onLeftIconPress,
  rightIconName,
  onRightIconPress,
}) => {
  return (
    <View
      style={{
        backgroundColor: Colors.White,
        padding: 15,
        flexDirection: "row",
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flex: 1 }}>
          {leftIconName && (
            <>
              <TouchableOpacity
                onPress={() => {
                  onLeftIconPress();
                }}
                style={{ padding: 5 }}
              >
                <Image
                  source={leftIconName}
                  style={[
                    GlobalStyles.iconSize,
                    { tintColor: Colors.Gunmetal },
                  ]}
                />
              </TouchableOpacity>
            </>
          )}
        </View>
        <View
          style={{
            flex: 6,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {heading && (
            <>
              <Text
                style={{
                  fontSize: DIM.deviceFont * 20,
                  fontWeight: "700",
                  color: Colors.Charcoal,
                  fontStyle: "normal",
                }}
              >
                {heading}
              </Text>
            </>
          )}
        </View>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          {rightIconName && (
            <>
              <TouchableOpacity
                onPress={() => {
                  onRightIconPress();
                }}
                style={{ padding: 5 }}
              >
                <Image
                  source={rightIconName}
                  style={[
                    GlobalStyles.iconSize,
                    { tintColor: Colors.Gunmetal }, // if need transform use this transform: [{ scaleX: -1 }]
                  ]}
                />
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </View>
  );
};

export default CustomHeader;
