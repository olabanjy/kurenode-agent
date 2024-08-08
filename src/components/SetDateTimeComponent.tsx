import { View, Text } from "react-native";
import React from "react";
import CustomDatePicker from "./CustomDatePicker";
import CustomDropDown from "./CustomDropDown";
import { ICON_COLOR } from "../constants/color";
import { outfit } from "../constants/font";

type Props = {
  enteredDob: string;
  setEnteredDob: React.Dispatch<React.SetStateAction<string>>;
  enteredStartDate: string;
  setEnteredStartDate: React.Dispatch<React.SetStateAction<string>>;
  enteredEndDate: string;
  setEnteredEndDate: React.Dispatch<React.SetStateAction<string>>;
};

const SetDateTimeComponent = (props: Props) => {
  const {
    enteredDob,
    enteredEndDate,
    enteredStartDate,
    setEnteredDob,
    setEnteredEndDate,
    setEnteredStartDate,
  } = props;
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        marginTop: 16,
        height: 50,
      }}
    >
      <View style={{ flexDirection: "row", gap: 16 }}>
        <CustomDatePicker
          enteredDob={enteredDob}
          setEnteredDob={(text) => setEnteredDob(text)}
          placeholder="Rime"
        />
        <CustomDatePicker
          enteredDob={enteredStartDate}
          setEnteredDob={(text) => setEnteredStartDate(text)}
          placeholder="Start Date"
        />
        {/* <View style={{ flex: 1 }}>
          <CustomDropDown
            items={[]}
            onChange={() => console.log("d")}
            value=""
            placeholder="Time"
            style={{ flex: 1 }}
          />
        </View> */}
      </View>
      <Text
        style={{
          fontSize: 16,
          lineHeight: 24,
          color: ICON_COLOR,
          fontFamily: outfit,
        }}
      >
        to:
      </Text>
      <View style={{ flexDirection: "row", gap: 16 }}>
        <CustomDatePicker
          enteredDob={enteredDob}
          setEnteredDob={(text) => setEnteredDob(text)}
          placeholder="end Date"
        />
        <View style={{ flex: 1 }}>
          <CustomDatePicker
            setEnteredDob={(text) => setEnteredEndDate(text)}
            enteredDob={enteredEndDate}
            placeholder="Time"
          />
        </View>
      </View>
    </View>
  );
};

export default SetDateTimeComponent;
