import React from "react";
import RootNavigation from "./src/routes/RootNavigation";

const App = () => {
  return <RootNavigation />;
};

export default App;

// import React, { useState, useEffect } from "react";
// import { View, Text, Button } from "react-native";
// import auth from "@react-native-firebase/auth";
// import {
//   GoogleSignin,
//   statusCodes,
// } from "@react-native-google-signin/google-signin";

// GoogleSignin.configure({
//   webClientId:
//     "635074856859-g71dk2h90729aqpv9oog48a8uqgluo1k.apps.googleusercontent.com",
//   offlineAccess: false,
// });

// const AuthScreen = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Subscribe to authentication state changes
//     const subscriber = auth().onAuthStateChanged((user) => {
//       setUser(user); // Update the user state when the authentication state changes
//     });

//     return subscriber; // Unsubscribe on component unmount to prevent memory leaks
//   }, []);

//   const signInWithGoogle = async () => {
//     try {
//       // Check if Google Play services are available
//       await GoogleSignin.hasPlayServices();

//       // Sign in with Google and get user info
//       const userInfo = await GoogleSignin.signIn();

//       // Create Google credentials for Firebase authentication
//       const googleCredential = auth.GoogleAuthProvider.credential(
//         userInfo.idToken,
//         userInfo.accessToken
//       );

//       // Sign in with Firebase using Google credentials
//       await auth().signInWithCredential(googleCredential);
//     } catch (error) {
//       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//         alert(SIGN_IN_CANCELLED);
//       } else if (error.code === statusCodes.IN_PROGRESS) {
//         alert(IN_PROGRESS);
//       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//         alert(PLAY_SERVICES_NOT_AVAILABLE);
//       } else {
//         console.error("Google Sign-In Error", error);
//       }
//     }
//   };

//   const signOut = async () => {
//     // Sign out of Google and Firebase
//     await GoogleSignin.signOut();
//     await auth().signOut();
//   };

//   return (
//     <View>
//       {user ? (
//         // Display user information and a sign-out button when signed in
//         <View>
//           <Text>Welcome, {user.displayName}</Text>
//           <Button title="Sign Out" onPress={signOut} />
//         </View>
//       ) : (
//         // Display a "Sign In with Google" button when not signed in
//         <Button title="Sign In with Google" onPress={signInWithGoogle} />
//       )}
//     </View>
//   );
// };

// export default AuthScreen;
