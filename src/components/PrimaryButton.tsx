import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import React, { ReactNode } from "react";
import {
  BACGROUND_DISABLE,
  PRIMARY_COLOR,
  TEXT_DISABLE,
  WHITE,
} from "../constants/color";
import { outfit_medium } from "../constants/font";

type Props = {
  children: ReactNode;
  style?: ViewStyle;
  activeText?: TextStyle;
  disabled: boolean;
  onPress?: () => void;
};

const PrimaryButton = (props: Props) => {
  const { children, style, disabled, onPress, activeText } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        style,
        { backgroundColor: !disabled ? PRIMARY_COLOR : BACGROUND_DISABLE },
      ]}
    >
      <Text
        style={[
          styles.text,
          { color: !disabled ? WHITE : TEXT_DISABLE },
          activeText,
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: BACGROUND_DISABLE,
    width: "100%",
    borderRadius: 5,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  text: {
    color: TEXT_DISABLE,
    textAlign: "center",
    fontSize: 18,
    fontFamily: outfit_medium,
    lineHeight: 27,
  },
});
