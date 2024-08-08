import React from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {PRIMARY_COLOR11, WHITE} from '../constants/color';
import {WIDTH} from '../constants/size';

type Props = {
  data: Array<{id: number; title: string; subTitle: string; url: any}>;
  scrollX: Animated.Value;
  currentIndex: number;
};

const Pagination: React.FC<Props> = ({data, scrollX, currentIndex}) => {
  return (
    <View style={styles.container}>
      {data.map((_, index) => {
        const inputRange = [
          (index - 1) * WIDTH,
          index * WIDTH,
          (index + 1) * WIDTH,
        ];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [12, 46, 12],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={index}
            style={[
              styles.dot,
              {width: dotWidth},
              index === currentIndex && {backgroundColor: WHITE},
            ]}
          />
        );
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 70,
    flexDirection: 'row',
    gap: 4,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: PRIMARY_COLOR11,
  },
});
