import React, { ReactNode } from "react";
import { TextInput } from "react-native-paper";
import {
  BLACK1,
  PRIMARY_COLOR,
  SECONDARY_GREY2,
  WHITE,
} from "../constants/color";
import { TextStyle, ViewStyle } from "react-native";

type Props = {
  value: string;
  icon?: ReactNode;
  onChange: (text: string) => void;
  placeholder: string;
  password: boolean;
  label?: string;
  editable?: boolean;
  onPressIn?: () => void;
  style?: ViewStyle | TextStyle;
  multiline?: boolean;
};

const CustomInput = (props: Props) => {
  const {
    onChange,
    placeholder,
    value,
    icon,
    password,
    label,
    editable,
    onPressIn,
    style,
    multiline,
  } = props;
  return (
    <TextInput
      placeholder={placeholder}
      autoComplete="off"
      mode="outlined"
      value={value}
      onChangeText={onChange}
      secureTextEntry={password}
      activeOutlineColor={PRIMARY_COLOR}
      outlineColor={SECONDARY_GREY2}
      editable={editable}
      onPressIn={onPressIn}
      placeholderTextColor={value !== "" ? BLACK1 : SECONDARY_GREY2}
      style={[{ backgroundColor: WHITE }, style]}
      outlineStyle={{
        borderWidth: 1,
        borderColor: value !== "" ? BLACK1 : SECONDARY_GREY2,
      }}
      right={icon}
      label={label}
      multiline={multiline}
    />
  );
};

export default CustomInput;
