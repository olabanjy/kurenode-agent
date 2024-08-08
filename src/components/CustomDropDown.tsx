import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { Dropdown } from "react-native-element-dropdown";
import {
  BLACK1,
  LABEL_GREY,
  PRIMARY_COLOR,
  SECONDARY_GREY2,
} from "../constants/color";
import { outfit } from "../constants/font";
type DropdownProps = {
  items: Array<{ label: string; value: string }>;
  onChange: (item: { label: string; value: string }) => void;
  placeholder: string;
  value: string;
  label?: string;
  bottomLabel?: string;
  onPress?: () => void;
  style?: ViewStyle;
  // Add other fields as needed
};

const CustomDropDown = (props: DropdownProps) => {
  const {
    items,
    onChange,
    placeholder,
    value,
    label,
    bottomLabel,
    onPress,
    style,
  } = props;

  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <Dropdown
        data={items}
        labelField="label"
        valueField="value"
        onChange={onChange}
        placeholder={placeholder}
        style={[styles.inputStyle, value !== "" && styles.active, style]}
        value={value}
        placeholderStyle={{ color: SECONDARY_GREY2 }}
      />
      {bottomLabel && (
        <TouchableOpacity onPress={onPress}>
          <Text style={[styles.label, { color: PRIMARY_COLOR, marginTop: 12 }]}>
            {bottomLabel}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomDropDown;

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 16,
    borderRadius: 5,
    borderColor: SECONDARY_GREY2,
    color: SECONDARY_GREY2,
  },
  active: {
    borderColor: BLACK1,
  },
  label: {
    fontSize: 16,
    fontFamily: outfit,
    lineHeight: 24,
    color: LABEL_GREY,
    marginBottom: 8,
  },
});
