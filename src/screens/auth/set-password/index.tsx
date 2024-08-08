import { Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
// import Toast from "react-native-root-toast";
// import {ERROR_300, PRIMARY_COLOR} from '@/constants/color';
import ScreenView from "../../../layouts/ScreenView";
import { NewPasswordScreenProps } from "../../../navigation/types";
import AuthHeader from "../../../components/ui/AuthHeader";
import CustomInput from "../../../components/CustomInput";
import PrimaryButton from "../../../components/PrimaryButton";
import Title from "../../../components/ui/Title";
import { TextInput } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { ERROR_300, PRIMARY_COLOR, TEXT_GREY2 } from "../../../constants/color";
import useAuthContext from "../../../hooks/useAuth";
import { resetPassword } from "../../../services/auth_services";
import { CustomToaster } from "../../../utils/common";
// import { CustomToaster } from "@/utils/common";

const NewPasswordScreen = ({ navigation, route }: NewPasswordScreenProps) => {
  const [enteredPassword, setEnteredPassword] = useState("");
  const [otpCode, setOtpCode] = useState("");

  const [enteredPasswordConfirm, setEnteredPasswordConfirm] = useState("");
  const [passwordShow, setPasswordShow] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { updateUserInfo, updateUserToken } = useAuthContext();
  const disabled = enteredPassword === "" || enteredPasswordConfirm === "";

  const handlePasswordVisible = () => {
    setPasswordShow(!passwordShow);
  };
  const { email } = route?.params;

  const payload = {
    token: otpCode,
    email,
    password1: enteredPassword.trim(),
    password2: enteredPasswordConfirm.trim(),
  };

  const handleResetPasswordForm = async () => {
    setIsLoading(true);
    try {
      const response = await resetPassword(payload);
      console.log(response);
      CustomToaster(response?.detail, PRIMARY_COLOR, 800);
      setTimeout(() => {
        navigation.navigate("success-screen");
      }, 1000);
    } catch (error: any) {
      console.log(error?.response?.data);
      CustomToaster(error?.response?.data?.message, ERROR_300, 1500);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScreenView style={styles.container}>
      <View style={styles.viewContainer}>
        <View style={styles.view1}>
          <AuthHeader
            headerStyle={{ marginBottom: 40 }}
            displayStyle={{ display: "none" }}
          />
          <View>
            <Title style={{ fontSize: 36 }}>Set new password</Title>
            <Text style={styles.headerStyleText}>
              Your new password must be different to previously used passwords.
            </Text>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <View>
                <CustomInput
                  value={enteredPassword}
                  placeholder="Enter new password"
                  password={passwordShow}
                  icon={
                    <TextInput.Icon
                      onPress={handlePasswordVisible}
                      icon={passwordShow ? "eye-off" : "eye"}
                    />
                  }
                  onChange={(text: string) => setEnteredPassword(text)}
                />
                <Text
                  style={{
                    color: "#A0A0A0",
                    fontSize: 14,
                    lineHeight: 24,
                  }}
                >
                  Must be at least 8 characters
                </Text>
              </View>
              <CustomInput
                value={enteredPasswordConfirm}
                placeholder="Confirm new password"
                password={passwordShow}
                icon={
                  <TextInput.Icon
                    onPress={handlePasswordVisible}
                    icon={passwordShow ? "eye-off" : "eye"}
                  />
                }
                onChange={(text: string) => setEnteredPasswordConfirm(text)}
              />
            </View>
            <View style={{ gap: 24 }}>
              <PrimaryButton
                style={{ marginTop: 24 }}
                onPress={handleResetPasswordForm}
                // onPress={() => navigation.replace("success-screen")}
                disabled={disabled}
              >
                Reset Password
              </PrimaryButton>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.bottomButton}
              >
                <Ionicons name="arrow-back" size={24} color={TEXT_GREY2} />
                <Text style={styles.buttonText}>Back to Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScreenView>
  );
};

export default NewPasswordScreen;
