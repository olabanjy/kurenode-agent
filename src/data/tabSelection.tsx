import { ReactElement } from "react";
import DashboardIcon from "../components/svg/DashboardIcon";
import ManagePatientsIcon from "../components/svg/ManagePatientsIcon";
import ManageAppointmentsIcon from "../components/svg/ManageAppointmentsIcon";
import UserIcon from "../components/svg/UserIcon";
import { GearIcon } from "../components/svg/GearIcon";
import VaccineIcon from "../components/svg/VaccineIcon";

export type benefitListProps = {
  id: number;
  title: string;
  content: string;
  sub: string;
  duration: string;
};
export const benefitList: benefitListProps[] = [
  {
    id: 1,
    title: "Health Insurance",
    content: `Health insurance or medical insurance is a type of insurance that covers the whole or a part of the risk of a person incurring medical expenses.`,
    sub: "For Premium Plan Only",
    duration: "3 Months",
  },
  {
    id: 2,
    title: "Maternity Insurance",
    content: `Covering prenatal and postnatal expenses, delivery and ambulance costs;  some also cover costs incurred after the baby is born up to a ...`,
    sub: "For Premium Plan Only",
    duration: "3 Months",
  },
  {
    id: 3,
    title: "Family Floater",
    content: `Family floater health insurance is one policy which aims to provide sum insured coverage to individual and as well his family members.`,
    sub: "For Standard Plan",
    duration: "1 Month",
  },
  {
    id: 4,
    title: "Prescription Drugs",
    content: `Health insurance or medical insurance is a type of insurance that covers the whole or a part of the risk of a person incurring medical expenses.`,
    sub: "For Standard Plan Only ",
    duration: "3 Months",
  },
  {
    id: 5,
    title: "Dental",
    content: `Health insurance or medical insurance is a type of insurance that covers the whole or a part of the risk of a person incurring medical expenses.`,
    sub: "For Standard Plan Only ",
    duration: "3 Months",
  },
  {
    id: 6,
    title: "Indemnity Plans",
    content: `Health insurance or medical insurance is a type of insurance that covers the whole or a part of the risk of a person incurring medical expenses.`,
    sub: "For Standard Plan Only ",
    duration: "3 Months",
  },
];

type NavLinksProps = {
  navigateLinks: string;
  icon: ReactElement;
  title: string;
};

export const NavLinks: NavLinksProps[] = [
  {
    icon: <DashboardIcon />,
    navigateLinks: "home-screen",
    title: "Dashboard",
  },
  {
    icon: <ManagePatientsIcon />,
    navigateLinks: "manage-patients-screen",
    title: "Manage Patients",
  },
  {
    icon: <ManageAppointmentsIcon />,
    navigateLinks: "manage-appoinment-screen",
    title: "Manage Appointments",
  },
  {
    icon: <VaccineIcon />,
    navigateLinks: "manage-encounter-screen",
    title: "Encounter",
  },
  {
    icon: <GearIcon />,
    navigateLinks: "settings-screen",
    title: "Settings",
  },
  {
    icon: <UserIcon />,
    navigateLinks: "account-screen",
    title: "Account",
  },
];
