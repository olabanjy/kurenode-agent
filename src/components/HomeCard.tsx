import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Title from "./ui/Title";
import {
  BLACK2,
  PRIMARY_COLOR,
  PRIMARY_COLOR2,
  PRIMARY_COLOR3,
  SECONDARY_GREY,
  TEXT_GREY2,
  WHITE,
} from "../constants/color";
import { outfit, outfit_medium, outfit_semibold } from "../constants/font";
import { homeCardListProps } from "../data/cardlist";

const HomeCard = (props: homeCardListProps) => {
  const { percentage, title, total, id } = props;
  return (
    <View style={[styles.blueContainer, id === 1 && styles.activeBlue]}>
      <Text style={[styles.text1, id === 1 && { color: WHITE }]}>{title}</Text>
      <Text style={[styles.text2, id === 1 && { color: WHITE }]}>{total}</Text>
      <View
        style={[styles.text3Container, id === 1 && styles.activeText3Container]}
      >
        <Text style={[styles.text3, id === 1 && { color: WHITE }]}>
          + {percentage}
        </Text>
      </View>
    </View>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  blueContainer: {
    flex: 1,
    height: 182,
    borderRadius: 5,
    backgroundColor: SECONDARY_GREY,
    justifyContent: "center",
  },
  text1: {
    color: TEXT_GREY2,
    fontSize: 16,
    fontFamily: outfit,
    lineHeight: 24,
    textAlign: "center",
  },
  text2: {
    color: BLACK2,
    fontSize: 48,
    fontFamily: outfit_medium,
    lineHeight: 72,
    textAlign: "center",
  },
  text3Container: {
    backgroundColor: "#E0ECFD",
    width: 83,
    height: 29,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  activeText3Container: {
    backgroundColor: "#66A1F3",
  },
  text3: {
    color: PRIMARY_COLOR2,
    fontSize: 14,
    fontFamily: outfit,
    lineHeight: 21,
    textAlign: "center",
  },
  activeBlue: {
    backgroundColor: PRIMARY_COLOR,
  },
});
