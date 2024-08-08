import { Image, ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import ScreenView from "../../../layouts/ScreenView";
import { OnboardSuccessScreenProps } from "../../../navigation/types";
import TopNavContainer from "../../../components/TopNavContainer";
import HeaderInfo from "../../../components/ui/HeaderInfo";
import PrimaryButton from "../../../components/PrimaryButton";
import Title from "../../../components/ui/Title";
import { Divider, PaperProvider, TextInput } from "react-native-paper";
import { DropDownProps } from "../../../data/dropdownData";
import FlatButton from "../../../components/FlatButton";
import AddButton from "../../../components/AddButton";

const OnboardSuccessScreen = ({ navigation }: OnboardSuccessScreenProps) => {
  return (
    <ScreenView style={styles.container}>
      <PaperProvider>
        <View style={styles.viewContainer}>
          <TopNavContainer title="Onboard Patient" />
          <View style={styles.view1}>
            <View>
              <Image
                source={require("../../../../assets/images/success.png")}
                style={{
                  width: 170,
                  height: 170,
                  alignSelf: "center",
                  marginBottom: 31,
                }}
              />
              <HeaderInfo
                titleFont={36}
                style={{ gap: 16 }}
                subTitleStyle={{
                  fontSize: 20,
                  lineHeight: 30,
                  textAlign: "center",
                }}
                textAlign="center"
                title="Onboarded Successfully!"
                subTitle="Patient has been onboarded successfully"
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                gap: 16,
                width: 374,
                marginTop: 48,
              }}
            >
              <FlatButton
                style={{ flex: 1, width: "auto" }}
                onPress={() => navigation.goBack()}
              >
                Back
              </FlatButton>

              <PrimaryButton
                onPress={() => navigation.navigate("onboard-success-screen")}
                style={{ flex: 1, width: "auto" }}
                disabled={false}
              >
                Contiune
              </PrimaryButton>
            </View>
          </View>
        </View>
      </PaperProvider>
    </ScreenView>
  );
};

export default OnboardSuccessScreen;
