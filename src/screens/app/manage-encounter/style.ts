import { StyleSheet } from "react-native";
import { HEIGHT, WIDTH } from "../../../constants/size";
import { PRIMARY_COLOR2, WHITE } from "../../../constants/color";
import { outfit } from "../../../constants/font";

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: WHITE,
    flexDirection: "row",
  },
  viewContainer: {
    flex: 2,
    alignSelf: "center",
    backgroundColor: WHITE,
    height: "100%",
    paddingHorizontal: 32,
  },
  view1: {
    width: "100%",
    alignSelf: "center",
    position: "relative",
    flex: 1,
    marginTop: 62,
    gap: 24,
  },
});
