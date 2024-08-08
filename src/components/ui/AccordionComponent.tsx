import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {CheckBox} from '@rneui/base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {outfit, outfit_light, outfit_semibold} from '../../constants/font';
import {
  BLACK2,
  CHECK_GREY,
  GREY100,
  PRIMARY_GREEN50,
  PRIMARY_GREEN800,
  TEXT_GREY2,
} from '../../constants/color';

type Props = {
  id: number;
  title: string;
  content: string;
  sub: string;
  duration: string;
};

const AccordionComponent = (props: Props) => {
  const {id, title, content, sub, duration} = props;
  const [currentIndex, setCurrentIndex] = useState<number | null>(0);
  const [checkedIndex, setCheckedIndex] = useState<number | null>(0);
  const handleOpenAndClose = (index: number) => {
    setCurrentIndex(index);
    if (index === currentIndex) {
      setCurrentIndex(null);
    }
  };
  // const handleCheckBox = (index: number) => {
  //   setCheckedIndex(index);
  //   if (index === checkedIndex) {
  //     setCheckedIndex(null);
  //   }
  // };
  return (
    <View
      style={{
        maxHeight: currentIndex === id ? 170 : 62,
        overflow: 'hidden',
      }}>
      <View style={styles.accordionContainer}>
        <View style={{flexDirection: 'row', gap: 8, alignItems: 'center'}}>
          <CheckBox
            onPress={() => setCheckedIndex(id)}
            checked={checkedIndex === id}
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            containerStyle={{padding: 0}}
          />
          <Text
            style={{
              lineHeight: 27,
              fontFamily: outfit,
              fontSize: 18,
              color: CHECK_GREY,
            }}>
            {title}
          </Text>
        </View>
        <TouchableOpacity onPress={() => handleOpenAndClose(id)}>
          <Ionicons
            name={
              currentIndex === id
                ? 'chevron-up-outline'
                : 'chevron-down-outline'
            }
            size={20}
            color={TEXT_GREY2}
          />
        </TouchableOpacity>
      </View>
      <View style={{gap: 16, paddingLeft: 32, marginTop: 6}}>
        <Text
          style={{
            fontSize: 14,
            fontFamily: outfit_light,
            lineHeight: 21,
            color: BLACK2,
          }}>
          {content}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}>
          <View
            style={{
              width: 152,
              height: 24,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: PRIMARY_GREEN50,
            }}>
            <Text
              style={{
                color: PRIMARY_GREEN800,
                fontSize: 12,
                lineHeight: 18,
                fontFamily: outfit,
              }}>
              {sub}
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: TEXT_GREY2,
                fontSize: 12,
                fontFamily: outfit,
                lineHeight: 18,
                textAlign: 'right',
              }}>
              Usage:
            </Text>
            <Text
              style={{
                color: BLACK2,
                fontSize: 12,
                fontFamily: outfit_semibold,
                lineHeight: 18,
              }}>
              {duration}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AccordionComponent;

const styles = StyleSheet.create({
  accordionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: GREY100,
    paddingBottom: 12,
    paddingTop: 5,
  },
});
