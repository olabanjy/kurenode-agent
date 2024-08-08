import { Alert, Image, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./style";
import ScreenView from "../../../layouts/ScreenView";
import { UpdateAppointmentScreenProps } from "../../../navigation/types";
import CustomInput from "../../../components/CustomInput";
import { TouchableOpacity } from "react-native";
import { outfit } from "../../../constants/font";
import TopNavContainer from "../../../components/TopNavContainer";
import HeaderInfo from "../../../components/ui/HeaderInfo";
import HomeCard from "../../../components/HomeCard";
import { appointmentList, homeCardList } from "../../../data/cardlist";
import PrimaryButton from "../../../components/PrimaryButton";
import FilterContainer from "../../../components/FilterContainer";
import Title from "../../../components/ui/Title";
import CustomDropDown from "../../../components/CustomDropDown";
import { Divider } from "react-native-paper";
import CustomDatePicker from "../../../components/CustomDatePicker";
import SetDateTimeComponent from "../../../components/SetDateTimeComponent";
import FlatButton from "../../../components/FlatButton";
import { useNavigationState } from "@react-navigation/native";
import { DropDownProps } from "../../../data/dropdownData";
import {
  createAppointment,
  getSingleAppointment,
  partialUpdateSingleAppointment,
} from "../../../services/appointment_services";
import { PRIMARY_COLOR } from "../../../constants/color";
// import { CustomToaster } from "../../../utils/common";
import useAuthContext from "../../../hooks/useAuth";
import { getAllPatients } from "../../../services/patient_services";

const UpdateAppointmentScreen = ({
  navigation,
  route,
}: UpdateAppointmentScreenProps) => {
  const { userInfo, userToken } = useAuthContext();
  const state = useNavigationState((state) => state);
  const currentScreenName = state.routes[state.index]?.name;
  const [title, setTitle] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [description, setDescription] = useState("");
  const [appointmentType, setAppointmentType] = useState("");
  const [enteredDob, setEnteredDob] = useState("");
  const [enteredStartDate, setEnteredStartDate] = useState("");
  const [enteredEndDate, setEnteredEndDate] = useState("");
  const [enteredPatient, setEnteredPatient] = useState<any>({});
  const [fetchedPatients, setFetchedPatient] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Record<string, any>>({});

  const disabled = title === "" || description === "" || appointmentType === "";
  // enteredEndDate === "" || enteredStartDate === "" || enteredDob === "";
  const handleAppointmentTypeChange = (item: DropDownProps) => {
    setAppointmentType(item.value);
  };
  const handlePatientChange = (item: DropDownProps) => {
    setEnteredPatient(item);
  };
  const { appointmentId } = route?.params;
  console.log(appointmentId);
  const payload = {
    title,
    type: appointmentType,
    description,
    start_at: enteredStartDate,
    end_at: enteredEndDate,
    location: enteredPatient?.location,
    patient: enteredPatient?.value,
    institution: enteredPatient?.health_profile?.institution,
  };

  const handleCreateAppointment = async () => {
    setIsLoading(true);
    try {
      const response = await partialUpdateSingleAppointment(
        userToken,
        payload,
        appointmentId
      );
      console.log(response);
      // CustomToaster("Appointment Updated successfully", PRIMARY_COLOR, 800);
      Alert.alert("Success", "Appointment Updated successfully", [
        {
          text: "OK",
          style: "default",
        },
      ]);
      navigation.goBack();
    } catch (error: any) {
      console.log(error?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await getSingleAppointment(userToken, appointmentId);
        // const response = await getSingleAppointment(userToken, appointmentId);
        console.log(response);
        setData(response);
        setTitle(response?.title);
        setDescription(response?.description);
        setAppointmentType(response?.type);
        setEnteredPatient(response?.patient);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [userToken, appointmentId]);

  useEffect(() => {
    const fetchAllPatients = async () => {
      try {
        const response = await getAllPatients(userToken);
        console.log(response);
        const listOfPatients = response.map((patient: any) => ({
          label: `${patient?.first_name} ${patient?.last_name}`,
          value: patient?.id,
          location: `${patient?.address} ${patient?.state}`,
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
        <TopNavContainer back title="Update Appointments" />
        <View style={styles.view1}>
          <View style={{ gap: 24 }}>
            <Title style={{ textAlign: "left" }}>Add title</Title>
            <CustomInput
              onChange={(text) => setTitle(text)}
              value={title}
              password={false}
              placeholder="Enter title"
              style={{ flex: 1 }}
            />
            <View style={{ flexDirection: "row", gap: 16 }}>
              <View style={{ flex: 1 }}>
                <CustomDropDown
                  items={fetchedPatients}
                  onChange={handlePatientChange}
                  value={enteredPatient}
                  placeholder="Name of patient"
                  style={{ flex: 1 }}
                />
              </View>

              <CustomInput
                onChange={(text) => setDoctorName(text)}
                value={doctorName}
                password={false}
                placeholder="Name of Doctor"
                style={{ flex: 1 }}
              />
            </View>
            <View style={{ flexDirection: "row", gap: 16 }}>
              {/* <View style={{ flex: 1 }}>
                <CustomDropDown
                  items={[]}
                  onChange={() => console.log("d")}
                  value=""
                  placeholder="Department"
                  style={{ flex: 1 }}
                />
              </View> */}
              <View style={{ flex: 1 }}>
                <CustomDropDown
                  items={[
                    { label: "Virtual", value: "Virtual" },
                    { label: "Physical", value: "Physical" },
                  ]}
                  onChange={handleAppointmentTypeChange}
                  value={appointmentType}
                  placeholder="Appointment Type"
                  style={{ flex: 1 }}
                />
              </View>
            </View>
          </View>
          <Divider />
          <View>
            <Title style={{ textAlign: "left" }}>Set date & time</Title>
            <SetDateTimeComponent
              enteredDob={enteredDob}
              setEnteredDob={setEnteredDob}
              enteredEndDate={enteredEndDate}
              enteredStartDate={enteredStartDate}
              setEnteredStartDate={setEnteredStartDate}
              setEnteredEndDate={setEnteredEndDate}
            />
            <CustomInput
              value={description}
              password={false}
              placeholder="Add description"
              onChange={(text) => setDescription(text)}
              multiline
              style={{
                textAlignVertical: "top",
                height: 144,
                marginTop: 24,
              }}
            />
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
              disabled={disabled || isLoading}
            >
              Contiune
            </PrimaryButton>
          </View>
        </View>
      </View>
    </ScreenView>
  );
};

export default UpdateAppointmentScreen;
