import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import ScreenView from "../../../layouts/ScreenView";
import { AccountScreenProps } from "../../../navigation/types";
import TopNavContainer from "../../../components/TopNavContainer";
import PrimaryButton from "../../../components/PrimaryButton";
import Title from "../../../components/ui/Title";
import { Divider, PaperProvider, TextInput } from "react-native-paper";
import FlatButton from "../../../components/FlatButton";
import AddButton from "../../../components/AddButton";
import { outfit } from "../../../constants/font";
import HeaderInfo from "../../../components/ui/HeaderInfo";
import CustomInput from "../../../components/CustomInput";
import CustomDropDown from "../../../components/CustomDropDown";
import { editUserProfile } from "../../../services/profile_service";
// import { CustomToaster } from "../../../utils/common";
import { ERROR_300, PRIMARY_COLOR } from "../../../constants/color";
import useAuthContext from "../../../hooks/useAuth";
import { Country, State, City } from "country-state-city";
import { DropDownProps } from "../../../data/dropdownData";
import { Alert } from "react-native";

const AccountScreen = ({ navigation }: AccountScreenProps) => {
  const { userInfo, userToken, updateUserInfo } = useAuthContext();
  const [enteredState, setEnteredState] = useState<Record<string, any>>({});
  const [enteredLGA, setEnteredLGA] = useState("");

  const [firstName, setFirstName] = useState(
    userInfo?.user_profile?.first_name || ""
  );
  const [lastName, setLastName] = useState(
    userInfo?.user_profile?.last_name || ""
  );
  const [email, setEmail] = useState(userInfo?.email || "");
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(userInfo?.phone || "");
  const disabled =
    firstName === userInfo?.user_profile?.first_name ||
    lastName === userInfo?.user_profile?.last_name;

  console.log(userInfo);

  const payload = {
    first_name: firstName,
    last_name: lastName,
    state: enteredState?.value,
    city: enteredLGA,
    lga: enteredLGA,
  };
  const handleLGAChange = (item: DropDownProps) => {
    setEnteredLGA(item.value);
  };
  const handleStateChange = (item: DropDownProps) => {
    setEnteredState(item);
  };
  // console.log(userInfo?.user_profile?.id);
  const handleEditUserProfile = async () => {
    setLoading(true);
    try {
      const response = await editUserProfile(
        userToken,
        payload,
        userInfo?.user_profile?.id
      );
      const newUpdateUserInfo = {
        ...userInfo,
        user_profile: {
          ...userInfo.user_profile,
          first_name: firstName,
          last_name: lastName,
        },
      };

      updateUserInfo(newUpdateUserInfo);

      Alert.alert("Success", "Updated Profile Successfully", [
        {
          text: "OK",
          style: "default",
        },
      ]);

      // setTimeout(() => {
      //   navigation.goBack();
      // }, 1000);
    } catch (error: any) {
      Alert.alert("Error", "An Error Occurred", [
        {
          text: "OK",
          style: "default",
        },
      ]);
      // CustomToaster("", ERROR_300, 1400);
      console.log(error?.response?.data);
    } finally {
      setLoading(false);
    }
  };
  const handleState = () => {
    const states = State.getStatesOfCountry("NG");

    // Transform the states to have label and value keys
    const transformedStates = states.map((state) => ({
      label: state.name,
      value: state.name,
      countryCode: state.isoCode,
    }));

    return transformedStates;
  };
  const handleCityData = () => {
    const cities = City.getCitiesOfState("NG", enteredState?.countryCode);

    // Transform the states to have label and value keys
    const transformedStates = cities.map((city) => ({
      label: city.name,
      value: city.name,
    }));

    return transformedStates;
  };
  const StatesData = handleState();
  const CityData = handleCityData();
  return (
    <ScreenView style={styles.container}>
      <PaperProvider>
        <View style={styles.viewContainer}>
          <TopNavContainer title="Account" />
          <ScrollView style={styles.view1}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "#E7E7E7",
                  height: 252,
                  width: "30%",
                  borderRadius: 10,
                  justifyContent: "flex-end",
                }}
              >
                <View
                  style={{ alignItems: "center", marginBottom: 30, gap: 10 }}
                >
                  <Image
                    source={require("../../../../assets/images/profile-1.jpeg")}
                    width={80}
                    height={80}
                    style={{ width: 80, height: 80, borderRadius: 80 }}
                  />
                  <Text
                    style={{
                      fontSize: 24,
                      color: "#414141",
                      fontFamily: outfit,
                      lineHeight: 36,
                    }}
                  >
                    {userInfo?.user_profile?.first_name}{" "}
                    {userInfo?.user_profile?.last_name}
                  </Text>
                </View>
                <Divider />
                <View style={{ marginVertical: 16, alignContent: "center" }}>
                  <TouchableOpacity style={{ alignSelf: "center" }}>
                    <Text
                      style={{
                        color: "#126AE3",
                        fontSize: 16,
                        fontFamily: outfit,
                        lineHeight: 24,
                      }}
                    >
                      Upload Picture
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "#E7E7E7",
                  height: 464,
                  borderRadius: 10,
                  paddingVertical: 16,
                  width: "68%",
                }}
              >
                <View
                  style={{
                    paddingHorizontal: 19,
                    marginBottom: 8,
                  }}
                >
                  <HeaderInfo
                    title="Profile"
                    subTitle="The information can be edited"
                  />
                </View>
                <Divider />
                <View style={styles.inputHeaderContainer}>
                  <View style={styles.inputContainer}>
                    <CustomInput
                      label="First Name"
                      onChange={(text) => setFirstName(text)}
                      password={false}
                      placeholder="First Name"
                      value={firstName}
                      style={{ flex: 1 }}
                    />
                    <CustomInput
                      onChange={(text) => setLastName(text)}
                      label="Last Name"
                      placeholder="Last Name"
                      value={lastName}
                      password={false}
                      style={{ flex: 1 }}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <CustomInput
                      label="Email"
                      onChange={(text) => setEmail(text)}
                      password={false}
                      placeholder="Email"
                      value={email}
                      style={{ flex: 1 }}
                    />
                    <CustomInput
                      label="Phone Number"
                      onChange={() => setPhoneNumber}
                      password={false}
                      placeholder="Phone Number"
                      value={phoneNumber}
                      editable={false}
                      style={{ flex: 1 }}
                    />
                  </View>
                  <View style={styles.inputContainer}>
                    <View style={{ flex: 1 }}>
                      <CustomDropDown
                        value={enteredState?.value}
                        items={StatesData}
                        onChange={handleStateChange}
                        placeholder="State"
                        style={{ flex: 1 }}
                      />
                    </View>
                    <View style={{ flex: 1 }}>
                      <CustomDropDown
                        placeholder="City"
                        value={enteredLGA}
                        items={CityData}
                        onChange={handleLGAChange}
                        style={{ flex: 1 }}
                      />
                    </View>
                  </View>
                </View>
                <Divider />
                <View
                  style={{
                    width: "35%",
                    marginRight: 25,
                    alignSelf: "flex-end",
                    marginVertical: 18,
                  }}
                >
                  <PrimaryButton disabled={false}>Save details</PrimaryButton>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </PaperProvider>
    </ScreenView>
  );
};

export default AccountScreen;
