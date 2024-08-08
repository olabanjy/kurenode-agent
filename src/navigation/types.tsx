import type { StackScreenProps } from "@react-navigation/stack";

export type RootStackParamList = {
  "auth-stack": undefined;
  "app-stack": undefined;
};
export type AuthStackParamList = {
  "app-stack": undefined;
  "signup-screen": undefined;
  "forgot-screen": undefined;
  "onboard-screen": undefined;
  "login-screen": undefined;
  "new-password-screen": Record<string, any>;
  "verify-screen": Record<string, any>;

  "personal-one-screen": undefined;
  "personal-two-screen": { [key: string]: any };
  "medical-screen": undefined;
  "success-screen": undefined;
};
export type AppStackParamList = {
  "home-screen": undefined;
  "manage-patients-screen": undefined;
  "onboard-one-screen": undefined;
  "onboard-two-screen": Record<string, any>;
  "benefit-screen": undefined;
  "onboard-success-screen": undefined;
  "manage-appoinment-screen": undefined;
  "create-appoinment-screen": undefined;
  "update-appoinment-screen": Record<string, any>;
  "manage-encounter-screen": undefined;
  "create-encounter-screen": undefined;
  "update-encounter-screen": Record<string, any>;
  "account-screen": undefined;
  "settings-screen": undefined;
};

export type SignupScreenProps = StackScreenProps<
  AuthStackParamList,
  "signup-screen"
>;
export type ForgotPasswordScreenProps = StackScreenProps<
  AuthStackParamList,
  "forgot-screen"
>;
export type OnBoardingScreenProps = StackScreenProps<
  AuthStackParamList,
  "onboard-screen"
>;
export type LoginScreenProps = StackScreenProps<
  AuthStackParamList,
  "login-screen"
>;
export type VerifyScreenProps = StackScreenProps<
  AuthStackParamList,
  "verify-screen"
>;
export type PersonalOneScreenProps = StackScreenProps<
  AuthStackParamList,
  "personal-one-screen"
>;
export type PersonalTwoScreenProps = StackScreenProps<
  AuthStackParamList,
  "personal-two-screen"
>;
export type MedicalScreenProps = StackScreenProps<
  AuthStackParamList,
  "medical-screen"
>;
export type BeneficiariesScreenProps = StackScreenProps<
  AppStackParamList,
  "benefit-screen"
>;
export type NewPasswordScreenProps = StackScreenProps<
  AuthStackParamList,
  "new-password-screen"
>;
export type SuccessScreenProps = StackScreenProps<
  AuthStackParamList,
  "success-screen"
>;
export type HomeScreenProps = StackScreenProps<
  AppStackParamList,
  "home-screen"
>;
export type ManagePatientsScreenProps = StackScreenProps<
  AppStackParamList,
  "manage-patients-screen"
>;
export type UpdateAppointmentScreenProps = StackScreenProps<
  AppStackParamList,
  "update-appoinment-screen"
>;
export type UpdateEncounterScreenProps = StackScreenProps<
  AppStackParamList,
  "update-encounter-screen"
>;
export type OnboardPatientsScreenProps = StackScreenProps<
  AppStackParamList,
  "onboard-one-screen"
>;
export type OnboardPatientsTwoScreenProps = StackScreenProps<
  AppStackParamList,
  "onboard-two-screen"
>;
export type OnboardSuccessScreenProps = StackScreenProps<
  AppStackParamList,
  "onboard-success-screen"
>;
export type ManageAppointmentScreenProps = StackScreenProps<
  AppStackParamList,
  "manage-appoinment-screen"
>;
export type CreateAppointmentsScreenProps = StackScreenProps<
  AppStackParamList,
  "create-appoinment-screen"
>;
export type ManageEncounterScreenProps = StackScreenProps<
  AppStackParamList,
  "manage-encounter-screen"
>;
export type CreateEncountersScreenProps = StackScreenProps<
  AppStackParamList,
  "create-encounter-screen"
>;
export type AccountScreenProps = StackScreenProps<
  AppStackParamList,
  "account-screen"
>;
export type SettingsScreenProps = StackScreenProps<
  AppStackParamList,
  "settings-screen"
>;
