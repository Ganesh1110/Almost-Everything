import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { useTranslation } from "react-i18next";
import { GlobalStyles } from "../../utilities/GlobalStyles";
import CustomHeader from "../../components/CustomHeader";
import { Colors, Icons } from "../../utilities/Constants";

const Dashboard = ({ navigation }) => {
  const { t } = useTranslation();

  const openDrawerNavigation = () => {
    navigation.openDrawer();
  };

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <CustomHeader
        heading={"Dashboard"}
        leftIconName={Icons.Menu}
        onLeftIconPress={openDrawerNavigation}
        headerBg={Colors.DustyRed_Op}
      />
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          onPress={() => {
            navigation.navigate("LoginOne");
          }}
        >
          {t("change-Language")}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
