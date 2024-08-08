import { StyleSheet } from "react-native";
import { HEIGHT, WIDTH } from "../../../constants/size";
import { ICON_COLOR, PRIMARY_COLOR2, WHITE } from "../../../constants/color";
import { outfit } from "../../../constants/font";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginTop: 24,
  },
  inputContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 16,
  },
  inputHeaderContainer: {
    paddingHorizontal: 19,
    paddingVertical: 33,
    gap: 24,
  },
  view2: {
    marginTop: 14,
    paddingTop: 18,
  },
  checkContainerStyle: {
    padding: 0,
    marginLeft: 0,
  },
  checkTextStyle: {
    fontFamily: outfit,
    fontSize: 16,
    lineHeight: 24,
    color: ICON_COLOR,
    fontWeight: "400",
  },
});
