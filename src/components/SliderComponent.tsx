import {
  View,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Animated,
  ViewToken,
} from 'react-native';
import React, {useMemo, useRef, useState} from 'react';
import {sliderList} from '../data/sliderList';
import SliderItem from './SliderItem';
import Pagination from './Pagination';

const SliderComponent = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleOnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };
  //   const handleOnViewabelChanged = useRef((viewableItems: any)=>{
  //     console.log(viewableItems)
  //   })
  const handleOnViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: ViewToken[]}) => {
      if (viewableItems.length > 0) {
        setCurrentIndex(viewableItems[0].index || 0);
      }
    },
  ).current;

  const viewabilityConfig = useMemo(
    () => ({
      itemVisiblePercentThreshold: 50,
    }),
    [],
  );
  return (
    <View>
      <FlatList
        data={sliderList}
        horizontal
        renderItem={({item}) => <SliderItem item={item} />}
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <Pagination
        data={sliderList}
        scrollX={scrollX}
        currentIndex={currentIndex}
      />
    </View>
  );
};

export default SliderComponent;
