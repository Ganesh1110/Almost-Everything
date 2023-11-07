import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
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

  const RecentlyAdded = [
    { key: "1", label: "Title 1", icons: Icons.books },
    { key: "2", label: "Title 2", icons: Icons.books },
    {
      key: "3",
      label: "Title 3",

      icons: Icons.books,
    },
    { key: "4", label: "Title 4", icons: Icons.books },
    {
      key: "5",
      label: "Title 5",
      icons: Icons.books,
    },
    { key: "6", label: "Title 6", icons: Icons.books },
    { key: "7", label: "Title 7", icons: Icons.books },
    {
      key: "8",
      label: "Title 8",
      icons: Icons.books,
    },
    {
      key: "9",
      label: "Title 9",
      icons: Icons.books,
    },
    {
      key: "10",
      label: "Title 10",
      icons: Icons.books,
    },
    { key: "11", label: "Title 11", icons: Icons.books },
    { key: "12", label: "Title 12", icons: Icons.books },
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

  const ListHeader = ({ title }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: DIM.deviceHeight * 0.02,
        }}
      >
        <Text
          style={{
            fontSize: DIM.deviceFont * 15,
            color: Colors.Black,
            fontWeight: "700",
          }}
        >
          {title}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontSize: DIM.deviceFont * 12,
              color: Colors.SnakeGreen,
              fontWeight: "700",
              marginRight: DIM.deviceWidth * 0.02,
            }}
          >
            View All
          </Text>
          <Image
            source={Icons.leftArrow}
            style={{
              width: DIM.deviceWidth * 0.03,
              height: DIM.deviceHeight * 0.015,
              tintColor: Colors.SnakeGreen,
              transform: [{ scaleX: -1 }],
            }}
          />
        </View>
      </View>
    );
  };

  const RecentlyAddedUI = ({ data }) => {
    return (
      <View>
        <View
          style={{
            height: DIM.deviceHeight * 0.2,
            width: DIM.deviceWidth * 0.29,
            borderRadius: 10,
            marginTop: DIM.deviceHeight * 0.01,
            backgroundColor: Colors.Mist,
            opacity: 0.6,
          }}
        />
        <View style={{ position: "absolute" }}>
          <Image
            source={data.icons}
            style={{
              width: DIM.deviceWidth * 0.3,
              height: DIM.deviceHeight * 0.15,
              resizeMode: "container",
              marginTop: DIM.deviceHeight * 0.025,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: DIM.deviceHeight * 0.005,
          }}
        >
          <Text
            style={{
              fontSize: DIM.deviceFont * 13,
              color: Colors.CarbonGrey,
              fontWeight: "700",
              marginLeft: DIM.deviceWidth * 0.02,
              maxWidth: DIM.deviceWidth * 0.2,
            }}
          >
            {data.label}
          </Text>
          <Image
            source={Icons.lock}
            style={{
              width: DIM.deviceWidth * 0.04,
              height: DIM.deviceHeight * 0.022,
              resizeMode: "contain",
            }}
          />
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={{ paddingBottom: 80 }}
        >
          <Text
            style={{
              fontSize: DIM.deviceFont * 15,
              color: Colors.Black,
              fontWeight: "700",
              marginTop: DIM.deviceHeight * 0.02,
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
          <ListHeader title={"Recently Added"} />
          <FlatList
            data={RecentlyAdded}
            renderItem={({ item }) => <RecentlyAddedUI data={item} />}
            showsVerticalScrollIndicator={false}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={ItemSeparator}
          />
          <ListHeader title={"Popular Audio Books"} />
          <FlatList
            data={RecentlyAdded}
            renderItem={({ item }) => <RecentlyAddedUI data={item} />}
            showsVerticalScrollIndicator={false}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={ItemSeparator}
          />
          <ListHeader title={"Premium Summaries"} />
          <FlatList
            data={RecentlyAdded}
            renderItem={({ item }) => <RecentlyAddedUI data={item} />}
            showsVerticalScrollIndicator={false}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={ItemSeparator}
          />
          <ListHeader title={"Free Summaries"} />
          <FlatList
            data={RecentlyAdded}
            renderItem={({ item }) => <RecentlyAddedUI data={item} />}
            showsVerticalScrollIndicator={false}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={ItemSeparator}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
