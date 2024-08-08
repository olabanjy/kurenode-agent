export type DropDownProps = {
  label: string;
  value: string;
};

export const MartialStatusList: DropDownProps[] = [
  {
    label: "Single",
    value: "single",
  },
  {
    label: "Married",
    value: "married",
  },
];

export const Gender: DropDownProps[] = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
];
