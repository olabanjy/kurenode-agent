import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Title from "./Title";
import CustomDropDown from "../CustomDropDown";
import AddButton from "../AddButton";
import FormSectiom from "../FormSectiom";
import { DropDownProps, MartialStatusList } from "../../data/dropdownData";

type Props = {
  setChildForms: React.Dispatch<any>;
  setSpouseForms: React.Dispatch<any>;
  childForms: any;
  spouseForms: React.Dispatch<any>;
  enteredStatus: string;
  setEnteredStatus: React.Dispatch<React.SetStateAction<string>>;
};

const MaritalStatus = (props: Props) => {
  const {
    childForms,
    setChildForms,
    setSpouseForms,
    spouseForms,
    enteredStatus,
    setEnteredStatus,
  } = props;

  const addChildForm = () => {
    setChildForms([
      ...childForms,
      {
        id: Date.now(),
        full_name: "",
        date_of_birth: "",
        relationship: "Child",
      },
    ]);
  };

  // const addSpouseForm = () => {
  //   setSpouseForms([
  //     ...spouseForms,
  //     {
  //       id: Date.now(),
  //       full_name: "",
  //       date_of_birth: "",
  //       relationship: "Spouse",
  //     },
  //   ]);
  // };

  const updateChildForm = (id: number, field: string, value: string) => {
    setChildForms(
      childForms.map((form: any) =>
        form.id === id ? { ...form, [field]: value } : form
      )
    );
  };

  // const updateSpouseForm = (id: number, field: string, value: string) => {
  //   setSpouseForms(
  //     spouseForms.map((form: any) =>
  //       form.id === id ? { ...form, [field]: value } : form
  //     )
  //   );
  // };

  const removeChildForm = (id: number) => {
    setChildForms(childForms.filter((form: any) => form.id !== id));
  };

  // const removeSpouseForm = (id: number) => {
  //   setSpouseForms(spouseForms.filter((form: any) => form.id !== id));
  //     setRelation([]);
  // };
  const handleChange = (item: DropDownProps) => {
    // Handle change logic
    console.log("Selected item:", item);
    setEnteredStatus(item.value);
  };
  useEffect(() => {
    if (childForms?.length > 0 || spouseForms?.length > 0) {
      // setRelation([...(spouseForms ?? []), ...(childForms ?? [])]);
    }
  }, [childForms, spouseForms]);
  return (
    <View style={{ marginTop: 32 }}>
      <Title style={{ textAlign: "left" }}>Marital Status</Title>
      <View style={{ flexDirection: "row", marginTop: 16 }}>
        <View style={{ flex: 0.32 }}>
          <CustomDropDown
            items={MartialStatusList}
            placeholder="Martial Status"
            value={enteredStatus}
            onChange={handleChange}
          />
        </View>
      </View>
      <View style={{ flex: 0.5, gap: 20 }}>
        {enteredStatus === "single" ? (
          <View style={{ gap: 20 }}>
            <AddButton text="Add Child" onPress={addChildForm} />
            <View style={{ marginBottom: 10 }} />
            {childForms.map(
              (form: any, index: React.Key | null | undefined) => (
                <FormSectiom
                  key={index}
                  form={form}
                  onUpdate={updateChildForm}
                  onRemove={removeChildForm}
                />
              )
            )}
          </View>
        ) : enteredStatus !== "married" ? null : (
          <View style={{ gap: 23 }}>
            {/* <View style={{ gap: 23 }}>
              <AddButton text="Add Spouse" onPress={addSpouseForm} />
              {spouseForms.map(
                (form: any, index: React.Key | null | undefined) => (
                  <FormSectiom
                    key={index}
                    form={form}
                    onUpdate={updateSpouseForm}
                    onRemove={removeSpouseForm}
                  />
                )
              )}
            </View> */}
            <View style={{ gap: 23 }}>
              <AddButton text="Add Child" onPress={addChildForm} />
              {childForms.map(
                (form: any, index: React.Key | null | undefined) => (
                  <FormSectiom
                    key={index}
                    form={form}
                    onUpdate={updateChildForm}
                    onRemove={removeChildForm}
                  />
                )
              )}
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default MaritalStatus;
