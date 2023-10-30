import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useTranslation } from "react-i18next";
import { GoogleSigninButton } from "@react-native-google-signin/google-signin";
import i18next from "../../services/i18next";
import { Colors, DIM, Icons } from "../../utilities/Constants";

const LoginScreenOne = ({ navigation }) => {
  const { t } = useTranslation();

  const changeLng = () => {
    if (i18next.language == "eng") {
      i18next.changeLanguage("tam");
    } else {
      i18next.changeLanguage("eng");
    }
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
            navigation.navigate("Dashboard");
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
            navigation.navigate("Dashboard");
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
            Sign Up with Email
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
