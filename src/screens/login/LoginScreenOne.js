import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Modal from "react-native-modal";
import { GoogleSigninButton } from "@react-native-google-signin/google-signin";
import { Colors, DIM, Icons } from "../../utilities/Constants";
import { GlobalStyles } from "../../utilities/GlobalStyles";

const LoginScreenOne = ({ navigation }) => {
  const [selectedLang, setSelectedLang] = useState("eng");
  const [showBottomSheet, setShowBottomSheet] = useState(false);

  const data = [
    {
      label: "English",
      value: "eng",
      selected: selectedLang === "eng",
    },
    {
      label: "தமிழ்",
      value: "tam",
      selected: selectedLang === "tam",
    },
    {
      label: "മലയാളം",
      value: "mal",
      selected: selectedLang === "mal",
    },
    {
      label: "हिंदी",
      value: "hin",
      selected: selectedLang === "hin",
    },
    {
      label: "తెలుగు",
      value: "tel",
      selected: selectedLang === "tel",
    },
  ];

  const chooseLang = () => {
    setShowBottomSheet(true);
  };

  const LangList = ({ data }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          selectLangFunction(data);
        }}
      >
        <View
          style={{
            borderColor: data.selected ? Colors.CuriousBlue : Colors.Iceberg,
            backgroundColor: null,
            borderWidth: DIM.deviceWidth * 0.004,
            borderRadius: 10,
            height: 50,
            marginTop: DIM.deviceHeight * 0.02,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                marginLeft: DIM.deviceWidth * 0.02,
                marginRight: DIM.deviceWidth * 0.02,
              }}
            >
              <Image
                source={data.selected ? Icons.checked : Icons.unChecked}
                style={[
                  GlobalStyles.iconSize,
                  {
                    tintColor: data.selected
                      ? Colors.CuriousBlue
                      : Colors.Silver,
                  },
                ]}
              />
            </View>
            <Text
              style={{
                fontSize: DIM.deviceFont * 18,
                fontWeight: "700",
                color: data.border,
                padding: 5,
              }}
            >
              {data.label}
            </Text>
          </View>
          <View style={{ marginRight: DIM.deviceWidth * 0.05 }}>
            <Image
              source={Icons.world}
              style={[
                GlobalStyles.iconSize,
                {
                  tintColor: data.selected ? Colors.CuriousBlue : Colors.Silver,
                  opacity: data.selected ? 1 : 0.5,
                },
              ]}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const selectLangFunction = (value) => {
    setSelectedLang(value.value); // Update the selected language
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <View
            style={{
              backgroundColor: Colors.Black,
              height: 260,
              width: 260,
              borderRadius: 150,
              opacity: 0.7,
            }}
          />
          <Image
            source={Icons.listen}
            style={{
              height: DIM.deviceHeight * 0.25,
              width: DIM.deviceWidth * 0.55,
              position: "absolute",
            }}
          />
        </View>
        <TouchableOpacity
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: DIM.deviceHeight * 0.02,
          }}
          onPress={() => {
            chooseLang();
          }}
        >
          <Image source={Icons.world} style={GlobalStyles.iconSize} />
          <Text
            style={{
              color: Colors.Charcoal,
              fontWeight: "500",
              fontSize: DIM.deviceFont * 14,
              marginLeft: DIM.deviceWidth * 0.012,
            }}
          >
            Choose Language
          </Text>
        </TouchableOpacity>
        <>
          <Text
            style={{
              color: Colors.CarbonGrey,
              fontSize: DIM.deviceFont * 16,
              marginTop: DIM.deviceHeight * 0.02,
            }}
          >
            Listen audio books anywhere
          </Text>
        </>
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Standard}
          color={GoogleSigninButton.Color.Dark}
          onPress={() => {
            // navigation.navigate("Dashboard"); //TODO As of now it directly navigate to Dashboard
            navigation.navigate("Home");
          }}
        />
        <Text style={{ color: Colors.Charcoal, fontSize: DIM.deviceFont * 16 }}>
          or{" "}
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "green",
            borderRadius: 5,
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 25,
            marginTop: 10,
          }}
          onPress={() => {
            // navigation.navigate("Dashboard"); //TODO As of now it directly navigate to Dashboard
            navigation.navigate("Home");
          }}
        >
          <Image
            source={Icons.mail}
            style={{ width: 25, height: 25, tintColor: Colors.White }}
          />
          <Text
            style={{
              color: "white",
              marginLeft: 10,
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            SignUp With Email
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: DIM.deviceFont * 14,
            color: Colors.CarbonGrey,
            marginTop: DIM.deviceHeight * 0.012,
          }}
        >
          Already Have An Account?
          <Text
            style={{ color: Colors.Black, fontWeight: "700" }}
            onPress={() => {
              navigation.navigate("LoginTwo");
            }}
          >
            {" "}
            Login Here
          </Text>
        </Text>
      </View>
      <Modal
        isVisible={showBottomSheet}
        onBackdropPress={() => {
          setShowBottomSheet(false);
        }}
        style={{ justifyContent: "flex-end", margin: 0 }}
        animationIn={"slideInUp"}
        animationOut={"slideOutDown"}
        animationInTiming={900}
        animationOutTiming={900}
      >
        <View
          style={{
            backgroundColor: Colors.White,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            height: 300,
            width: DIM.deviceWidth * 1,
            padding: 10,
          }}
        >
          <View style={GlobalStyles.marginView}>
            <FlatList
              data={data}
              renderItem={({ item }) => <LangList data={item} />}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
});

export default LoginScreenOne;

// import React, { useEffect, useState } from "react";
// import { View, Text, Image, Button } from "react-native";
// import {
//   GoogleSignin,
//   statusCodes,
//   GoogleSigninButton,
// } from "@react-native-google-signin/google-signin";
// import auth from "@react-native-firebase/auth";
// import { SafeAreaView } from "react-native";
// import { Colors, DIM, Icons } from "../../utilities/Constants";

// const LoginScreen = () => {
//   const [isSignInInProgress, setIsSignInInProgress] = useState(false);
//   const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState();

//   useEffect(() => {
//     GoogleSignin.configure({
//       webClientId:
//         "635074856859-g71dk2h90729aqpv9oog48a8uqgluo1k.apps.googleusercontent.com",
//     });
//   }, []);

//   // Handle user state changes
//   function onAuthStateChanged(user) {
//     setUser(user);
//     if (initializing) setInitializing(false);
//   }

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);

//   const onGoogleButtonPress = async () => {
//     // Check if your device supports Google Play
//     await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
//     // Get the users ID token
//     const { idToken } = await GoogleSignin.signIn();

//     // Create a Google credential with the token
//     const googleCredential = auth.GoogleAuthProvider.credential(idToken);

//     // Sign-in the user with the credential
//     const data = auth().signInWithCredential(googleCredential);
//     data
//       .then((value) => {
//         console.log(value);
//       })
//       .catch((e) => {
//         console.warn(e);
//       });
//   };

//   if (initializing) return null;

//   const signOut = async () => {
//     try {
//       await GoogleSignin.revokeAccess();
//       await auth.signOut();
//       setUser(null);
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   if (!user) {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <GoogleSigninButton
//           size={GoogleSigninButton.Size.Wide}
//           color={GoogleSigninButton.Color.Dark}
//           onPress={() => {
//             onGoogleButtonPress();
//           }}
//           disabled={isSignInInProgress}
//         />
//       </View>
//     );
//   }
//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: Colors.PurplyBlue }}>
//       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//         <View style={{ alignItems: "center", justifyContent: "center" }}>
//           <View
//             style={{
//               backgroundColor: Colors.Black,
//               height: 260,
//               width: 260,
//               borderRadius: 150,
//               opacity: 0.7,
//             }}
//           />
//           <Image
//             source={Icons.listen}
//             style={{
//               height: DIM.deviceHeight * 0.25,
//               width: DIM.deviceWidth * 0.55,
//               position: "absolute",
//             }}
//           />
//         </View>
//         {/* <>
//           <Text
//             style={{
//               color: Colors.White,
//               fontSize: DIM.deviceFont * 16,
//               marginTop: DIM.deviceHeight * 0.02,
//             }}
//           >
//             Listen audio books anywhere
//           </Text>
//         </> */}
//         <GoogleSigninButton
//           size={GoogleSigninButton.Size.Wide}
//           color={GoogleSigninButton.Color.Dark}
//           onPress={() => {
//             signIn();
//           }}
//           disabled={isSignInInProgress}
//         />
//         <Text>Welcome ,{user.displayName}</Text>
//         <Image
//           style={{ width: 50, height: 50, resizeMode: "contain" }}
//           source={{ uri: user.photoURL }}
//         />
//         <Button
//           title="Check"
//           onPress={() => {
//             console.log(user);
//           }}
//         />
//       </View>
//       <Button
//         title="sign out"
//         onPress={() => {
//           signOut();
//         }}
//       />
//     </SafeAreaView>
//   );
// };

// export default LoginScreen;
