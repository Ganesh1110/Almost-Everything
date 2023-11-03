import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Colors, DIM, Icons } from "../../utilities/Constants";
import CustomHeader from "../../components/CustomHeader";

const GetStarted = ({ navigation }) => {
  const data = [
    {
      id: 1,
      label: "English",
      value: "eng",
      icon: Icons.english,
      BgColors: Colors.DustyRed_Op,
      border: Colors.DustyRed,
    },
    {
      id: 2,
      label: "Tamil",
      value: "tam",
      icon: Icons.tamil,
      BgColors: Colors.VeniceBlueOp,
      border: Colors.VeniceBlue,
    },
    {
      id: 3,
      label: "Malayalam",
      value: "mal",
      icon: Icons.malayalam,
      BgColors: Colors.SnakeGreenOp,
      border: Colors.SnakeGreen,
    },
    {
      id: 4,
      label: "Hindi",
      value: "hin",
      icon: Icons.hindi,
      BgColors: Colors.PurpleJamOp,
      border: Colors.PurpleJam,
    },
    {
      id: 5,
      label: "Telegu",
      value: "tel",
      icon: Icons.telegu,
      BgColors: Colors.Zodiac_BlueOp,
      border: Colors.Zodiac_Dark_BlueOp,
    },
  ];

  const ChooseLang = ({ data }) => {
    let imageWidth = "";
    let imageHeight = "";
    let marginT = "";
    let marginL = "";
    if (data.icon == Icons.english) {
      (imageWidth = DIM.deviceWidth * 0.22),
        (imageHeight = DIM.deviceHeight * 0.11),
        (marginT = DIM.deviceHeight * 0.02);
      marginL = 0;
    } else if (data.icon == Icons.tamil) {
      (imageWidth = DIM.deviceWidth * 0.21),
        (imageHeight = DIM.deviceHeight * 0.12);
      marginT = DIM.deviceHeight * 0.005;
      marginL = DIM.deviceWidth * 0.02;
    } else if (data.icon == Icons.malayalam) {
      (imageWidth = DIM.deviceWidth * 0.21),
        (imageHeight = DIM.deviceHeight * 0.095);
      marginT = DIM.deviceHeight * 0.029;
      marginL = DIM.deviceWidth * -0.08;
    } else if (data.icon == Icons.hindi) {
      (imageWidth = DIM.deviceWidth * 0.25),
        (imageHeight = DIM.deviceHeight * 0.18);
      marginT = DIM.deviceHeight * -0.01;
      marginL = DIM.deviceWidth * -0.0;
    } else if (data.icon == Icons.telegu) {
      (imageWidth = DIM.deviceWidth * 0.22),
        (imageHeight = DIM.deviceHeight * 0.1);
      marginT = DIM.deviceHeight * 0.01;
      marginL = DIM.deviceWidth * 0.02;
    }

    return (
      <TouchableOpacity
        onPress={() => {
          selectLangFunction(data);
        }}
      >
        <View
          style={{
            borderColor: data.border,
            backgroundColor: data.BgColors,
            borderWidth: DIM.deviceWidth * 0.004,
            borderRadius: DIM.deviceWidth * 0.015,
            flexDirection: "row",
            padding: 5,
            maxWidth: DIM.deviceWidth * 0.4,
            maxHeight: DIM.deviceHeight * 0.13,
          }}
        >
          <Text
            style={{
              fontSize: DIM.deviceFont * 18,
              fontWeight: "700",
              color: data.border,
            }}
          >
            {data.label}
          </Text>
          <View style={{ marginTop: marginT, marginLeft: marginL }}>
            <Image
              source={data.icon}
              style={{
                width: imageWidth,
                height: imageHeight,
                resizeMode: "contain",
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const selectLangFunction = (value) => {
    navigation.navigate("LoginTwo");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>
      <CustomHeader heading={"Select Your Language"} />
      {/* <View
        style={{
          marginLeft: DIM.deviceWidth * 0.02,
          marginRight: DIM.deviceWidth * 0.02,
          flexDirection: "row", // Set the main container to a row layout
          flexWrap: "wrap", // Allow items to wrap to the next row
        }}
      >
        {data.map((item) => (
          <ChooseLang data={item} key={item.id} />
        ))}
      </View> */}
    </SafeAreaView>
  );
};

export default GetStarted;
