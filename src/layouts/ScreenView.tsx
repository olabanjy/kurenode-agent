import { SafeAreaView, StatusBar, StyleSheet, ViewStyle } from "react-native";
import { SECONDARY_GREY } from "../constants/color";
import { ReactNode } from "react";
import CustomDrawerContent from "./ContentDrawerContent";
import { WIDTH } from "../constants/size";
import { useRoute } from "@react-navigation/native";

type Props = {
  children: ReactNode;
  style?: ViewStyle;
};

const ScreenView = (props: Props) => {
  const { children, style } = props;
  const route = useRoute();
  const screensWithDrawer = [
    "home-screen",
    "manage-patients-screen",
    "onboard-one-screen",
    "onboard-two-screen",
    "onboard-success-screen",
    "manage-appoinment-screen",
    "create-appoinment-screen",
    "manage-encounter-screen",
    "account-screen",
    "settings-screen",
  ];
  const showDrawerContent = screensWithDrawer.includes(route.name);
  return (
    <SafeAreaView style={[styles.container, style]}>
      <StatusBar barStyle={"dark-content"} backgroundColor={SECONDARY_GREY} />
      {showDrawerContent && <CustomDrawerContent />}
      {children}
    </SafeAreaView>
  );
};

export default ScreenView;
const styles = StyleSheet.create({
  container: {
    backgroundColor: SECONDARY_GREY,
    width: WIDTH,
    height: "100%",
  },
});
