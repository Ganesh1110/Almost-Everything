import React, { useEffect, useState } from "react";
import {
  Text,
  SafeAreaView,
  View,
  FlatList,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { GlobalStyles } from "../../utilities/GlobalStyles";
import { Colors, DIM, Icons } from "../../utilities/Constants";

const Search = () => {
  const [inputFieldColor, setInputFieldColor] = useState({
    search: Colors.CarbonGrey,
  });
  const [searchInputText, setSearchInputText] = useState("");

  const categoriesData = [
    { key: "1", label: "Biography", color: "#FF5733", icons: Icons.biography },
    { key: "2", label: "Business", color: "#380057", icons: Icons.business },
    {
      key: "3",
      label: "Communication",
      color: "#00DD5D",
      icons: Icons.communication,
    },
    { key: "4", label: "Finance", color: "#3399FF", icons: Icons.finance },
    {
      key: "5",
      label: "Finance Fridays",
      color: "#E74C3C",
      icons: Icons.finance,
    },
    { key: "6", label: "Happiness", color: "#F4E03F", icons: Icons.happiness },
    { key: "7", label: "Health", color: "#36A591", icons: Icons.health },
    {
      key: "8",
      label: "Life Lessons",
      color: "#E74C3C",
      icons: Icons.lifeLessons,
    },
    {
      key: "9",
      label: "Productivity",
      color: "#FFA500",
      icons: Icons.productivity,
    },
    {
      key: "10",
      label: "Psychology",
      color: "#0000FF",
      icons: Icons.psychology,
    },
    { key: "11", label: "Stories", color: "#F4C03F", icons: Icons.stories },
    { key: "12", label: "Students", color: "#F58A07", icons: Icons.students },
  ];

  useEffect(() => {
    getInitialState();
  }, []);

  const getInitialState = () => {
    setInputFieldColor({
      search: Colors.CarbonGrey,
    });
  };

  const onBlur = () => {
    setInputFieldColor({
      search: Colors.CarbonGrey,
    });
  };

  const onFocus = (value) => {
    if (value == "search") {
      setInputFieldColor({
        search: Colors.CuriousBlue,
      });
    }
  };

  const SingleHeader = ({ title }) => {
    return (
      <View
        style={{
          backgroundColor: Colors.GhostWhite,
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
          <View
            style={{
              flex: 6,
              justifyContent: "center",
            }}
          >
            {title && (
              <>
                <Text
                  style={{
                    fontSize: DIM.deviceFont * 28,
                    fontWeight: "700",
                    color: Colors.Charcoal,
                    fontStyle: "normal",
                  }}
                >
                  {title}
                </Text>
              </>
            )}
          </View>
        </View>
      </View>
    );
  };

  const CategoriesUi = ({ data }) => {
    return (
      <View
        style={{
          backgroundColor: data.color,
          borderRadius: 8,
          width: DIM.deviceWidth * 0.42 + 10,
          height: DIM.deviceHeight * 0.125,
          margin: 5,
        }}
      >
        <View
          style={{
            marginLeft: DIM.deviceWidth * 0.012,
          }}
        >
          <Text
            style={{
              fontSize: DIM.deviceFont * 15,
              color: Colors.White,
              fontWeight: "400",
              marginTop: DIM.deviceHeight * 0.01,
            }}
          >
            {data.label}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row-reverse",
          }}
        >
          <Image
            source={data.icons}
            style={{
              width: DIM.deviceWidth * 0.2,
              height: DIM.deviceHeight * 0.08,
              resizeMode: "contain",
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={[GlobalStyles.container, { backgroundColor: Colors.GhostWhite }]}
    >
      <SingleHeader title={"Search"} />
      <View style={[GlobalStyles.marginView, { alignItems: "center" }]}>
        <View
          style={{
            flexDirection: "row",
            borderWidth: DIM.deviceWidth * 0.003,
            borderRadius: DIM.deviceWidth * 0.02,
            borderColor: inputFieldColor.search,
            marginTop: -DIM.deviceWidth * 0.02,
            marginBottom: DIM.deviceHeight * 0.012,
            width: "90%",
          }}
        >
          <View style={{ marginLeft: DIM.deviceWidth * 0.01 }}>
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
                padding: 10,
              }}
            >
              <Image
                style={GlobalStyles.iconSize}
                source={Icons.search}
                tintColor={inputFieldColor.search}
              />
            </TouchableOpacity>
          </View>
          <TextInput
            onBlur={() => onBlur("search")}
            onFocus={() => onFocus("search")}
            style={{
              height: 46,
              fontSize: DIM.deviceFont * 16,
              borderRadius: DIM.deviceWidth * 0.02,
              fontWeight: "400",
              padding: 10,
              width: "80%",
              color: Colors.Charcoal,
              borderColor: inputFieldColor.search,
            }}
            placeholder={"Search Audio Books here..."}
            placeholderTextColor={Colors.Charcoal}
            value={searchInputText}
            onChangeText={(text) => {
              setSearchInputText(text);
            }}
            keyboardType="ascii-capable"
          />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <View style={GlobalStyles.marginView}>
          <Text
            style={{
              fontSize: DIM.deviceFont * 15,
              color: Colors.Charcoal,
              fontWeight: "700",
            }}
          >
            Categories
          </Text>
          <FlatList
            data={categoriesData}
            renderItem={({ item }) => <CategoriesUi data={item} />}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.key}
            numColumns={2}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
