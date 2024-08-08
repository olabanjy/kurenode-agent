import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import CustomInput from "./CustomInput";
import { TextInput } from "react-native-paper";
import {
  WHITE,
  TEXT_GREY2,
  TEXT_GREY,
  PRIMARY_COLOR3,
} from "../constants/color";
import PrimaryButton from "./PrimaryButton";
import FlatButton from "./FlatButton";

type Props = {
  enteredDob: string;
  setEnteredDob: React.Dispatch<React.SetStateAction<string>>;
};

interface CustomDatePickerProps {
  enteredDob: string;
  setEnteredDob: (dob: string) => void; // Ensure the type is correctly set to a function taking a string
  placeholder?: string;
  mode?: boolean;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  enteredDob,
  setEnteredDob,
  placeholder,
  mode,
}) => {
  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(new Date());

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };
  const onChange = ({ type }: any, selectedDate: any) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate(currentDate);

      if (Platform.OS === "android") {
        toggleDatePicker();
        setEnteredDob(currentDate.toISOString().split("T")[0]);
      }
    } else {
      toggleDatePicker();
    }
  };
  const confirmIsoDate = () => {
    // console.log(date.toISOString().split("T")[0]);
    setEnteredDob(date.toISOString().split("T")[0]);
    toggleDatePicker();
  };
  return (
    <>
      <Pressable
        onPress={toggleDatePicker}
        style={{ position: "relative", flex: 1 }}
      >
        <CustomInput
          placeholder={placeholder ? placeholder : "Date of Birth"}
          value={enteredDob}
          onChange={(text) => setEnteredDob(text)}
          password={false}
          editable={false}
          onPressIn={toggleDatePicker}
        />
        <Image
          source={require("../../assets/svg/calendar_month.png")}
          width={24}
          height={24}
          style={{ position: "absolute", right: 17, top: 18 }}
        />
      </Pressable>

      {showPicker && (
        <View style={styles.modalDate}>
          {showPicker && Platform.OS === "ios" && (
            <View style={styles.buttonContainer}>
              <FlatButton
                textStyle={{ color: WHITE }}
                style={{ paddingHorizontal: 0, paddingVertical: 0, width: 80 }}
                onPress={toggleDatePicker}
              >
                Cancel
              </FlatButton>
              <PrimaryButton
                style={{ paddingHorizontal: 0, paddingVertical: 0, width: 80 }}
                onPress={confirmIsoDate}
                disabled={false}
              >
                Confirm
              </PrimaryButton>
            </View>
          )}
          <DateTimePicker
            value={date}
            onChange={onChange}
            mode={mode ? "time" : "date"}
            display="spinner"
          />
        </View>
      )}
    </>
  );
};

export default CustomDatePicker;

const styles = StyleSheet.create({
  modalDate: {
    position: "absolute",
    bottom: 0,
    backgroundColor: PRIMARY_COLOR3,
    zIndex: 5,
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 10,
  },
});
