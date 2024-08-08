// import Toast from "react-native-root-toast";

// export const CustomToaster = (message: string, color: string, time: number) => {
//   let toast = Toast.show(message, {
//     duration: Toast.durations.LONG,
//     position: Toast.positions.BOTTOM,
//     shadow: true,
//     animation: true,
//     hideOnPress: true,
//     delay: 0,
//     backgroundColor: color,
//   });

//   setTimeout(function () {
//     Toast.hide(toast);
//   }, time);
// };

export function maskPhoneNumber(phoneNumber: string): string {
  if (phoneNumber.length < 4) {
    return phoneNumber; // Return the phone number as is if it's too short to mask
  }
  const firstDigit = phoneNumber.slice(0, 1);
  const lastTwoDigits = phoneNumber.slice(-2);
  const maskedMiddle = "*".repeat(phoneNumber.length - 3); // Length - 3 to account for first and last two digits
  return `${firstDigit}${maskedMiddle}${lastTwoDigits}`;
}

export type OnboardPatientType = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  dob: string;
  gender: string;
  address: string;
  proofId: string;
  IdNumber: string;
  lga: string;
  state: Record<string, any>;
  martial_status: string;
  blood_type: string;
  geno_type: string;
};
