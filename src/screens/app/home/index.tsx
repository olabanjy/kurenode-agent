import { Image, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./style";
import ScreenView from "../../../layouts/ScreenView";
import { HomeScreenProps } from "../../../navigation/types";
import CustomInput from "../../../components/CustomInput";
import { TouchableOpacity } from "react-native";
import { outfit } from "../../../constants/font";
import TopNavContainer from "../../../components/TopNavContainer";
import HeaderInfo from "../../../components/ui/HeaderInfo";
import HomeCard from "../../../components/HomeCard";
import { homeCardList } from "../../../data/cardlist";
import useAuthContext from "../../../hooks/useAuth";

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const { userInfo } = useAuthContext();
  return (
    <ScreenView style={styles.container}>
      <View style={styles.viewContainer}>
        <TopNavContainer title="Dashboard" />
        <View style={styles.view1}>
          <HeaderInfo
            subTitle="Welcome to your dashboard. Start or review your activities here."
            title={`Hello, ${userInfo?.user_profile?.full_name}`}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
              marginTop: 24,
            }}
          >
            {homeCardList.map((list, index) => (
              <HomeCard key={index} {...list} />
            ))}
          </View>
        </View>
      </View>
    </ScreenView>
  );
};

export default HomeScreen;
