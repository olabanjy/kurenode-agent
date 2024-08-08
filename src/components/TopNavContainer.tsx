import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Touchable,
} from "react-native";
import React from "react";
import { outfit } from "../constants/font";
import { Ionicons } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
type Props = {
  title: string;
  back?: boolean;
  onPress?: () => void;
};

const TopNavContainer = (props: Props) => {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        {props.back && (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 24,
              height: 24,
            }}
          >
            <Ionicons name="arrow-back" size={24} color={"#595959"} />
          </TouchableOpacity>
        )}
        <Text
          style={{
            color: "#414141",
            fontSize: 24,
            lineHeight: 36,
            fontFamily: outfit,
          }}
        >
          {props.title}
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
        <View
          style={{
            height: 36,
            width: 279,
          }}
        >
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "#E7E7E7",
              height: "100%",
              width: "100%",
              borderRadius: 100,
              backgroundColor: "#F8F8F8",
              paddingHorizontal: 13,
              paddingVertical: 6,
              color: "#898989",
              fontSize: 16,
              lineHeight: 24,
              fontFamily: outfit,
            }}
            placeholder="Search"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 16,
            height: 40,
          }}
        >
          <TouchableOpacity>
            <Ionicons name="notifications" size={32} color={"#717171"} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 16,
              height: 40,
            }}
          >
            <Image
              source={require("../../assets/images/profile.jpeg")}
              width={32}
              height={32}
              style={{ height: 32, width: 32, borderRadius: 100 }}
            />
            <Text
              style={{
                color: "#717171",
                fontSize: 16,
                lineHeight: 24,
                fontFamily: outfit,
              }}
            >
              Agent
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TopNavContainer;
