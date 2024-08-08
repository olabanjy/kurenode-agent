import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import ScreenView from "../../../layouts/ScreenView";
import { SettingsScreenProps } from "../../../navigation/types";
import TopNavContainer from "../../../components/TopNavContainer";
import PrimaryButton from "../../../components/PrimaryButton";
import Title from "../../../components/ui/Title";
import { Divider, PaperProvider, TextInput } from "react-native-paper";
import FlatButton from "../../../components/FlatButton";
import AddButton from "../../../components/AddButton";
import { outfit } from "../../../constants/font";
import HeaderInfo from "../../../components/ui/HeaderInfo";
import CustomInput from "../../../components/CustomInput";
import CustomDropDown from "../../../components/CustomDropDown";
import { CheckBox } from "@rneui/base";
import { ERROR_300 } from "../../../constants/color";

const SettingsScreen = ({ navigation }: SettingsScreenProps) => {
  const [checkedIndex, setCheckedIndex] = useState<number | null>(0);
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleCheckBox = (index: number) => {
    setCheckedIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <ScreenView style={styles.container}>
      <PaperProvider>
        <View style={styles.viewContainer}>
          <TopNavContainer title="Settings" />
          <ScrollView
            style={[styles.view2]}
            showsVerticalScrollIndicator={false}
          >
            <View
              style={{
                gap: 16,
                borderWidth: 1,
                paddingVertical: 16,
                borderColor: "#D0D0D0",
                borderRadius: 10,
                marginBottom: 24,
              }}
            >
              <View
                style={{
                  paddingHorizontal: 16,
                  gap: 20,
                }}
              >
                <HeaderInfo
                  title="Notifications"
                  subTitle="Manage all notifications"
                />
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    width: "50%",
                    justifyContent: "space-between",
                  }}
                >
                  <View>
                    <Title style={{ textAlign: "left" }}>Email</Title>
                    <CheckBox
                      onPress={() => handleCheckBox(1)}
                      checked={checkedIndex === 1}
                      iconType="material-community"
                      checkedIcon="checkbox-marked"
                      uncheckedIcon="checkbox-blank-outline"
                      containerStyle={styles.checkContainerStyle}
                      title={"Product updates"}
                      textStyle={styles.checkTextStyle}
                    />
                    <CheckBox
                      onPress={() => handleCheckBox(2)}
                      checked={checkedIndex === 2}
                      iconType="material-community"
                      checkedIcon="checkbox-marked"
                      uncheckedIcon="checkbox-blank-outline"
                      containerStyle={styles.checkContainerStyle}
                      title={"Security updates"}
                      textStyle={styles.checkTextStyle}
                    />
                  </View>
                  <View>
                    <Title style={{ textAlign: "left" }}>Phone</Title>
                    <CheckBox
                      onPress={() => handleCheckBox(3)}
                      checked={checkedIndex === 3}
                      iconType="material-community"
                      checkedIcon="checkbox-marked"
                      uncheckedIcon="checkbox-blank-outline"
                      containerStyle={styles.checkContainerStyle}
                      title={"Email"}
                      textStyle={styles.checkTextStyle}
                    />
                    <CheckBox
                      onPress={() => handleCheckBox(4)}
                      checked={checkedIndex === 4}
                      iconType="material-community"
                      checkedIcon="checkbox-marked"
                      uncheckedIcon="checkbox-blank-outline"
                      containerStyle={styles.checkContainerStyle}
                      title={"Security updates"}
                      textStyle={styles.checkTextStyle}
                    />
                  </View>
                </View>
              </View>
              <Divider />
              <View
                style={{
                  width: "30%",
                  alignSelf: "flex-end",
                  paddingRight: 16,
                }}
              >
                <PrimaryButton disabled={false}>Save changes</PrimaryButton>
              </View>
            </View>
            <View
              style={{
                gap: 16,
                borderWidth: 1,
                padding: 16,
                borderColor: "#D0D0D0",
                borderRadius: 10,
              }}
            >
              <HeaderInfo title="Password" subTitle="Update password" />
              <CustomInput
                onChange={(text) => setOldPassword(text)}
                password={true}
                placeholder="Old Password"
                value={oldPassword}
                label="Old Password"
                style={{ width: "40%" }}
              />
              <CustomInput
                onChange={(text) => setPassword(text)}
                password={true}
                placeholder="Password"
                value={password}
                label="Password"
                style={{ width: "40%" }}
              />
              <CustomInput
                onChange={(text) => setConfirmPassword(text)}
                password={true}
                placeholder="Confirm password"
                value={confirmPassword}
                label="Confirm password"
                style={{ width: "40%" }}
              />
              <View style={{ width: "15%", alignSelf: "flex-end" }}>
                <PrimaryButton
                  // onPress={handleChangePassword}
                  disabled={false}
                >
                  Save
                </PrimaryButton>
              </View>
            </View>
            {/* <View style={{ gap: 16, marginTop: 24, marginBottom: 100 }}>
              <FlatButton
                style={{ borderColor: ERROR_300 }}
                textStyle={{ color: ERROR_300 }}
                onPress={logoutUser}
              >
                Logoout
              </FlatButton>
            </View> */}
          </ScrollView>
        </View>
      </PaperProvider>
    </ScreenView>
  );
};

export default SettingsScreen;
