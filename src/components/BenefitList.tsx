import {View} from 'react-native';
import React from 'react';
import AccordionComponent from './ui/AccordionComponent';
import {benefitList} from '../data/tabSelection';

const BenefitList = () => {
  return (
    <View style={{gap: 16}}>
      {benefitList.map((list, index) => (
        <AccordionComponent key={index} {...list} />
      ))}
    </View>
  );
};

export default BenefitList;
