import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {LINE_COLOR, PRIMARY_COLOR2, TEXT_GREY2} from '../constants/color';
import {outfit} from '../constants/font';

type Props = {
  onPress: (tagActive: 'Benefits' | 'Health') => void;
  tagActive: 'Benefits' | 'Health';
};

const TagButtonContainer = (props: Props) => {
  const {onPress, tagActive} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: LINE_COLOR,
        gap: 55,
        marginTop: 16,
      }}>
      <TouchableOpacity
        onPress={() => onPress('Benefits')}
        style={[tagActive === 'Benefits' && styles.activeTextButton]}>
        <Text
          style={[
            styles.textButton,
            tagActive === 'Benefits' && styles.activeTextButton,
          ]}>
          Benefits
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onPress('Health')}
        style={[tagActive === 'Health' && styles.activeTextButton]}>
        <Text
          style={[
            styles.textButton,
            tagActive === 'Health' && styles.activeTextButton,
          ]}>
          Health Plan
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TagButtonContainer;

const styles = StyleSheet.create({
  textButton: {
    fontSize: 18,
    lineHeight: 27,
    fontFamily: outfit,
    color: TEXT_GREY2,
  },
  activeTextButton: {
    color: PRIMARY_COLOR2,
    borderBottomWidth: 4,
    borderBottomColor: PRIMARY_COLOR2,
  },
});
