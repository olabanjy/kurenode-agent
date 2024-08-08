import {View} from 'react-native';
import React, {useState} from 'react';
import HeaderInfo from './ui/HeaderInfo';
import HealthPlanList from './HealthPlanList';
import {healthList} from '../data/cardlist';

const HealthPlanContainer = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const handleCurrentIndex = (index: number) => {
    setCurrentIndex(prevIndex => (prevIndex === index ? null : index));
  };
  return (
    <View style={{marginTop: 24}}>
      <HeaderInfo
        subTitle="Select benefit from list below"
        title="Health Plan"
      />
      <View style={{marginTop: 24, gap: 12}}>
        {healthList.map((list, index) => (
          <HealthPlanList
            {...list}
            key={index}
            currentIndex={currentIndex}
            handleCurrentIndex={handleCurrentIndex}
          />
        ))}
      </View>
    </View>
  );
};

export default HealthPlanContainer;
