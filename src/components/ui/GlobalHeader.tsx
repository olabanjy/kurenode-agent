import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {useNavigation} from '@react-navigation/native';
import {BORDER_GREY, ICON_COLOR} from '../../constants/color';
type Props = {
  backButton?: boolean;
  homeButton?: boolean;
  filter?: boolean;
};
const GlobalHeader = (props: Props) => {
  const {backButton, filter, homeButton} = props;
  const naviagtion = useNavigation();
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      {backButton && (
        <TouchableOpacity onPress={() => naviagtion.goBack()}>
          <Ionicons name="chevron-back-outline" size={15} color={ICON_COLOR} />
        </TouchableOpacity>
      )}
      {!backButton && (
        <Image
          source={require('../../../assets/images/logo.png')}
          width={136}
          height={33}
          resizeMode="contain"
        />
      )}

      <View style={{flexDirection: 'row', gap: 16}}>
        <TouchableOpacity style={styles.buttonIcon}>
          <AntDesign name="search1" size={15} color={ICON_COLOR} />
        </TouchableOpacity>
        {homeButton && (
          <>
            <TouchableOpacity style={styles.buttonIcon}>
              <Ionicons
                name="notifications-outline"
                size={15}
                color={ICON_COLOR}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonIcon}>
              <FontAwesome5 name="user" size={15} color={ICON_COLOR} />
            </TouchableOpacity>
          </>
        )}
        {filter && (
          <TouchableOpacity style={styles.buttonIcon}>
            <AntDesign name="filter" size={15} color={ICON_COLOR} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default GlobalHeader;

const styles = StyleSheet.create({
  buttonIcon: {
    width: 29,
    height: 29,
    padding: 6,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: BORDER_GREY,
  },
});
