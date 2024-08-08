import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { RootRoute } from "./src/routes";
import { useFonts } from "expo-font";
import { RootSiblingParent } from "react-native-root-siblings";
import AuthContextProvider from "./src/contexts/AuthContext";
import { RecoilRoot } from "recoil";
import { PaperProvider } from "react-native-paper";

export default function App() {
  const [loaded] = useFonts({
    "OutFit-ExtraBold": require("./assets/fonts/Outfit-ExtraBold.ttf"),
    "OutFit-ExtraLight": require("./assets/fonts/Outfit-ExtraLight.ttf"),
    "OutFit-Light": require("./assets/fonts/Outfit-Light.ttf"),
    "OutFit-Bold": require("./assets/fonts/Outfit-Bold.ttf"),
    "OutFit-Thin": require("./assets/fonts/Outfit-Thin.ttf"),
    "OutFit-Medium": require("./assets/fonts/Outfit-Medium.ttf"),
    "OutFit-Black": require("./assets/fonts/Outfit-Black.ttf"),
    OutFit: require("./assets/fonts/Outfit-Regular.ttf"),
    "OutFit-SemiBold": require("./assets/fonts/Outfit-SemiBold.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <RootSiblingParent>
      <AuthContextProvider>
        <RecoilRoot>
          <RootRoute />
        </RecoilRoot>
      </AuthContextProvider>
    </RootSiblingParent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// <View style={styles.container}>
//   <Text>Open up App.tsx to start working on your app!</Text>
//   <StatusBar style="auto" />
// </View>
