import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import PrimaryButton from "./PrimaryButton";
import { FILTER_TAGS, tags } from "../data/medicaldata";
import { ICON_COLOR, SECONDARY_GREY2 } from "../constants/color";
import { outfit, outfit_medium } from "../constants/font";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AppStackParamList } from "../navigation/types";

type Props = {
  filterTag: tags[];
  buttonText: string;
  onPress: () => {};
};

const FilterContainer = (props: Props) => {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          gap: 16,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: ICON_COLOR,
            fontSize: 12,
            lineHeight: 21,
            fontFamily: outfit,
          }}
        >
          Filter by
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          {props.filterTag.map((list, index) => (
            <TouchableOpacity
              key={index}
              style={{
                borderColor: SECONDARY_GREY2,
                height: 37,
                borderWidth: 1,
                borderRadius: 3,
                paddingHorizontal: 12,
                paddingVertical: 8,
              }}
            >
              <Text
                style={{
                  color: ICON_COLOR,
                  fontSize: 12,
                  lineHeight: 21,
                  fontFamily: outfit_medium,
                }}
              >
                {list.filterTag}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <PrimaryButton
        onPress={props.onPress}
        disabled={false}
        style={{
          width: 192,
          height: 37,
          paddingVertical: 8,
        }}
        activeText={{ fontSize: 14, lineHeight: 21 }}
      >
        {props.buttonText}
      </PrimaryButton>
    </View>
  );
};

export default FilterContainer;
