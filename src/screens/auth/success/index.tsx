import { Image, Text, View } from "react-native";
import React from "react";
import { styles } from "./style";
// import Toast from "react-native-root-toast";
// import {ERROR_300, PRIMARY_COLOR} from '@/constants/color';
import ScreenView from "../../../layouts/ScreenView";
import { SuccessScreenProps } from "../../../navigation/types";
import AuthHeader from "../../../components/ui/AuthHeader";
import PrimaryButton from "../../../components/PrimaryButton";
import Title from "../../../components/ui/Title";
// import Icon from 'react-native-vector-icons/Ionicons';
// import {TEXT_GREY2} from '../../../constants/color';
// import { CustomToaster } from "@/utils/common";

const SuccessScreen = ({ navigation }: SuccessScreenProps) => {
  // const [isLoading, setIsLoading] = useState(false);
  // const {updateUserInfo, updateUserToken} = useAuthContext();

  // const payload = {
  //   email: enteredEmail.toLocaleLowerCase().trim(),
  //   password: enteredPassword.trim(),
  // };

  // const handleLoginForm = async () => {
  //   setIsLoading(true);
  //   try {
  //     const response = await loginService(payload);
  //     console.log(response);
  //     updateUserInfo(response?.user);
  //     updateUserToken(response?.access);
  //     CustomToaster('Logged in Successfully', PRIMARY_COLOR, 800);
  //     setTimeout(() => {
  //       navigation.replace('app-stack');
  //     }, 1000);
  //   } catch (error: any) {
  //     console.log(error);
  //     CustomToaster(error?.response?.data?.detail, ERROR_300, 1500);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <ScreenView style={styles.container}>
      <View style={styles.viewContainer}>
        <View style={styles.view1}>
          <AuthHeader
            headerStyle={{ marginBottom: 40 }}
            displayStyle={{ display: "none" }}
          />
          <Image
            source={require("../../../../assets/images/success.png")}
            width={170}
            height={170}
            style={{
              width: 170,
              height: 170,
              alignSelf: "center",
              marginBottom: 24,
            }}
          />
          <View>
            <Title style={{ fontSize: 36 }}>Password reset!</Title>
            <Text style={styles.headerStyleText}>
              Your password has been successfully reset. Click continue below to
              login
            </Text>
          </View>
          <View style={styles.formContainer}>
            <PrimaryButton
              style={{ marginTop: 16 }}
              // onPress={handleLoginForm}
              onPress={() => navigation.replace("app-stack")}
              disabled={false}
            >
              Continue
            </PrimaryButton>
          </View>
        </View>
      </View>
    </ScreenView>
  );
};

export default SuccessScreen;
