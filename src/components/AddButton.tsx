import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import { PRIMARY_COLOR } from "../constants/color";
import { outfit } from "../constants/font";

type Props = {
  text: string;
  onPress: () => void;
};

const AddButton = (props: Props) => {
  const { text, onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ flexDirection: "row", gap: 11, alignItems: "center" }}
    >
      <FontAwesome6 name="circle-plus" size={24} color={PRIMARY_COLOR} />
      <Text
        style={{
          fontSize: 18,
          fontFamily: outfit,
          color: PRIMARY_COLOR,
          lineHeight: 27,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default AddButton;
