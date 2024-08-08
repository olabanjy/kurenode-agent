import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomInput from "./CustomInput";
import CustomDatePicker from "./CustomDatePicker";
import { Button } from "react-native";
export type FormState = {
  id: number;
  full_name: string;
  date_of_birth: string;
};
interface FormSectionProps {
  form: FormState;
  onUpdate: (id: number, field: string, value: string) => void;
  onRemove: (id: number) => void;
}
const FormSectiom: React.FC<FormSectionProps> = ({
  form,
  onUpdate,
  onRemove,
}) => {
  const handleInputChange = (field: string, value: string) => {
    onUpdate(form.id, field, value);
  };

  return (
    <View style={{ gap: 16 }}>
      <CustomInput
        onChange={(value) => handleInputChange("full_name", value)}
        password={false}
        placeholder="Full Name"
        value={form.full_name}
      />
      <CustomDatePicker
        enteredDob={form.date_of_birth}
        setEnteredDob={(value) => handleInputChange("date_of_birth", value)}
      />
      <Button title="Remove" onPress={() => onRemove(form.id)} />
    </View>
  );
};

export default FormSectiom;
