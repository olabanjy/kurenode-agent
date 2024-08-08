import { Alert, Image, ScrollView, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./style";
import ScreenView from "../../../layouts/ScreenView";
import { UpdateEncounterScreenProps } from "../../../navigation/types";
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
import {
  createSingleEncounter,
  getSingleEncounter,
  partialUpdateSingleEncounter,
} from "../../../services/encounter_services";
import useAuthContext from "../../../hooks/useAuth";
import { PRIMARY_COLOR } from "../../../constants/color";
// import { CustomToaster } from "../../../utils/common";
import { getAllPatients } from "../../../services/patient_services";

const UpdateEncounterScreen = ({
  navigation,
  route,
}: UpdateEncounterScreenProps) => {
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
  const [enteredTreatment, setEnteredTreatment] = useState("");
  const [enteredDrugs, setEnteredDrugs] = useState("");
  // console.log(currentScreenName);  const handleAppointmentTypeChange = (item: DropDownProps) => {
  //   setAppointmentType(item.value);
  // };
  // const handlePatientChange = (item: DropDownProps) => {
  //   setEnteredPatient(item);
  // };
  const { encounterId } = route.params;
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

  useEffect(() => {
    (async () => {
      try {
        const response = await getSingleEncounter(userToken, encounterId);
        console.log(response);
        setIsDrug(response?.prescription);
        setIsTreatement(response?.diagnosis);
        setEnteredPatient(response?.patient);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [userToken, encounterId]);

  const handleCreateAppointment = async () => {
    setIsLoading(true);
    try {
      const response = await partialUpdateSingleEncounter(
        userToken,
        encounterId,
        payload
      );
      console.log(response);
      Alert.alert("Success", "Encounter Updated successfully", [
        {
          text: "OK",
          style: "default",
        },
      ]);
      // CustomToaster("", PRIMARY_COLOR, 800);
      if (response) {
        navigation.goBack();
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
        <TopNavContainer back title="Update Encounters" />
        <ScrollView style={styles.view1}>
          <View style={{ gap: 16, marginBottom: 16 }}>
            <Title style={{ textAlign: "left" }}>Patient Detail</Title>
            <View style={{ width: 400 }}>
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
            {isTreatement?.toLocaleLowerCase() === "yes" && (
              <View style={{ width: 400 }}>
                <CustomInput
                  label="Enter Diagnosis"
                  placeholder=""
                  onChange={(text) => setEnteredTreatment(text)}
                  password={false}
                  value={enteredTreatment}
                />
              </View>
            )}
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
                  checked={isDrug?.toLocaleLowerCase() === "yes"}
                  onPress={() => setIsDrug("yes")}
                  iconType="material-community"
                  checkedIcon="radiobox-marked"
                  uncheckedIcon="radiobox-blank"
                  containerStyle={{ padding: 0, margin: 0 }}
                  title={"Yes"}
                />
                <CheckBox
                  checked={isDrug?.toLocaleLowerCase() === "no"}
                  onPress={() => setIsDrug("no")}
                  iconType="material-community"
                  checkedIcon="radiobox-marked"
                  uncheckedIcon="radiobox-blank"
                  containerStyle={{ padding: 0, margin: 0 }}
                  title={"No"}
                />
              </View>
            </View>
            {isDrug?.toLocaleLowerCase() === "yes" && (
              <View style={{ width: 400 }}>
                <CustomInput
                  label=""
                  placeholder=""
                  onChange={(text) => setEnteredDrugs(text)}
                  password={false}
                  value={enteredDrugs}
                />
              </View>
            )}
            <Divider />
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

export default UpdateEncounterScreen;
