import { Image, ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import ScreenView from "../../../layouts/ScreenView";
import { OnboardPatientsScreenProps } from "../../../navigation/types";
import CustomInput from "../../../components/CustomInput";
import { TouchableOpacity } from "react-native";
import { outfit } from "../../../constants/font";
import TopNavContainer from "../../../components/TopNavContainer";
import HeaderInfo from "../../../components/ui/HeaderInfo";
import HomeCard from "../../../components/HomeCard";
import { homeCardList } from "../../../data/cardlist";
import PrimaryButton from "../../../components/PrimaryButton";
import Title from "../../../components/ui/Title";
import { Divider, TextInput } from "react-native-paper";
import CustomDatePicker from "../../../components/CustomDatePicker";
import CustomDropDown from "../../../components/CustomDropDown";
import { TEXT_GREY2 } from "../../../constants/color";
import MaritalStatus from "../../../components/ui/MaritalStatus";
import FlatButton from "../../../components/FlatButton";
import { usePatient } from "../../../store/onboard_patient";
import { City, State } from "country-state-city";
import { DropDownProps } from "../../../data/dropdownData";

const OnboardPatientsScreen = ({ navigation }: OnboardPatientsScreenProps) => {
  const [patientData, setPatientData] = usePatient();
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
  console.log(patientData);
  const handleCityData = () => {
    const cities = City.getCitiesOfState("NG", patientData?.state?.countryCode);

    // Transform the states to have label and value keys
    const transformedStates = cities.map((city) => ({
      label: city.name,
      value: city.name,
    }));

    return transformedStates;
  };
  const StatesData = handleState();
  const CityData = handleCityData();

  const handleLgaChange = (items: DropDownProps) => {
    setPatientData({ ...patientData, lga: items.value });
  };
  const handleStateOnchange = (items: DropDownProps) => {
    setPatientData({ ...patientData, state: items });
  };
  const [childForms, setChildForms] = useState<any>([]);
  const [spouseForms, setSpouseForms] = useState<any>([]);
  const [enteredStatus, setEnteredStatus] = useState("");

  // const handle
  return (
    <ScreenView style={styles.container}>
      <View style={styles.viewContainer}>
        <TopNavContainer title="Onboard Patient" />
        <ScrollView style={styles.view1}>
          <View>
            <Title style={{ textAlign: "left" }}>Personal Information</Title>
            <View style={{ gap: 24, marginBottom: 32, marginTop: 16 }}>
              <View style={{ flexDirection: "row", gap: 16 }}>
                <CustomInput
                  value={patientData?.first_name}
                  onChange={(text) =>
                    setPatientData({ ...patientData, first_name: text })
                  }
                  password={false}
                  placeholder="First Name"
                  style={{ flex: 1 }}
                />
                <CustomInput
                  value={patientData?.last_name}
                  onChange={(text) =>
                    setPatientData({ ...patientData, last_name: text })
                  }
                  password={false}
                  placeholder="Last Name"
                  style={{ flex: 1 }}
                />
                <CustomInput
                  value={patientData?.email}
                  onChange={(text) =>
                    setPatientData({ ...patientData, email: text })
                  }
                  password={false}
                  placeholder="Email"
                  style={{ flex: 1 }}
                />
              </View>
              <View style={{ flexDirection: "row", gap: 16 }}>
                <CustomInput
                  value={patientData?.phone}
                  onChange={(text) =>
                    setPatientData({ ...patientData, phone: text })
                  }
                  password={false}
                  placeholder="Phone Number"
                  style={{ flex: 1 }}
                />
                <CustomInput
                  value={patientData?.password}
                  onChange={(text) =>
                    setPatientData({ ...patientData, password: text })
                  }
                  password={true}
                  placeholder="Password"
                  style={{ flex: 1 }}
                  icon={<TextInput.Icon icon={"eye-off"} />}
                />
                <CustomInput
                  value={patientData?.confirmPassword}
                  onChange={(text) =>
                    setPatientData({ ...patientData, confirmPassword: text })
                  }
                  password={true}
                  placeholder="Confirm Password"
                  style={{ flex: 1 }}
                  icon={<TextInput.Icon icon={"eye-off"} />}
                />
              </View>
              <View style={{ flexDirection: "row", gap: 16 }}>
                <CustomDatePicker
                  enteredDob=""
                  setEnteredDob={() => console.log("")}
                />
                <View style={{ flex: 1 }}>
                  <CustomDropDown
                    items={[
                      { label: "Male", value: "Male" },
                      { label: "Female", value: "Female" },
                    ]}
                    value=""
                    onChange={() => console.log("")}
                    placeholder="Gender"
                    style={{ flex: 1 }}
                  />
                </View>
                <CustomInput
                  value={patientData?.address}
                  onChange={(text) =>
                    setPatientData({ ...patientData, address: text })
                  }
                  password={false}
                  placeholder="Address"
                  style={{ flex: 1 }}
                />
              </View>
              <View style={{ flexDirection: "row", gap: 16 }}>
                <View style={{ flex: 1 }}>
                  <CustomDropDown
                    items={[
                      { label: "NIN", value: "NIN" },
                      { label: "BVN", value: "BVN" },
                    ]}
                    value=""
                    onChange={() => console.log("")}
                    placeholder="Proof of ID"
                  />
                </View>

                <CustomInput
                  value={patientData?.IdNumber}
                  onChange={(text) =>
                    setPatientData({ ...patientData, IdNumber: text })
                  }
                  password={false}
                  placeholder="Enter ID Number"
                  style={{ flex: 1 }}
                />
                <View style={{ flex: 1 }}>
                  <CustomDropDown
                    items={CityData}
                    value={patientData?.lga}
                    onChange={handleLgaChange}
                    placeholder="LGA of Residence"
                  />
                </View>
              </View>
              <View style={{ flexDirection: "row", gap: 16 }}>
                <View style={{ flex: 0.32 }}>
                  <CustomDropDown
                    items={StatesData}
                    value={patientData?.state?.label}
                    onChange={handleStateOnchange}
                    placeholder="State of Residence"
                  />
                </View>
              </View>
            </View>
          </View>
          <Divider />
          <MaritalStatus
            setChildForms={setChildForms}
            childForms={childForms}
            setSpouseForms={setSpouseForms}
            spouseForms={spouseForms}
            setEnteredStatus={setEnteredStatus}
            enteredStatus={enteredStatus}
          />

          <View
            style={{
              flexDirection: "row",
              alignSelf: "flex-end",
              gap: 16,
              width: 374,
            }}
          >
            <FlatButton
              style={{ flex: 1, width: "auto" }}
              onPress={() => navigation.goBack()}
            >
              Back
            </FlatButton>

            <PrimaryButton
              onPress={() =>
                navigation.navigate("onboard-two-screen", {
                  data: childForms,
                })
              }
              style={{ flex: 1, width: "auto" }}
              disabled={false}
            >
              Contiune
            </PrimaryButton>
          </View>
        </ScrollView>
      </View>
    </ScreenView>
  );
};

export default OnboardPatientsScreen;
