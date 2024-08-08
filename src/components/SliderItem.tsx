import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {HEIGHT, WIDTH} from '../constants/size';
import {WHITE} from '../constants/color';
import {outfit, outfit_medium} from '../constants/font';
type Props = {
  item: {id: number; title: string; subTitle: string; url: any};
};
const SliderItem = (props: Props) => {
  const {item} = props;
  return (
    <View style={styles.container}>
      <Image source={item.url} resizeMode="contain" style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subTitle}>{item.subTitle}</Text>
      </View>
    </View>
  );
};

export default SliderItem;

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT / 1.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
  },
  content: {
    alignItems: 'center',
    gap: 28,
    marginTop: 54,
  },
  title: {
    fontSize: 36,
    lineHeight: 54,
    color: WHITE,
    fontFamily: outfit_medium,
    width: 229,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 16,
    lineHeight: 24,
    color: WHITE,
    fontFamily: outfit,
    width: 312,
    textAlign: 'center',
  },
});
