import {StyleSheet, Text, TextStyle} from 'react-native';
import {outfit} from '../../constants/font';
import {LABEL_GREY} from '../../constants/color';
import {ReactNode} from 'react';

type Props = {
  children: ReactNode;
  style?: TextStyle;
};

const Title = ({children, style}: Props) => {
  return <Text style={[styles.title, style]}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    lineHeight: 30,
    fontFamily: outfit,
    textAlign: 'center',
    color: LABEL_GREY,
  },
});
