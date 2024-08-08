import { ImageProps, ViewStyle } from "react-native";

type serviceListProps = {
  text: string;
  imageUri: ImageProps;
  display: boolean;
};
export type healthListProps = {
  id: number;
  title: string;
  duration: string;
  price: string;
};
export type admissionListProps = {
  date: string;
  status: "Admitted" | "Not Admitted";
  sign: string;
  location: string;
};
export type appointmentListProps = {
  time: string;
  date: "Today" | string;
  name: string;
  title: string;
  meetingType: "Virtual Meeting" | "1v1 Meeting";
};
export type homeCardListProps = {
  id: number;
  title: string;
  icon?: string;
  total: number;
  percentage: string;
};
export const serviceList: serviceListProps[] = [
  {
    text: "Health Plan & Benefit",
    imageUri: require("../../assets/svg/home_health.png"),
    display: true,
  },
  {
    text: "Treatment History",
    imageUri: require("../../assets/svg/prescription.png"),
    display: true,
  },
  {
    text: "Diagnosis",
    imageUri: require("../../assets/svg/stethoscope.png"),
    display: true,
  },
  {
    text: "Drug Prescription",
    imageUri: require("../../assets/svg/pill.png"),
    display: true,
  },
  {
    text: "Admission Status",
    imageUri: require("../../assets/svg/event.png"),
    display: true,
  },
  {
    text: "Lab Reports",
    imageUri: require("../../assets/svg/experiment.png"),
    display: true,
  },
  {
    text: "Lab Reports",
    imageUri: require("../../assets/svg/experiment.png"),
    display: false,
  },
  {
    text: "Lab Reports",
    imageUri: require("../../assets/svg/experiment.png"),
    display: false,
  },
];

export const healthList: healthListProps[] = [
  {
    id: 1,
    title: "Premium Family Plan",
    duration: "3 Months Coverage",
    price: "₦50,000.00",
  },
  {
    id: 2,
    title: "Premium Single Plan",
    duration: "3 Months Coverage",
    price: "₦30,000.00",
  },
  {
    id: 3,
    title: "Standard Family Plan",
    duration: "1 Month Coverage",
    price: "₦15,000.00",
  },
  {
    id: 4,
    title: "Standard Single Plan",
    duration: "1 Month Coverage",
    price: "₦10,000.00",
  },
];

export const admissionList: admissionListProps[] = [
  {
    date: "June 24 - July 02",
    status: "Admitted",
    sign: "Typhoid Malaria",
    location: "Ayinke Healthcare Inc.",
  },
  {
    date: "Sept 24 - Sept 27",
    status: "Not Admitted",
    sign: "Stomach Ulcer",
    location: "Reddington Healthcare Inc.",
  },
];
export const appointmentList: appointmentListProps[] = [
  {
    date: "Today",
    time: "12:00pm - 1:00pm",
    name: "Dr. Morris Adelabu",
    title: "Gynaecologist",
    meetingType: "Virtual Meeting",
  },
  {
    date: "Mon, 23 June, 2024",
    time: "12:00pm - 1:00pm",
    name: "Dr. Stella Ugwu",
    title: "Ophthalmologist",
    meetingType: "1v1 Meeting",
  },
  {
    date: "Tue, 24 June, 2024",
    time: "2:00pm - 2:30pm",
    name: "Dr. Ojo Kolawole",
    title: "Dentist",
    meetingType: "Virtual Meeting",
  },
];

export const homeCardList: homeCardListProps[] = [
  {
    id: 1,
    title: "Total Patients",
    total: 57,
    percentage: "20%",
  },
  {
    id: 2,
    title: "Total Branches",
    total: 15,
    percentage: "35%",
  },
  {
    id: 3,
    title: "Total Appointments",
    total: 165,
    percentage: "25%",
  },
];
