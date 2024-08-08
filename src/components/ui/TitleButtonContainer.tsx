import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Title from './Title';
import {outfit} from '../../constants/font';
import {PRIMARY_COLOR} from '../../constants/color';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
  title: string;
  onPress: () => void;
};

const TitleButtonContainer = (props: Props) => {
  const {title, onPress} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Title style={{textAlign: 'left'}}>{title}</Title>
      <TouchableOpacity
        onPress={onPress}
        style={{flexDirection: 'row', gap: 8, alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 14,
            fontFamily: outfit,
            lineHeight: 21,
            color: PRIMARY_COLOR,
          }}>
          See All
        </Text>
        <Ionicons name="chevron-forward" size={12} color={PRIMARY_COLOR} />
      </TouchableOpacity>
    </View>
  );
};

export default TitleButtonContainer;
