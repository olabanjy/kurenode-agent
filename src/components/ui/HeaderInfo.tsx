import { View, Text, StyleSheet, TextStyle, ViewStyle } from "react-native";
import React from "react";
import Title from "./Title";
import { outfit_light } from "../../constants/font";
import { BLACK2 } from "../../constants/color";

type Props = {
  title: string;
  subTitle: string;
  titleFont?: number;
  subTitleStyle?: TextStyle;
  style?: ViewStyle;
  textAlign?: "center" | "left" | "auto" | "right" | "justify" | undefined;
};

const HeaderInfo = (props: Props) => {
  const { subTitle, title, subTitleStyle, titleFont, style, textAlign } = props;
  return (
    <View style={style}>
      <Title
        style={{
          fontSize: titleFont ? titleFont : 28,
          lineHeight: 42,
          textAlign: textAlign ? textAlign : "left",
        }}
      >
        {title}
      </Title>
      <Text style={[styles.textThin, subTitleStyle]}>{subTitle}</Text>
    </View>
  );
};

export default HeaderInfo;

const styles = StyleSheet.create({
  textThin: {
    fontSize: 17,
    fontFamily: outfit_light,
    lineHeight: 24,
    color: BLACK2,
  },
});
