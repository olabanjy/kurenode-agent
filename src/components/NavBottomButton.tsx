import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {PRIMARY_COLOR, TEXT_GREY2} from '../constants/color';
import {outfit, outfit_medium} from '../constants/font';

type Props = {
  text: string;
  buttonText: string;
  onPress: () => void;
  style?: ViewStyle;
};

const NavBottomButton = (props: Props) => {
  const {buttonText, text, onPress, style} = props;
  return (
    <View style={[styles.bottomContainer, style]}>
      <Text style={styles.text}>{text}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.text2}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavBottomButton;

const styles = StyleSheet.create({
  bottomContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    gap: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: TEXT_GREY2,
    fontFamily: outfit,
  },
  text2: {
    fontSize: 14,
    lineHeight: 21,
    color: PRIMARY_COLOR,
    fontFamily: outfit_medium,
  },
});
