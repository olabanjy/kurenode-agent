import { Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
// import Toast from "react-native-root-toast";
// import {ERROR_300, PRIMARY_COLOR} from '@/constants/color';
import ScreenView from "../../../layouts/ScreenView";
import { ForgotPasswordScreenProps } from "../../../navigation/types";
import AuthHeader from "../../../components/ui/AuthHeader";
import CustomInput from "../../../components/CustomInput";
import PrimaryButton from "../../../components/PrimaryButton";
import Title from "../../../components/ui/Title";
import { Ionicons } from "@expo/vector-icons";
import { ERROR_300, PRIMARY_COLOR, TEXT_GREY2 } from "../../../constants/color";
import useAuthContext from "../../../hooks/useAuth";
import { CustomToaster } from "../../../utils/common";
import { forgotPassword } from "../../../services/auth_services";
// import { CustomToaster } from "@/utils/common";

const ForgotPasswordScreen = ({ navigation }: ForgotPasswordScreenProps) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordShow, setPasswordShow] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { updateUserInfo, updateUserToken } = useAuthContext();
  const disabled = enteredEmail === "";

  const handlePasswordVisible = () => {
    setPasswordShow(!passwordShow);
  };

  const payload = {
    email: enteredEmail.toLocaleLowerCase().trim(),
  };

  const handleForgotPassword = async () => {
    setIsLoading(true);
    try {
      const response = await forgotPassword(payload);
      console.log(response);
      CustomToaster(response?.details, PRIMARY_COLOR, 800);
      setTimeout(() => {
        navigation.replace("verify-screen", { email: enteredEmail });
      }, 1000);
    } catch (error: any) {
      console.log(error?.response?.data);
      CustomToaster(error?.response?.data?.email, ERROR_300, 1500);
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
            <Title style={{ fontSize: 36 }}>Forgot password?</Title>
            <Text style={styles.headerStyleText}>
              No worries, we’ll send you reset instructions.
            </Text>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <CustomInput
                value={enteredEmail}
                placeholder="Email/Phone Number"
                password={false}
                onChange={(text: string) => setEnteredEmail(text)}
              />
            </View>
            <View style={{ gap: 24 }}>
              <PrimaryButton
                style={{ marginTop: 16 }}
                onPress={handleForgotPassword}
                // onPress={() => navigation.navigate("verify-screen")}
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

export default ForgotPasswordScreen;
