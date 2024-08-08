import { DropDownProps } from "./dropdownData";
export type tags = {
  filterTag:
    | "All"
    | "Appointment Type"
    | "Appointment Status"
    | "Department"
    | "Diagnosis"
    | "Drug Prescription"
    | "Lab Work";
};

export const BLOOD_TYPE: DropDownProps[] = [
  { label: "Blood Type A", value: "A" },
  { label: "Blood Type B", value: "B" },
  { label: "Blood Type AB", value: "AB" },
  { label: "Blood Type O", value: "AB" },
];
export const GENO_TYPE: DropDownProps[] = [
  { label: "Genotype AA", value: "AA" },
  { label: "Genotype AS", value: "AS" },
  { label: "Genotype SS", value: "SS" },
];

export const FILTER_TAGS: tags[] = [
  {
    filterTag: "All",
  },
  {
    filterTag: "Appointment Status",
  },
  {
    filterTag: "Appointment Type",
  },
  {
    filterTag: "Department",
  },
];
export const FILTER_ENCOUNTER: tags[] = [
  {
    filterTag: "All",
  },
  {
    filterTag: "Diagnosis",
  },
  {
    filterTag: "Drug Prescription",
  },
  {
    filterTag: "Lab Work",
  },
];
