import { View, Text } from "react-native";
import React from "react";
import { Path, Svg } from "react-native-svg";

const UserIcon: React.FC<{ color?: string }> = ({ color = "#A0A0A0" }) => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M10.0001 1.66602C5.40008 1.66602 1.66675 5.39935 1.66675 9.99935C1.66675 14.5993 5.40008 18.3327 10.0001 18.3327C14.6001 18.3327 18.3334 14.5993 18.3334 9.99935C18.3334 5.39935 14.6001 1.66602 10.0001 1.66602ZM6.12508 15.416C7.21675 14.6327 8.55008 14.166 10.0001 14.166C11.4501 14.166 12.7834 14.6327 13.8751 15.416C12.7834 16.1993 11.4501 16.666 10.0001 16.666C8.55008 16.666 7.21675 16.1993 6.12508 15.416ZM15.1167 14.266C13.7084 13.166 11.9334 12.4993 10.0001 12.4993C8.06675 12.4993 6.29175 13.166 4.88341 14.266C3.91675 13.1077 3.33341 11.6243 3.33341 9.99935C3.33341 6.31602 6.31675 3.33268 10.0001 3.33268C13.6834 3.33268 16.6667 6.31602 16.6667 9.99935C16.6667 11.6243 16.0834 13.1077 15.1167 14.266Z"
        fill={color}
      />
      <Path
        d="M10.0001 4.99935C8.39175 4.99935 7.08342 6.30768 7.08342 7.91602C7.08342 9.52435 8.39175 10.8327 10.0001 10.8327C11.6084 10.8327 12.9167 9.52435 12.9167 7.91602C12.9167 6.30768 11.6084 4.99935 10.0001 4.99935ZM10.0001 9.16602C9.30841 9.16602 8.75008 8.60768 8.75008 7.91602C8.75008 7.22435 9.30841 6.66602 10.0001 6.66602C10.6917 6.66602 11.2501 7.22435 11.2501 7.91602C11.2501 8.60768 10.6917 9.16602 10.0001 9.16602Z"
        fill={color}
      />
    </Svg>
  );
};

export default UserIcon;