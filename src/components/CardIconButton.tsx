import {ImageProps, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BLACK2, PRIMARY_COLOR10} from '../constants/color';
import {Image} from 'react-native';

type Props = {
  text: string;
  imageUri: ImageProps;
  display?: boolean;
};

const CardIconButton = (props: Props) => {
  const {imageUri, text, display} = props;
  return (
    <View
      style={{
        gap: 12,
        width: 66,
        flexGrow: 1,
      }}>
      <TouchableOpacity
        style={{
          paddingHorizontal: 13,
          paddingVertical: 12,
          borderRadius: 6,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: PRIMARY_COLOR10,
          width: '100%',
          height: 64,
          display: display ? 'flex' : 'none',
        }}>
        <Image source={imageUri} width={40} height={40} />
      </TouchableOpacity>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 12,
          lineHeight: 18,
          color: BLACK2,
          display: display ? 'flex' : 'none',
        }}>
        {text}
      </Text>
    </View>
  );
};

export default CardIconButton;
