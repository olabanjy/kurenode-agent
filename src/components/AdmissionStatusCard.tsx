import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {outfit, outfit_medium} from '../constants/font';
import {
  ERROR_300,
  ICON_COLOR,
  LABEL_GREY,
  LINE_COLOR,
  PRIMARY_GREEN,
  WHITE,
} from '../constants/color';
// import {
//   ERROR_300,
//   ICON_COLOR,
//   LABEL_GREY,
//   LINE_COLOR,
//   PRIMARY_GREEN,
//   WHITE,
// } from '@/constants/color';
// import {outfit, outfit_medium} from '@/constants/font';
type Props = {
  date: string;
  status: 'Admitted' | 'Not Admitted';
  sign: string;
  location: string;
};
const AdmissionStatusCard = (props: Props) => {
  const {date, location, sign, status} = props;
  return (
    <View style={styles.cardContainer}>
      <View style={{gap: 8}}>
        <Text style={styles.text1}>{date}</Text>
        <View>
          <Text style={[styles.text1, {fontFamily: outfit, color: ICON_COLOR}]}>
            Diagnosis:
          </Text>
          <Text style={styles.bigText}>{sign}</Text>
        </View>
      </View>
      <View style={{gap: 8}}>
        <View
          style={[
            styles.status,
            status === 'Not Admitted' && {backgroundColor: ERROR_300},
          ]}>
          <Text style={[styles.text1, {color: WHITE}]}>{status}</Text>
        </View>
        <Text style={[styles.bigText, {width: 105}]}>{location}</Text>
      </View>
    </View>
  );
};

export default AdmissionStatusCard;

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
    fontSize: 12,
    lineHeight: 18,
    color: LABEL_GREY,
    fontFamily: outfit_medium,
  },
  bigText: {
    fontSize: 16,
    lineHeight: 24,
    color: LABEL_GREY,
    fontFamily: outfit_medium,
  },
  status: {
    width: 91,
    height: 19,
    backgroundColor: PRIMARY_GREEN,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});
