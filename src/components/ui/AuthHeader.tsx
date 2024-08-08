import { Image, ImageStyle, StyleSheet, TextStyle, View } from "react-native";
import React from "react";
import Title from "./Title";

type Props = {
  title?: string;
  displayStyle?: TextStyle;
  headerStyle?: ImageStyle;
};

const AuthHeader = ({ title, displayStyle, headerStyle }: Props) => {
  return (
    <View style={styles.headerStyle}>
      <Image
        source={require("../../../assets/images/logo.png")}
        width={156}
        height={33}
        style={[styles.imageStyle, headerStyle]}
      />
      <Title style={displayStyle}>{title ? title : "Welcome on board!"}</Title>
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  headerStyle: {
    gap: 20,
    alignSelf: "center",
    marginTop: 24,
    marginBottom: 16,
    alignItems: "center",
  },
  imageStyle: {
    width: 156,
    height: 33,
    marginBottom: 36,
  },
});
