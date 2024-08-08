import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React, {ReactNode} from 'react';
import {PRIMARY_COLOR} from '../constants/color';
import {outfit_medium} from '../constants/font';

type Props = {
  children: ReactNode;
  style?: ViewStyle;
  onPress?: () => void;
  textStyle?: TextStyle;
};
const FlatButton = (props: Props) => {
  const {children, style, onPress, textStyle} = props;
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

export default FlatButton;

const styles = StyleSheet.create({
  button: {
    borderColor: PRIMARY_COLOR,
    borderWidth: 1,
    width: '100%',
    borderRadius: 5,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  text: {
    color: PRIMARY_COLOR,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: outfit_medium,
    lineHeight: 27,
  },
});
