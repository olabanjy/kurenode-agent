import { AuthStackParamList } from "../navigation/types";
import React, { useEffect, useState } from "react";
// import BeneficiariesScreen from '../screens/auth/beneficiaries';
import LoginScreen from "../screens/auth/login";
// import MedicalProfileScreen from '@/screens/auth/medicalProfile';
// import OnBoardingScreen from '@/screens/auth/onboard';
// import PersonalInformationOneScreen from '@/screens/auth/personalInfo';
// import PersonalInformationTwoScreen from '@/screens/auth/personalInfo2';
// import SuccessfullScreen from '@/screens/auth/success';
import { createStackNavigator } from "@react-navigation/stack";
import SignupScreen from "../screens/auth/signup";
import ForgotPasswordScreen from "../screens/auth/forgot-pass";
import VerifyEmailScreen from "../screens/auth/verify-email";
import NewPasswordScreen from "../screens/auth/set-password";
import SuccessScreen from "../screens/auth/success";
import useAuthContext from "../hooks/useAuth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
  const [initialRoute, setInitialRoute] = useState<
    keyof AuthStackParamList | undefined
  >(undefined);
  const { updateUserInfo } = useAuthContext();
  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("$token_bearer");
      const userInfoString = await AsyncStorage.getItem("userInfo");
      const hasSeenOnboard = await AsyncStorage.getItem("hasSeenOnboard");

      if (storedToken && userInfoString) {
        const userInfo = JSON.parse(userInfoString);
        updateUserInfo(userInfo);
        setInitialRoute("login-screen");
      } else if (hasSeenOnboard) {
        setInitialRoute("login-screen");
      } else {
        setInitialRoute("onboard-screen");
      }
    }

    fetchToken();
  }, []);
  // console.log(initialRoute);

  if (!initialRoute) {
    return null; // or return a loading component
  }

  return (
    <Stack.Navigator
      initialRouteName={initialRoute}
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Stack.Screen name="onboard-screen" component={OnBoardingScreen} /> */}
      <Stack.Screen name="signup-screen" component={SignupScreen} />
      <Stack.Screen name="login-screen" component={LoginScreen} />
      <Stack.Screen name="forgot-screen" component={ForgotPasswordScreen} />
      <Stack.Screen name="verify-screen" component={VerifyEmailScreen} />
      <Stack.Screen name="new-password-screen" component={NewPasswordScreen} />
      {/* <Stack.Screen
        name="personal-one-screen"
        component={PersonalInformationOneScreen}
      />
      <Stack.Screen
        name="personal-two-screen"
        component={PersonalInformationTwoScreen}
      />
      <Stack.Screen name="medical-screen" component={MedicalProfileScreen} />
      <Stack.Screen name="benefit-screen" component={BeneficiariesScreen} /> */}
      <Stack.Screen name="success-screen" component={SuccessScreen} />
    </Stack.Navigator>
  );
};
