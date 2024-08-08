import { View } from "react-native";
import React from "react";
import { Modal, Portal, Title } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import PrimaryButton from "../PrimaryButton";
import CustomInput from "../CustomInput";
import { AntDesign } from "@expo/vector-icons";
import { LABEL_GREY, WHITE } from "../../constants/color";
import { outfit } from "../../constants/font";

type Props = {
  selectedModalType: "HMO" | "HEALTH" | null;
  setSelectedModalType: React.Dispatch<
    React.SetStateAction<"HMO" | "HEALTH" | null>
  >;
  enteredModalValue: string;
  setEnteredModalValue: React.Dispatch<React.SetStateAction<string>>;
};

const MedicailModal = (props: Props) => {
  const {
    selectedModalType,
    setSelectedModalType,
    setEnteredModalValue,
    enteredModalValue,
  } = props;
  return (
    <Portal>
      <Modal
        visible={!!selectedModalType}
        onDismiss={() => setSelectedModalType(null)}
        contentContainerStyle={{
          width: "90%",
          alignSelf: "center",
          backgroundColor: WHITE,
          height: 236,
          justifyContent: "flex-start",
          padding: 16,
          borderRadius: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => setSelectedModalType(null)}
          style={{ alignSelf: "flex-end" }}
        >
          <AntDesign name="close" size={24} color="#717171" />
        </TouchableOpacity>
        <View style={{ gap: 16 }}>
          <Title
            style={{
              fontSize: 20,
              lineHeight: 30,
              textAlign: "left",
              fontFamily: outfit,
              color: LABEL_GREY,
            }}
          >
            {selectedModalType === "HMO" ? "HMO Identification" : "Health Plan"}
          </Title>
          <CustomInput
            placeholder={
              selectedModalType === "HMO"
                ? "Enter HMO ID"
                : "Enter Health Plan ID"
            }
            value={enteredModalValue}
            onChange={(text) => setEnteredModalValue(text)}
            password={false}
          />
          <PrimaryButton
            onPress={() => setSelectedModalType(null)}
            style={{ width: 179, alignSelf: "flex-end" }}
            disabled={false}
          >
            Continue
          </PrimaryButton>
        </View>
      </Modal>
    </Portal>
  );
};

export default MedicailModal;
