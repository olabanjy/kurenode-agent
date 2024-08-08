import { View } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
// import Toast from "react-native-root-toast";
// import {ERROR_300, PRIMARY_COLOR} from '@/constants/color';
import ScreenView from "../../../layouts/ScreenView";
import { SignupScreenProps } from "../../../navigation/types";
import AuthHeader from "../../../components/ui/AuthHeader";
import CustomInput from "../../../components/CustomInput";
import PrimaryButton from "../../../components/PrimaryButton";
import { TextInput } from "react-native-paper";
import NavBottomButton from "../../../components/NavBottomButton";
import { registerService } from "../../../services/auth_services";
// import { CustomToaster } from "../../../utils/common";
import { ERROR_300, PRIMARY_COLOR } from "../../../constants/color";
import { Alert } from "react-native";
// import { CustomToaster } from "@/utils/common";

const SignupScreen = ({ navigation }: SignupScreenProps) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredPasswordConfirm, setEnteredPasswordConfirm] = useState("");
  const [passwordShow, setPasswordShow] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  // const {updateUserInfo, updateUserToken} = useAuthContext();
  const disabled =
    enteredEmail === "" ||
    enteredPassword === "" ||
    enteredPasswordConfirm === "";

  const handlePasswordVisible = () => {
    setPasswordShow(!passwordShow);
  };

  const payload = {
    email: enteredEmail.toLocaleLowerCase().trim(),
    password1: enteredPassword.trim(),
    password2: enteredPasswordConfirm.trim(),
    user_type: "Institution",
  };

  const handleLoginForm = async () => {
    setIsLoading(true);
    try {
      const response = await registerService(payload);
      console.log(response);
      // updateUserInfo(response?.user);
      // updateUserToken(response?.access);
      // CustomToaster("Logged in Successfully", PRIMARY_COLOR, 800);
      // setTimeout(() => {
      //   navigation.replace("app-stack");
      // }, 1000);
      Alert.alert("Success", "Logged in Successfully", [
        {
          text: "OK",
          style: "default",
        },
      ]);
    } catch (error: any) {
      console.log(error);
      Alert.alert("Error", error?.response?.data?.detail, [
        {
          text: "OK",
          style: "default",
        },
      ]);
      // CustomToaster(error?.response?.data?.detail, ERROR_300, 1500);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScreenView style={styles.container}>
      <View style={styles.viewContainer}>
        <View style={styles.view1}>
          <AuthHeader title="Create your login password" />
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
                // icon={
                //   <TextInput.Icon
                //     onPress={handlePasswordVisible}
                //     icon={passwordShow ? "eye-off" : "eye"}
                //   />
                // }
                onChange={(text: string) => setEnteredPassword(text)}
              />
              <CustomInput
                value={enteredPasswordConfirm}
                placeholder="Confirm Password"
                password={passwordShow}
                // icon={
                //   <TextInput.Icon
                //     onPress={handlePasswordVisible}
                //     icon={passwordShow ? "eye-off" : "eye"}
                //   />
                // }
                onChange={(text: string) => setEnteredPasswordConfirm(text)}
              />
            </View>
            <View style={{ gap: 24 }}>
              <PrimaryButton
                onPress={handleLoginForm}
                // onPress={() => navigation.replace("app-stack")}
                disabled={disabled}
              >
                Login
                {/* {isLoading ? 'Loading....' : 'Login'} */}
              </PrimaryButton>
              <NavBottomButton
                onPress={() => navigation.navigate("login-screen")}
                buttonText="Log in"
                text="Already have an account?"
              />
            </View>
          </View>
        </View>
      </View>
    </ScreenView>
  );
};

export default SignupScreen;
