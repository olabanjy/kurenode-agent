import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthStack } from "./AuthStack";
import { RootStackParamList } from "../navigation/types";
import { AppStack } from "./AppStack";
import { useEffect, useState } from "react";
import { getToken } from "../utils/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useAuthContext from "../hooks/useAuth";
// import {AppStack} from './AppStack';
// import {useEffect, useState} from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import useAuthContext from '@/hooks/useAuth';

const Stack = createStackNavigator<RootStackParamList>();
export const RootRoute = () => {
  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const [initialRoute, setInitialRoute] = useState<
    keyof RootStackParamList | undefined
  >(undefined);
  const { updateUserInfo, updateUserToken } = useAuthContext();
  useEffect(() => {
    async function fetchToken() {
      const storedToken = await getToken();
      const userInfoString = await AsyncStorage.getItem("userInfo");
      const hasSeenOnboard = await AsyncStorage.getItem("hasSeenOnboard");
      console.log(storedToken);
      if (storedToken && userInfoString) {
        const userInfo = JSON.parse(userInfoString);
        updateUserInfo(userInfo);
        updateUserToken(storedToken);
        setInitialRoute("app-stack");
      } else if (hasSeenOnboard) {
        setInitialRoute("auth-stack");
      } else {
        setInitialRoute("auth-stack");
      }

      setIsTryingLogin(false);
    }

    fetchToken();
  }, []);

  if (isTryingLogin || !initialRoute) {
    return null; // or return a loading component
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="auth-stack" component={AuthStack} />
        <Stack.Screen name="app-stack" component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
