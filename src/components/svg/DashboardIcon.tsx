import { View, Text } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";
const DashboardIcon: React.FC<{ color?: string }> = ({ color = "#595959" }) => {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <Path
        d="M13.8333 2.16667V3.83333H10.5V2.16667H13.8333ZM5.5 2.16667V7.16667H2.16667V2.16667H5.5ZM13.8333 8.83333V13.8333H10.5V8.83333H13.8333ZM5.5 12.1667V13.8333H2.16667V12.1667H5.5ZM15.5 0.5H8.83333V5.5H15.5V0.5ZM7.16667 0.5H0.5V8.83333H7.16667V0.5ZM15.5 7.16667H8.83333V15.5H15.5V7.16667ZM7.16667 10.5H0.5V15.5H7.16667V10.5Z"
        fill={color}
      />
    </Svg>
  );
};

export default DashboardIcon;
