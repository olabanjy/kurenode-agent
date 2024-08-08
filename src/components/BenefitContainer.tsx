import {View} from 'react-native';
import React from 'react';
import HeaderInfo from './ui/HeaderInfo';
import BenefitList from './BenefitList';
import FlatButton from './FlatButton';
import PrimaryButton from './PrimaryButton';

const BenefitContainer = () => {
  return (
    <View style={{marginTop: 24, marginBottom: 70}}>
      <HeaderInfo subTitle="Select benefit from list below" title="Benefits" />
      <View style={{marginTop: 24}}>
        <BenefitList />

        <View
          style={{
            flexDirection: 'row',
            gap: 12,
            alignSelf: 'flex-end',
            marginTop: 32,
          }}>
          <FlatButton style={{width: 119}}>Cancel</FlatButton>
          <PrimaryButton disabled={false} style={{width: 119}}>
            Save
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default BenefitContainer;
