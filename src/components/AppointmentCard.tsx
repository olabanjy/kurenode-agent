import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  LABEL_GREY,
  LINE_COLOR,
  PRIMARY_COLOR,
  PRIMARY_GREEN,
  PRIMARY_GREEN600,
  WHITE,
} from '../constants/color';
import {outfit, outfit_medium} from '../constants/font';

export type Props = {
  time: string;
  date: 'Today' | string;
  name: string;
  title: string;
  meetingType: 'Virtual Meeting' | '1v1 Meeting';
};

const AppointmentCard = (props: Props) => {
  const {date, meetingType, name, time, title} = props;
  return (
    <View
      style={[
        styles.cardContainer,
        date === 'Today' && {
          backgroundColor: PRIMARY_GREEN600,
          borderWidth: 0,
        },
      ]}>
      <View>
        <Text style={[styles.bigText, date === 'Today' && {color: WHITE}]}>
          {name}
        </Text>

        <Text style={[styles.text1, date === 'Today' && {color: WHITE}]}>
          {title}
        </Text>
      </View>
      <View style={{gap: 7}}>
        <View
          style={[styles.status, date === 'Today' && {backgroundColor: WHITE}]}>
          <Text
            style={[styles.text3, date === 'Today' && {color: PRIMARY_GREEN}]}>
            {meetingType}
          </Text>
        </View>
        <View>
          <Text
            style={[
              styles.text2,
              date === 'Today' && {color: WHITE},
              {textAlign: 'right'},
            ]}>
            {date}
          </Text>
        </View>
        <View>
          <Text
            style={[
              styles.text2,
              date === 'Today' && {color: WHITE},
              {textAlign: 'right'},
            ]}>
            {time}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AppointmentCard;

const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: 12,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: LINE_COLOR,
    width: '100%',
    height: 99,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text1: {
    fontSize: 14,
    lineHeight: 21,
    color: LABEL_GREY,
    fontFamily: outfit,
  },
  text2: {
    fontSize: 12,
    lineHeight: 18,
    color: LABEL_GREY,
    fontFamily: outfit_medium,
  },
  text3: {
    fontSize: 12,
    lineHeight: 18,
    color: WHITE,
    fontFamily: outfit_medium,
  },
  bigText: {
    fontSize: 20,
    lineHeight: 30,
    color: LABEL_GREY,
    fontFamily: outfit_medium,
    width: 94,
  },
  status: {
    width: 91,
    height: 19,
    backgroundColor: PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    alignSelf: 'flex-end',
  },
});
