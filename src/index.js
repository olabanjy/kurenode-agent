import "react-native-gesture-handler";
import "react-native-reanimated";
import { AppRegistry } from "react-native";
import App from "./App";

AppRegistry.registerComponent("App", () => App);
AppRegistry.runApplication("App", {
  rootTag: document.getElementById("root"),
});
