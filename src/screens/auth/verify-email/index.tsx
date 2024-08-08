import { Text, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
// import Toast from "react-native-root-toast";
// import {ERROR_300, PRIMARY_COLOR} from '@/constants/color';
import ScreenView from "../../../layouts/ScreenView";
import { VerifyScreenProps } from "../../../navigation/types";
import AuthHeader from "../../../components/ui/AuthHeader";
import PrimaryButton from "../../../components/PrimaryButton";
import Title from "../../../components/ui/Title";
import useAuthContext from "../../../hooks/useAuth";
// import { CustomToaster } from "../../../utils/common";
import { resetPassword } from "../../../services/auth_services";
import { ERROR_300, PRIMARY_COLOR } from "../../../constants/color";
// import Icon from 'react-native-vector-icons/Ionicons';
// import {TEXT_GREY2} from '../../../constants/color';
// import { CustomToaster } from "@/utils/common";

const VerifyEmailScreen = ({ navigation, route }: VerifyScreenProps) => {
  const { email } = route?.params;

  return (
    <ScreenView style={styles.container}>
      <View style={styles.viewContainer}>
        <View style={styles.view1}>
          <AuthHeader
            headerStyle={{ marginBottom: 40 }}
            displayStyle={{ display: "none" }}
          />
          <View>
            <Title style={{ fontSize: 36 }}>Check your email</Title>
            <Text style={styles.headerStyleText}>
              We’ve sent password reset link to
            </Text>
            <Text style={styles.currentUser}>{email}</Text>
          </View>
          <View style={styles.formContainer}>
            <PrimaryButton
              style={{ marginTop: 16 }}
              // onPress={handleLoginForm}
              onPress={() =>
                navigation.navigate("new-password-screen", { email })
              }
              disabled={false}
            >
              Open email app
            </PrimaryButton>
          </View>
        </View>
      </View>
    </ScreenView>
  );
};

export default VerifyEmailScreen;
