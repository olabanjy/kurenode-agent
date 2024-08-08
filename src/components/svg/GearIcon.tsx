import { View, Text } from "react-native";
import React from "react";
import { Path, Svg } from "react-native-svg";

export const GearIcon: React.FC<{ color?: string }> = ({
  color = "#595959",
}) => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M16.1935 10.816C16.2268 10.5493 16.2518 10.2827 16.2518 9.99935C16.2518 9.71602 16.2268 9.44935 16.1935 9.18268L17.9518 7.80768C18.1102 7.68268 18.1518 7.45768 18.0518 7.27435L16.3852 4.39102C16.3102 4.25768 16.1685 4.18268 16.0185 4.18268C15.9685 4.18268 15.9185 4.19102 15.8768 4.20768L13.8018 5.04102C13.3685 4.70768 12.9018 4.43268 12.3935 4.22435L12.0768 2.01602C12.0518 1.81602 11.8768 1.66602 11.6685 1.66602H8.33515C8.12682 1.66602 7.95182 1.81602 7.92682 2.01602L7.61015 4.22435C7.10182 4.43268 6.63515 4.71602 6.20182 5.04102L4.12682 4.20768C4.07682 4.19102 4.02682 4.18268 3.97682 4.18268C3.83515 4.18268 3.69349 4.25768 3.61849 4.39102L1.95182 7.27435C1.84349 7.45768 1.89349 7.68268 2.05182 7.80768L3.81015 9.18268C3.77682 9.44935 3.75182 9.72435 3.75182 9.99935C3.75182 10.2743 3.77682 10.5493 3.81015 10.816L2.05182 12.191C1.89349 12.316 1.85182 12.541 1.95182 12.7243L3.61849 15.6077C3.69349 15.741 3.83515 15.816 3.98515 15.816C4.03515 15.816 4.08515 15.8077 4.12682 15.791L6.20182 14.9577C6.63515 15.291 7.10182 15.566 7.61015 15.7744L7.92682 17.9827C7.95182 18.1827 8.12682 18.3327 8.33515 18.3327H11.6685C11.8768 18.3327 12.0518 18.1827 12.0768 17.9827L12.3935 15.7744C12.9018 15.566 13.3685 15.2827 13.8018 14.9577L15.8768 15.791C15.9268 15.8077 15.9768 15.816 16.0268 15.816C16.1685 15.816 16.3102 15.741 16.3852 15.6077L18.0518 12.7243C18.1518 12.541 18.1102 12.316 17.9518 12.191L16.1935 10.816ZM14.5435 9.39102C14.5768 9.64935 14.5852 9.82435 14.5852 9.99935C14.5852 10.1743 14.5685 10.3577 14.5435 10.6077L14.4268 11.5493L15.1685 12.1327L16.0685 12.8327L15.4852 13.841L14.4268 13.416L13.5602 13.066L12.8102 13.6327C12.4518 13.8994 12.1102 14.0993 11.7685 14.241L10.8852 14.5993L10.7518 15.541L10.5852 16.666H9.41849L9.12682 14.5993L8.24349 14.241C7.88515 14.091 7.55182 13.8993 7.21849 13.6493L6.46015 13.066L5.57682 13.4243L4.51849 13.8493L3.93515 12.841L4.83515 12.141L5.57682 11.5577L5.46015 10.616C5.43515 10.3577 5.41849 10.166 5.41849 9.99935C5.41849 9.83268 5.43515 9.64102 5.46015 9.39102L5.57682 8.44935L4.83515 7.86602L3.93515 7.16602L4.51849 6.15768L5.57682 6.58268L6.44349 6.93268L7.19349 6.36602C7.55182 6.09935 7.89349 5.89935 8.23515 5.75768L9.11849 5.39935L9.25182 4.45768L9.41849 3.33268H10.5768L10.8685 5.39935L11.7518 5.75768C12.1102 5.90768 12.4435 6.09935 12.7768 6.34935L13.5352 6.93268L14.4185 6.57435L15.4768 6.14935L16.0602 7.15768L15.1685 7.86602L14.4268 8.44935L14.5435 9.39102ZM10.0018 6.66602C8.16015 6.66602 6.66849 8.15768 6.66849 9.99935C6.66849 11.841 8.16015 13.3327 10.0018 13.3327C11.8435 13.3327 13.3352 11.841 13.3352 9.99935C13.3352 8.15768 11.8435 6.66602 10.0018 6.66602ZM10.0018 11.666C9.08515 11.666 8.33515 10.916 8.33515 9.99935C8.33515 9.08268 9.08515 8.33268 10.0018 8.33268C10.9185 8.33268 11.6685 9.08268 11.6685 9.99935C11.6685 10.916 10.9185 11.666 10.0018 11.666Z"
        fill={color}
      />
    </Svg>
  );
};
