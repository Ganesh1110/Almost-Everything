import React from "react";
import { View, Text, SafeAreaView, FlatList, Image } from "react-native";
import { GlobalStyles } from "../../utilities/GlobalStyles";
import CustomHeader from "../../components/CustomHeader";
import { Colors, DIM, Icons } from "../../utilities/Constants";

const Dashboard = ({ navigation }) => {
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

  const openDrawerNavigation = () => {
    navigation.openDrawer();
  };

  const CategoriesUi = ({ data }) => {
    return (
      <View>
        <View
          style={{
            backgroundColor: data.color,
            padding: 10,
            borderRadius: 10,
            marginTop: DIM.deviceHeight * 0.01,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image source={data.icons} style={GlobalStyles.iconSize} />
          <Text
            style={{
              fontSize: DIM.deviceFont * 15,
              color: Colors.White,
              fontWeight: "700",
              marginLeft: DIM.deviceWidth * 0.02,
            }}
          >
            {data.label}
          </Text>
        </View>
      </View>
    );
  };

  const ItemSeparator = () => {
    return <View style={GlobalStyles.marginView} />;
  };

  return (
    <SafeAreaView
      style={[GlobalStyles.container, { backgroundColor: Colors.GhostWhite }]}
    >
      <CustomHeader
        heading={"Dashboard"}
        leftIconName={Icons.Menu}
        onLeftIconPress={openDrawerNavigation}
        headerBg={Colors.DustyRed_Op}
      />
      <View style={GlobalStyles.marginView}>
        <Text
          style={{
            fontSize: DIM.deviceFont * 15,
            color: Colors.Black,
            fontWeight: "700",
            marginTop: DIM.deviceHeight * 0.012,
          }}
        >
          Audio Books Category
        </Text>
        <FlatList
          data={categoriesData}
          renderItem={({ item }) => <CategoriesUi data={item} />}
          showsVerticalScrollIndicator={false}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={ItemSeparator}
        />
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
