import { atom, useRecoilState } from "recoil";
import { OnboardPatientType } from "../utils/common";

export const onboardPatientAtom = atom<OnboardPatientType>({
  key: "onboardPatientAtom",
  default: {
    address: "",
    confirmPassword: "",
    dob: "",
    email: "",
    blood_type: "",
    first_name: "",
    last_name: "",
    lga: "",
    geno_type: "",
    proofId: "",
    state: {},
    gender: "",
    martial_status: "",
    password: "",
    phone: "",
    IdNumber: "",
  },
});

export const usePatient = () => {
  return useRecoilState(onboardPatientAtom);
};
