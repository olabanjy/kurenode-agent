import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { outfit } from "../constants/font";
import PrimaryButton from "./PrimaryButton";
import {
  BLACK2,
  ERROR_300,
  ICON_COLOR,
  PRIMARY_COLOR,
  WHITE,
} from "../constants/color";
import CustomDatePicker from "./CustomDatePicker";
import moment from "moment";
import useAuthContext from "../hooks/useAuth";
import { useNavigation } from "@react-navigation/native";
import {
  Appointment,
  deleteSingleAppointment,
  partialUpdateSingleAppointment,
} from "../services/appointment_services";
import { format, parseISO } from "date-fns";
import { Image } from "react-native";
import CustomInput from "./CustomInput";
import { deleteEncounter } from "../services/encounter_services";
// import { CustomToaster } from "../utils/common";
// import { Container } from './styles';

type Props = {
  toggleRescheduleAppointment: boolean;
  setToggleRescheduleAppointment: () => void;
  appointment: any | null;
};

const DeleteModal = (props: Props) => {
  const {
    toggleRescheduleAppointment,
    setToggleRescheduleAppointment,
    appointment,
  } = props;
  const { userToken, userInfo } = useAuthContext();
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [cancellation, setCancellation] = useState("");
  const getTimeString = (date: string) => {
    return moment(date).utc().format("HH:mm:ss");
  };
  //   const startDate =
  //     appointment?.start_at && getTimeString(appointment?.start_at);
  //   const endDate = appointment?.end_at && getTimeString(appointment?.end_at);
  const payload = {
    start_at: "2024-08-06T23:58:30.929Z",
    end_at: "2024-08-06T23:58:30.929Z",
  };
  console.log(appointment?.start_at);
  const appointmentDate =
    appointment?.start_at && parseISO(appointment?.start_at);
  console.log(appointment?.start_at && getTimeString(appointment?.start_at));
  const dateText = appointmentDate && format(appointmentDate, "MMMM dd, yyyy");
  const [enteredDob, setEnteredDob] = useState(dateText || "");
  const [enteredStartDate, setEnteredStartDate] = useState(
    appointment?.start_at || ""
  );
  const [enteredEndDate, setEnteredEndDate] = useState(
    appointment?.end_at || ""
  );
  const handleReshedulingForm = async () => {
    setIsLoading(true);
    try {
      const response = await deleteEncounter(userToken, appointment?.id);
      setToggleRescheduleAppointment();
      // console.log(response);
      Alert.alert("Success", "Deleted successful", [
        {
          text: "OK",
          style: "default",
        },
      ]);
    } catch (error: any) {
      console.log(error?.response?.data);
      // CustomToaster("", ERROR_300, 1200);
      Alert.alert("Error", "Can't delete", [
        {
          text: "Cancel",
          style: "cancel",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <View
      style={{
        backgroundColor: "#0000",
        opacity: 0.5,
        position: "absolute",
      }}
    >
      <Modal
        style={{
          backgroundColor: "#F4F9FF",
          width: "50%",
          alignSelf: "center",
          height: "95%",
          borderRadius: 10,
          justifyContent: "flex-start",
        }}
        visible={toggleRescheduleAppointment}
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>Delete Encounter</Text>
          <TouchableOpacity onPress={() => setToggleRescheduleAppointment()}>
            <Ionicons name="close" size={15} color={"#717171"} />
          </TouchableOpacity>
        </View>
        <View style={{ paddingHorizontal: 21, marginTop: 21, gap: 16 }}>
          <View style={[styles.textContainer, { alignSelf: "center" }]}>
            <Image
              source={require("../../assets/images/trash.png")}
              width={37.33}
              height={48}
              style={{ width: 37, height: 48, alignSelf: "center" }}
            />
            <Text style={[styles.subText, { textAlign: "center" }]}>
              Are you sure you want to delete this encounter?
            </Text>
          </View>

          <View
            style={{
              gap: 16,
              flexDirection: "row",
              width: "100%",
            }}
          >
            <TouchableOpacity
              onPress={() => handleReshedulingForm()}
              style={[
                styles.buttom,
                {
                  backgroundColor: "#AE111C",
                },
              ]}
            >
              <Text
                style={{
                  color: WHITE,
                  fontSize: 14,
                  lineHeight: 22,
                  fontFamily: outfit,
                }}
              >
                Yes
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setToggleRescheduleAppointment()}
              style={styles.buttom}
            >
              <Text
                style={{
                  color: BLACK2,
                  fontSize: 14,
                  lineHeight: 22,
                  fontFamily: outfit,
                }}
              >
                No
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DeleteModal;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#E7E7E7",
    paddingHorizontal: 21,
    paddingTop: 22,
    paddingBottom: 9,
    backgroundColor: "#F4F9FF",
  },
  headerText: {
    fontFamily: outfit,
    lineHeight: 21,
    fontSize: 14,
    color: "#414141",
  },
  textContainer: {
    gap: 8,
  },
  title: {
    color: "#898989",
    fontSize: 14,
    lineHeight: 21,
    fontFamily: outfit,
  },
  subText: {
    color: "#414141",
    fontSize: 18,
    lineHeight: 27,
    fontFamily: outfit,
  },
  activeText: {
    fontSize: 14,
    lineHeight: 22,
    fontFamily: outfit,
  },
  buttom: {
    borderWidth: 1,
    borderColor: ICON_COLOR,
    backgroundColor: WHITE,
    height: 37,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    flex: 1,
  },
});
