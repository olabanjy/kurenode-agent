import { Image, ScrollView, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./style";
import ScreenView from "../../../layouts/ScreenView";
import { CreateEncountersScreenProps } from "../../../navigation/types";
import CustomInput from "../../../components/CustomInput";
import { TouchableOpacity } from "react-native";
import { outfit } from "../../../constants/font";
import TopNavContainer from "../../../components/TopNavContainer";
import HeaderInfo from "../../../components/ui/HeaderInfo";
import HomeCard from "../../../components/HomeCard";
import { homeCardList } from "../../../data/cardlist";
import PrimaryButton from "../../../components/PrimaryButton";
import FilterContainer from "../../../components/FilterContainer";
import Title from "../../../components/ui/Title";
import CustomDropDown from "../../../components/CustomDropDown";
import { Divider } from "react-native-paper";
import CustomDatePicker from "../../../components/CustomDatePicker";
import SetDateTimeComponent from "../../../components/SetDateTimeComponent";
import FlatButton from "../../../components/FlatButton";
import { useNavigationState } from "@react-navigation/native";
import { CheckBox } from "@rneui/themed";
import { DropDownProps } from "../../../data/dropdownData";
import { createSingleEncounter } from "../../../services/encounter_services";
import useAuthContext from "../../../hooks/useAuth";
import { PRIMARY_COLOR } from "../../../constants/color";
// import { CustomToaster } from "../../../utils/common";
import { getAllPatients } from "../../../services/patient_services";
import { Alert } from "react-native";

const CreateEncountersScreen = ({
  navigation,
}: CreateEncountersScreenProps) => {
  const state = useNavigationState((state) => state);
  const [enteredPatient, setEnteredPatient] = useState<any>({});
  const { userInfo, userToken } = useAuthContext();
  const currentScreenName = state.routes[state.index]?.name;
  const [fetchedPatients, setFetchedPatient] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isTreatement, setIsTreatement] = useState<string | null>(null);
  const [isDrug, setIsDrug] = useState<string | null>(null);
  const [isLab, setIsLab] = useState<string | null>(null);
  const [isAdmission, setIsAdmission] = useState(false);
  // console.log(currentScreenName);  const handleAppointmentTypeChange = (item: DropDownProps) => {
  //   setAppointmentType(item.value);
  // };
  // const handlePatientChange = (item: DropDownProps) => {
  //   setEnteredPatient(item);
  // };
  const payload = {
    diagnosis: isTreatement,
    prescription: isDrug,
    admitted: isAdmission,
    note: "string",
    lab_work: isLab,
    patient: enteredPatient?.value,
    institution: enteredPatient?.health_profile?.institution,
  };
  const handlePatientChange = (item: DropDownProps) => {
    setEnteredPatient(item);
  };
  console.log(enteredPatient);

  const handleCreateAppointment = async () => {
    setIsLoading(true);
    try {
      const response = await createSingleEncounter(userToken, payload);
      console.log(response);
      Alert.alert("Success", "Encounter created successfully", [
        {
          text: "OK",
          style: "default",
        },
      ]);
      // CustomToaster("Encounter created successfully", PRIMARY_COLOR, 800);
      if (response) {
        setTimeout(() => {
          navigation.goBack();
        }, 1000);
      }
    } catch (error: any) {
      console.log(error?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    const fetchAllPatients = async () => {
      try {
        const response = await getAllPatients(userToken);
        console.log(response);
        const listOfPatients = response.map((patient: any) => ({
          label: `${patient?.first_name} ${patient?.last_name}`,
          value: patient?.id,
          location: `${patient?.address} ${patient?.state}`,
          ...patient,
        }));
        console.log(listOfPatients, "fixed users");
        setFetchedPatient(listOfPatients);
      } catch (error: any) {
        console.log(error.response);
      }
    };
    fetchAllPatients();
  }, [userToken]);
  return (
    <ScreenView style={styles.container}>
      <View style={styles.viewContainer}>
        <TopNavContainer back title="Create Encounters" />
        <ScrollView style={styles.view1}>
          <View style={{ gap: 16, marginBottom: 16 }}>
            <Title style={{ textAlign: "left" }}>Patient Detail</Title>
            <View style={{ flex: 1 }}>
              <CustomDropDown
                items={fetchedPatients}
                onChange={handlePatientChange}
                value={enteredPatient}
                placeholder="Name of patient"
                style={{ flex: 1 }}
              />
            </View>
            <Divider />
          </View>
          <View style={{ gap: 12, marginBottom: 16 }}>
            <Title style={{ textAlign: "left" }}>Diagnosis / Treatment</Title>
            <View
              style={{ flexDirection: "row", gap: 16, alignItems: "center" }}
            >
              <Text
                style={{ color: "#717171", fontSize: 16, fontFamily: outfit }}
              >
                Was there a diagnosis or treatment?
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <CheckBox
                  checked={isTreatement === "yes"}
                  onPress={() => setIsTreatement("yes")}
                  iconType="material-community"
                  checkedIcon="radiobox-marked"
                  uncheckedIcon="radiobox-blank"
                  containerStyle={{ padding: 0, margin: 0 }}
                  title={"Yes"}
                />
                <CheckBox
                  checked={isTreatement === "no"}
                  onPress={() => setIsTreatement("no")}
                  iconType="material-community"
                  checkedIcon="radiobox-marked"
                  uncheckedIcon="radiobox-blank"
                  containerStyle={{ padding: 0, margin: 0 }}
                  title={"No"}
                />
              </View>
            </View>
            <Divider />
          </View>
          <View style={{ gap: 12, marginBottom: 16 }}>
            <Title style={{ textAlign: "left" }}>Drug Prescription</Title>
            <View
              style={{ flexDirection: "row", gap: 16, alignItems: "center" }}
            >
              <Text
                style={{ color: "#717171", fontSize: 16, fontFamily: outfit }}
              >
                Was there a drug prescription?
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <CheckBox
                  checked={isDrug === "Yess"}
                  onPress={() => setIsDrug("Yess")}
                  iconType="material-community"
                  checkedIcon="radiobox-marked"
                  uncheckedIcon="radiobox-blank"
                  containerStyle={{ padding: 0, margin: 0 }}
                  title={"Yes"}
                />
                <CheckBox
                  checked={isDrug === "no"}
                  onPress={() => setIsDrug("no")}
                  iconType="material-community"
                  checkedIcon="radiobox-marked"
                  uncheckedIcon="radiobox-blank"
                  containerStyle={{ padding: 0, margin: 0 }}
                  title={"No"}
                />
              </View>
            </View>
            <Divider />
          </View>
          <View style={{ gap: 12, marginBottom: 16 }}>
            <Title style={{ textAlign: "left" }}>Lab Work</Title>
            <View
              style={{ flexDirection: "row", gap: 16, alignItems: "center" }}
            >
              <Text
                style={{ color: "#717171", fontSize: 16, fontFamily: outfit }}
              >
                Was there a lab work done?
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <CheckBox
                  checked={isLab === "yes"}
                  onPress={() => setIsLab("yes")}
                  iconType="material-community"
                  checkedIcon="radiobox-marked"
                  uncheckedIcon="radiobox-blank"
                  containerStyle={{ padding: 0, margin: 0 }}
                  title={"Yes"}
                />
                <CheckBox
                  checked={isLab === "no"}
                  onPress={() => setIsLab("no")}
                  iconType="material-community"
                  checkedIcon="radiobox-marked"
                  uncheckedIcon="radiobox-blank"
                  containerStyle={{ padding: 0, margin: 0 }}
                  title={"No"}
                />
              </View>
            </View>
            <Divider />
          </View>
          <View style={{ gap: 12, marginBottom: 16 }}>
            <Title style={{ textAlign: "left" }}>Patient Admission</Title>
            <View
              style={{ flexDirection: "row", gap: 16, alignItems: "center" }}
            >
              <Text
                style={{ color: "#717171", fontSize: 16, fontFamily: outfit }}
              >
                Was the patient admitted?
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <CheckBox
                  checked={isAdmission === true}
                  onPress={() => setIsAdmission(true)}
                  iconType="material-community"
                  checkedIcon="radiobox-marked"
                  uncheckedIcon="radiobox-blank"
                  containerStyle={{ padding: 0, margin: 0 }}
                  title={"Yes"}
                />
                <CheckBox
                  checked={isAdmission === false}
                  onPress={() => setIsAdmission(false)}
                  iconType="material-community"
                  checkedIcon="radiobox-marked"
                  uncheckedIcon="radiobox-blank"
                  containerStyle={{ padding: 0, margin: 0 }}
                  title={"No"}
                />
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              gap: 16,
              width: 374,
              marginTop: 32,
              alignSelf: "flex-end",
            }}
          >
            <FlatButton
              style={{ flex: 1, width: "auto" }}
              onPress={() => navigation.goBack()}
            >
              Back
            </FlatButton>

            <PrimaryButton
              onPress={handleCreateAppointment}
              // onPress={() => navigation.navigate("manage-appoinment-screen")}
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

export default CreateEncountersScreen;
