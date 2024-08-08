import { StyleSheet } from "react-native";
import { HEIGHT, WIDTH } from "../../../constants/size";
import { PRIMARY_COLOR2, WHITE } from "../../../constants/color";
import { outfit } from "../../../constants/font";

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: WIDTH,
    height: HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: WHITE,
  },
  viewContainer: {
    width: "100%",
    alignSelf: "center",
    backgroundColor: WHITE,
    height: 498,
  },
  view1: {
    width: 438,
    alignSelf: "center",
    position: "relative",
    flex: 1,
    height: "100%",
  },
  formContainer: {
    gap: 18,
    flex: 1,
    marginTop: 20,
  },
  inputContainer: {
    gap: 16,
  },
  button: {
    alignSelf: "flex-end",
  },
  text1: {
    fontFamily: outfit,
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 24,
    color: PRIMARY_COLOR2,
  },
});
