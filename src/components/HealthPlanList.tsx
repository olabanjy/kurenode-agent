import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {
  BORDER_GREY,
  ICON_COLOR,
  PRIMARY_COLOR,
  WHITE,
} from '../constants/color';
import {CheckBox} from '@rneui/base';
import {outfit_light, outfit_medium, outfit_semibold} from '../constants/font';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Octicons from 'react-native-vector-icons/Octicons';
import {healthListProps} from '../data/cardlist';

interface HealthPlanListProps extends healthListProps {
  currentIndex: number | null;
  handleCurrentIndex: (index: number) => void;
}

const HealthPlanList = (props: HealthPlanListProps) => {
  const {duration, price, title, id, currentIndex, handleCurrentIndex} = props;

  return (
    <View>
      <View
        style={[
          styles.container,
          currentIndex === id && {
            backgroundColor: PRIMARY_COLOR,
            borderWidth: 0,
          },
        ]}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            width: '100%',
          }}>
          <CheckBox
            onPress={() => handleCurrentIndex(id)}
            checked={currentIndex === id}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checkedColor={WHITE}
            containerStyle={{
              backgroundColor: 'transparent',
              margin: 0,
              padding: 0,
            }}
          />
          <View
            style={{
              justifyContent: 'space-between',
              height: '100%',
              width: '100%',
            }}>
            <Text style={[styles.text1, currentIndex === id && {color: WHITE}]}>
              {title}
            </Text>
            <Text style={[styles.text2, currentIndex === id && {color: WHITE}]}>
              {duration}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '80%',
              }}>
              <Text
                style={[styles.text3, currentIndex === id && {color: WHITE}]}>
                {price}
              </Text>
              <TouchableOpacity
                style={{flexDirection: 'row', gap: 4, alignItems: 'center'}}>
                <Octicons
                  name="info"
                  size={16}
                  color={currentIndex === id ? WHITE : ICON_COLOR}
                />
                <Text
                  style={[styles.text3, currentIndex === id && {color: WHITE}]}>
                  Learn More
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HealthPlanList;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: BORDER_GREY,
    width: '100%',
    borderRadius: 5,
    height: 115,
    paddingHorizontal: 11,
    paddingVertical: 12,
  },
  text1: {
    fontSize: 18,
    lineHeight: 27,
    color: ICON_COLOR,
    fontFamily: outfit_semibold,
  },
  text2: {
    fontSize: 15,
    lineHeight: 21,
    color: ICON_COLOR,
    fontFamily: outfit_light,
  },
  text3: {
    fontSize: 16,
    lineHeight: 24,
    color: ICON_COLOR,
    fontFamily: outfit_medium,
  },
});
