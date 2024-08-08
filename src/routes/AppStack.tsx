import { AppStackParamList } from "..//navigation/types";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/app/home";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ManagePatientsScreen from "../screens/app/manage-patients";
import OnboardPatientsScreen from "../screens/app/onboard-patients";
import OnboardPatientsTwoScreen from "../screens/app/onboard-patients-two";
import BeneficiariesScreen from "../screens/app/beneficiaries";
import OnboardSuccessScreen from "../screens/app/onboard-success";
import ManageAppointmentScreen from "../screens/app/manage-appointments";
import CreateAppointmentsScreen from "../screens/app/create-appointments";
import ManageEncounterScreen from "../screens/app/manage-encounter";
import CreateEncountersScreen from "../screens/app/create-encounters";
import AccountScreen from "../screens/app/account";
import SettingsScreen from "../screens/app/settings";
import UpdateAppointmentScreen from "../screens/app/update-appointments";
import UpdateEncounterScreen from "../screens/app/update-encounters";

const Stack = createStackNavigator<AppStackParamList>();
export const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="home-screen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home-screen" component={HomeScreen} />
      <Stack.Screen
        name="manage-patients-screen"
        component={ManagePatientsScreen}
      />
      <Stack.Screen
        name="onboard-one-screen"
        component={OnboardPatientsScreen}
      />
      <Stack.Screen
        name="onboard-two-screen"
        component={OnboardPatientsTwoScreen}
      />
      <Stack.Screen name="benefit-screen" component={BeneficiariesScreen} />
      <Stack.Screen
        name="onboard-success-screen"
        component={OnboardSuccessScreen}
      />
      <Stack.Screen
        name="manage-appoinment-screen"
        component={ManageAppointmentScreen}
      />
      <Stack.Screen
        name="create-appoinment-screen"
        component={CreateAppointmentsScreen}
      />
      <Stack.Screen
        name="manage-encounter-screen"
        component={ManageEncounterScreen}
      />
      <Stack.Screen
        name="create-encounter-screen"
        component={CreateEncountersScreen}
      />
      <Stack.Screen
        name="update-encounter-screen"
        component={UpdateEncounterScreen}
      />
      <Stack.Screen
        name="update-appoinment-screen"
        component={UpdateAppointmentScreen}
      />
      <Stack.Screen name="account-screen" component={AccountScreen} />
      <Stack.Screen name="settings-screen" component={SettingsScreen} />
    </Stack.Navigator>
  );
};
