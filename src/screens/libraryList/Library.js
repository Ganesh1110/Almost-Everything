import React, { useState } from "react";
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
import { Colors, DIM, Icons, Images } from "../../utilities/Constants";
import DynamicTabHeader from "../../components/CustomDynamictabBar";
import { Platform } from "react-native";

const Library = ({ navigation }) => {
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

  const CassetteData = [
    { key: "1", title: "The Name of the Book 1" },
    { key: "2", title: "The Name of the Book 2" },
    { key: "3", title: "The Name of the Book 3" },
    { key: "4", title: "The Name of the Book 4" },
    { key: "5", title: "The Name of the Book 5" },
    { key: "6", title: "The Name of the Book 6" },
    { key: "7", title: "The Name of the Book 7" },
    { key: "8", title: "The Name of the Book 8" },
    { key: "9", title: "The Name of the Book 9" },
    { key: "10", title: "The Name of the Book 10" },
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
            See All
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
        </View>
      </View>
    );
  };

  const CassetteView = ({ data }) => {
    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ position: "relative", zIndex: 2 }}>
            <View
              style={{
                height: DIM.deviceHeight * 0.15,
                width: DIM.deviceWidth * 0.29,
                borderRadius: 10,
                marginTop: DIM.deviceHeight * 0.01,
                backgroundColor: Colors.Mist,
              }}
            />
            <View style={{ position: "absolute" }}>
              <Image
                source={Icons.books}
                style={{
                  width: DIM.deviceWidth * 0.2,
                  height: DIM.deviceHeight * 0.1,
                  resizeMode: "contain",
                  marginTop: DIM.deviceHeight * 0.03,
                  marginLeft: DIM.deviceWidth * 0.04,
                }}
              />
            </View>
          </View>
          <View style={{ left: -50, top: 19, opacity: 0.6 }}>
            <View
              style={{
                height: 40,
                width: 40,
                borderRadius: 20,
                borderWidth: 5,
                borderColor: "red",
                backgroundColor: Colors.GhostWhite,
                top: 30,
                left: 30,
                zIndex: 1,
              }}
            />
            <Image
              source={Images.drawerBg}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                position: "absolute",
              }}
            />
          </View>
        </View>
        <>
          <View>
            <Text
              style={{
                marginLeft: DIM.deviceWidth * 0.05,
                fontSize: DIM.deviceFont * 14,
                fontWeight: "700",
              }}
            >
              {data.title}
            </Text>
            <Text
              style={{
                marginLeft: DIM.deviceWidth * 0.05,
                fontSize: DIM.deviceFont * 12,
                fontWeight: "400",
              }}
            >
              Subscription Status
            </Text>
          </View>
        </>
      </View>
    );
  };

  const ItemSeparator = () => {
    return <View style={GlobalStyles.marginView} />;
  };

  const tabsData = [{ title: "My Library" }, { title: "Downloads" }];

  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <View style={{ backgroundColor: Colors.GhostWhite }}>
      <SafeAreaView
        style={{
          backgroundColor: Colors.GhostWhite,
        }}
      >
        <DynamicTabHeader
          tabs={tabsData}
          onTabChange={handleTabChange}
          activeTab={activeTab}
        />
      </SafeAreaView>
      {tabsData[activeTab].title === "My Library" && (
        <>
          <ScrollView
            showsVerticalScrollIndicator={false}
            bounces={false}
            contentContainerStyle={{ paddingBottom: 80 }}
          >
            <View style={GlobalStyles.marginView}>
              <ListHeader title={`Recently Played ${"(7)"}`} />
              <FlatList
                data={RecentlyAdded}
                renderItem={({ item }) => <RecentlyAddedUI data={item} />}
                showsVerticalScrollIndicator={false}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={ItemSeparator}
              />
            </View>
            <View
              style={{
                borderBlockColor: Colors.CarbonGrey,
                borderWidth: 1,
                marginTop: DIM.deviceHeight * 0.012,
              }}
            />
            <View style={GlobalStyles.marginView}>
              <ListHeader title={`Saved for Later ${"(7)"}`} />
              <FlatList
                data={RecentlyAdded}
                renderItem={({ item }) => <RecentlyAddedUI data={item} />}
                showsVerticalScrollIndicator={false}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={ItemSeparator}
              />
            </View>
            <View
              style={{
                borderBlockColor: Colors.CarbonGrey,
                borderWidth: 1,
                marginTop: DIM.deviceHeight * 0.012,
              }}
            />
            <View style={GlobalStyles.marginView}>
              <ListHeader title={`Completed Shows ${"(7)"}`} />
              <FlatList
                data={RecentlyAdded}
                renderItem={({ item }) => <RecentlyAddedUI data={item} />}
                showsVerticalScrollIndicator={false}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={ItemSeparator}
              />
            </View>
          </ScrollView>
        </>
      )}
      {tabsData[activeTab].title === "Downloads" && (
        <>
          <View style={GlobalStyles.marginView}>
            {/* <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ position: "relative", zIndex: 2 }}>
                  <View
                    style={{
                      height: DIM.deviceHeight * 0.15,
                      width: DIM.deviceWidth * 0.29,
                      borderRadius: 10,
                      marginTop: DIM.deviceHeight * 0.01,
                      backgroundColor: Colors.Mist,
                    }}
                  />
                  <View style={{ position: "absolute" }}>
                    <Image
                      source={Icons.books}
                      style={{
                        width: DIM.deviceWidth * 0.2,
                        height: DIM.deviceHeight * 0.1,
                        resizeMode: "contain",
                        marginTop: DIM.deviceHeight * 0.03,
                        marginLeft: DIM.deviceWidth * 0.04,
                      }}
                    />
                  </View>
                </View>
                <View style={{ left: -50, top: 19, opacity: 0.6 }}>
                  <View
                    style={{
                      height: 40,
                      width: 40,
                      borderRadius: 20,
                      borderWidth: 5,
                      borderColor: "red",
                      backgroundColor: Colors.GhostWhite,
                      top: 30,
                      left: 30,
                      zIndex: 1,
                    }}
                  />
                  <Image
                    source={Images.drawerBg}
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 50,
                      position: "absolute",
                    }}
                  />
                </View>
              </View>
              <>
                <View>
                  <Text
                    style={{
                      marginLeft: DIM.deviceWidth * 0.05,
                      fontSize: DIM.deviceFont * 14,
                      fontWeight: "700",
                    }}
                  >
                    The Name of the Book
                  </Text>
                  <Text
                    style={{
                      marginLeft: DIM.deviceWidth * 0.05,
                      fontSize: DIM.deviceFont * 12,
                      fontWeight: "400",
                    }}
                  >
                    Subscription Status
                  </Text>
                </View>
              </>
            </View> */}
            <FlatList
              data={CassetteData}
              renderItem={({ item }) => <CassetteView data={item} />}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.key}
              contentContainerStyle={{ paddingBottom: 100 }}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default Library;
