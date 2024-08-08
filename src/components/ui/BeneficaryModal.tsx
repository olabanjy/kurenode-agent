import {TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Modal, Portal} from 'react-native-paper';

import Title from './Title';
import {CheckBox} from '@rneui/themed';
import PrimaryButton from '../PrimaryButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {CHECK_GREY, WHITE} from '../../constants/color';
import {outfit_light} from '../../constants/font';
import {HEIGHT, WIDTH} from '../../constants/size';
import {checkBoxData} from '../../data/checkboxdata';

type Props = {
  visible: boolean;
  hideModal: () => void;
};

const BeneficaryModal = (props: Props) => {
  const {visible, hideModal} = props;
  const [checked, setChecked] = useState(true);

  const toggleCheckbox = () => setChecked(!checked);

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={{
          width: '90%',
          alignSelf: 'center',
          backgroundColor: WHITE,
          height: HEIGHT / 1.7,
          justifyContent: 'flex-start',
          padding: 16,
        }}>
        <TouchableOpacity onPress={hideModal} style={{alignSelf: 'flex-end'}}>
          <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>
        <View>
          <Title style={{fontSize: 24, lineHeight: 36, textAlign: 'left'}}>
            Add Beneficiaries
          </Title>

          <View style={{marginBottom: 32}}>
            {checkBoxData.map((item, index) => (
              <CheckBox
                key={index}
                checked={checked}
                onPress={toggleCheckbox}
                iconType="material-community"
                checkedIcon="checkbox-outline"
                uncheckedIcon={'checkbox-blank-outline'}
                title={item}
                size={28}
                fontFamily={outfit_light}
                textStyle={{
                  fontSize: 20,
                  lineHeight: 30,
                  color: CHECK_GREY,
                }}
              />
            ))}
          </View>

          <PrimaryButton
            onPress={hideModal}
            style={{width: WIDTH / 3, alignSelf: 'flex-end'}}
            disabled={false}>
            Continue
          </PrimaryButton>
        </View>
      </Modal>
    </Portal>
  );
};

export default BeneficaryModal;
