import { Image, ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import ScreenView from "../../../layouts/ScreenView";
import { BeneficiariesScreenProps } from "../../../navigation/types";
import TopNavContainer from "../../../components/TopNavContainer";
import PrimaryButton from "../../../components/PrimaryButton";
import Title from "../../../components/ui/Title";
import { Divider, PaperProvider, TextInput } from "react-native-paper";
import FlatButton from "../../../components/FlatButton";
import AddButton from "../../../components/AddButton";

const BeneficiariesScreen = ({ navigation }: BeneficiariesScreenProps) => {
  return (
    <ScreenView style={styles.container}>
      <PaperProvider>
        <View style={styles.viewContainer}>
          <TopNavContainer title="Onboard Patient" />
          <ScrollView style={styles.view1}>
            <View>
              <Title style={{ textAlign: "left" }}>Beneficiaries</Title>
              <View style={{ gap: 24, marginBottom: 32, marginTop: 16 }}>
                <AddButton
                  onPress={() => console.log("ddd")}
                  text="Add beneficiaries"
                />
              </View>
            </View>
            <Divider />
            <View
              style={{
                flexDirection: "row",
                alignSelf: "flex-end",
                gap: 16,
                width: 374,
                marginTop: 48,
              }}
            >
              <FlatButton style={{ flex: 1, width: "auto" }}>Back</FlatButton>
              <PrimaryButton
                style={{ flex: 1, width: "auto" }}
                disabled={false}
              >
                Contiune
              </PrimaryButton>
            </View>
          </ScrollView>
        </View>
      </PaperProvider>
    </ScreenView>
  );
};

export default BeneficiariesScreen;
