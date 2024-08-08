import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
// import Toast from "react-native-root-toast";
// import {ERROR_300, PRIMARY_COLOR} from '@/constants/color';
import ScreenView from "../../../layouts/ScreenView";
import { LoginScreenProps } from "../../../navigation/types";
import AuthHeader from "../../../components/ui/AuthHeader";
import CustomInput from "../../../components/CustomInput";
import PrimaryButton from "../../../components/PrimaryButton";
import { TextInput } from "react-native-paper";
import NavBottomButton from "../../../components/NavBottomButton";
import { loginService } from "../../../services/auth_services";
import { CustomToaster } from "../../../utils/common";
import { ERROR_300, PRIMARY_COLOR } from "../../../constants/color";
import useAuthContext from "../../../hooks/useAuth";
// import { CustomToaster } from "@/utils/common";

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordShow, setPasswordShow] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { updateUserInfo, updateUserToken } = useAuthContext();
  const disabled = enteredEmail === "" || enteredPassword === "";

  const handlePasswordVisible = () => {
    setPasswordShow(!passwordShow);
  };

  const payload = {
    email: enteredEmail.toLocaleLowerCase().trim(),
    password: enteredPassword.trim(),
  };

  const handleLoginForm = async () => {
    setIsLoading(true);
    try {
      const response = await loginService(payload);
      console.log(response);
      updateUserInfo(response?.user);
      updateUserToken(response?.access);
      setTimeout(() => {
        navigation.replace("app-stack");
      }, 1000);
      CustomToaster("Logged in Successfully", PRIMARY_COLOR, 800);
    } catch (error: any) {
      console.log(error);
      CustomToaster(error?.response?.data?.detail, ERROR_300, 1500);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScreenView style={styles.container}>
      <View style={styles.viewContainer}>
        <View style={styles.view1}>
          <AuthHeader title="Log into your account" />
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <CustomInput
                value={enteredEmail}
                placeholder="Email/Phone Number"
                password={false}
                onChange={(text: string) => setEnteredEmail(text)}
              />

              <CustomInput
                value={enteredPassword}
                placeholder="Password"
                password={passwordShow}
                icon={
                  <TextInput.Icon
                    onPress={handlePasswordVisible}
                    icon={passwordShow ? "eye-off" : "eye"}
                  />
                }
                onChange={(text: string) => setEnteredPassword(text)}
              />
            </View>
            <View style={{ gap: 24 }}>
              <PrimaryButton
                onPress={handleLoginForm}
                // onPress={() => navigation.replace("app-stack")}
                disabled={disabled || isLoading}
              >
                {isLoading ? "Loading...." : "Login"}
              </PrimaryButton>
              <TouchableOpacity
                onPress={() => navigation.navigate("forgot-screen")}
                style={styles.button}
              >
                <Text style={styles.text1}>Forgot password?</Text>
              </TouchableOpacity>
              <NavBottomButton
                onPress={() => navigation.navigate("signup-screen")}
                buttonText="Sign up"
                text="Don't have an account?"
              />
            </View>
          </View>
        </View>
      </View>
    </ScreenView>
  );
};

export default LoginScreen;
