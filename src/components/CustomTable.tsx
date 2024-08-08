import { View, Text, TouchableOpacity } from "react-native";
import React, { ReactNode } from "react";
import { DataTable } from "react-native-paper";
import { APPOINTMENT_TABLE_DATA } from "../data/tabledata";
import { Entypo } from "@expo/vector-icons";

type Props = {
  renderHeader: ReactNode;
  renderDataRows: ReactNode;
};
const CustomTable = (props: Props) => {
  return (
    <DataTable>
      <DataTable.Header
        style={{
          flex: 1,
          backgroundColor: "#F8F8F8",
          padding: 0,
          height: 58,
          borderWidth: 0,
        }}
      >
        {props.renderHeader}
      </DataTable.Header>
      {props.renderDataRows}
    </DataTable>
  );
};

export default CustomTable;
