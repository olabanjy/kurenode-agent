import { Image, ScrollView, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./style";
import ScreenView from "../../../layouts/ScreenView";
import { OnboardPatientsTwoScreenProps } from "../../../navigation/types";
import CustomInput from "../../../components/CustomInput";
import { TouchableOpacity } from "react-native";
import { outfit } from "../../../constants/font";
import TopNavContainer from "../../../components/TopNavContainer";
import HeaderInfo from "../../../components/ui/HeaderInfo";
import HomeCard from "../../../components/HomeCard";
import { homeCardList } from "../../../data/cardlist";
import PrimaryButton from "../../../components/PrimaryButton";
import Title from "../../../components/ui/Title";
import { Divider, PaperProvider, TextInput } from "react-native-paper";
import CustomDatePicker from "../../../components/CustomDatePicker";
import CustomDropDown from "../../../components/CustomDropDown";
import { TEXT_GREY2 } from "../../../constants/color";
import MaritalStatus from "../../../components/ui/MaritalStatus";
import { BLOOD_TYPE, GENO_TYPE } from "../../../data/medicaldata";
import { DropDownProps } from "../../../data/dropdownData";
import MedicailModal from "../../../components/ui/MedicailModal";
import FlatButton from "../../../components/FlatButton";
import {
  getSinglePatient,
  onboardSinglePatient,
} from "../../../services/patient_services";
import { AuthContext } from "../../../contexts/AuthContext";
import useAuthContext from "../../../hooks/useAuth";
import { createAppointment } from "../../../services/appointment_services";
import { usePatient } from "../../../store/onboard_patient";
import { getAllOrganizationService } from "../../../services/auth_services";
type Institution = {
  label: string;
  value: string;
  organization_name: string;
  place_of_business: string;
  details: string;
  cac_rc_no: string;
  phone: string;
  address: string;
  lga: string;
  lcda: string;
  owner: string;
  id: number;
  health_plan: Array<Record<string, any>>;
  branch: Array<Record<string, any>>;
  staff: Array<Record<string, any>>;
  appointment: Array<Record<string, any>>;
  encounter: Array<Record<string, any>>;
};
const OnboardPatientsTwoScreen = ({
  navigation,
  route,
}: OnboardPatientsTwoScreenProps) => {
  const [enteredBloodType, setEnteredBloodType] = useState("");
  const [enteredGenoType, setEnteredGenoType] = useState("");
  const [patientData, setPatientData] = usePatient();
  const [enteredInstitution, setEnteredInstitution] = useState<
    Record<string, any>
  >({});
  const [enteredHealthPlan, setEnteredHealthPlan] = useState("");
  const [allInstitutions, setAllInstitutions] = useState<Institution[]>([]);
  const [selectedModalType, setSelectedModalType] = useState<
    "HMO" | "HEALTH" | null
  >(null);
  const [enteredModalValue, setEnteredModalValue] = useState("");
  const data = route?.params?.params;
  console.log(data);
  const [isLoading, setIsloading] = useState(false);

  const handleBloodTypeChange = (item: DropDownProps) => {
    setEnteredBloodType(item.value);
  };
  const handleGenoTypeChange = (item: DropDownProps) => {
    setEnteredGenoType(item.value);
  };
  const handleInstitutionChange = (item: DropDownProps) => {
    setEnteredInstitution(item);
  };
  const handleHealthPlanChange = (item: DropDownProps) => {
    setEnteredHealthPlan(item.value);
  };
  const { userInfo, userToken } = useAuthContext();

  const payloadChildArray = data?.map((child: any) => ({
    full_name: child.full_name,
    relationship: "Child",
    date_of_birth: child.date_of_birth,
  }));
  const payload = {
    email: patientData?.email,
    first_name: patientData?.first_name,
    last_name: patientData?.last_name,
    phone_number: patientData?.phone,
    password1: patientData?.password,
    password2: patientData?.confirmPassword,
    dob: patientData?.dob,
    gender: patientData?.gender,
    address: patientData?.address,
    id_type: "Patient",
    id_number: patientData?.IdNumber,
    lga: patientData?.lga,
    state: patientData?.state,
    marital_status: patientData?.martial_status,
    relationships: payloadChildArray,
    medicals: {
      blood_type: enteredBloodType,
      genotype: enteredGenoType,
    },
    health_plan: enteredHealthPlan,
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await getAllOrganizationService(userToken);
        const organizations = response?.results?.map(
          (organization: Record<string, any>) => ({
            label: organization?.organization_name,
            value: organization?.id,
            id: organization?.id,
            ...organization,
          })
        );
        setAllInstitutions(organizations);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [userToken]);

  const createPatient = async () => {
    setIsloading(true);
    try {
      const response = await onboardSinglePatient(userToken, payload);
      console.log(response);
      if (response) {
        navigation.navigate("onboard-success-screen");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };

  const selectedInstitution = allInstitutions.find(
    (inst) => inst?.id === enteredInstitution?.id
  );
  const healthPlans =
    selectedInstitution?.health_plan.map((health: Record<string, string>) => ({
      label: health.name,
      value: health.id,
    })) || [];

  return (
    <ScreenView style={styles.container}>
      <PaperProvider>
        <View style={styles.viewContainer}>
          <TopNavContainer title="Onboard Patient" />
          <ScrollView style={styles.view1}>
            <MedicailModal
              selectedModalType={selectedModalType}
              setSelectedModalType={setSelectedModalType}
              setEnteredModalValue={setEnteredModalValue}
              enteredModalValue={enteredModalValue}
            />
            <View>
              <Title style={{ textAlign: "left" }}>Medical Profile</Title>
              <View style={{ gap: 24, marginBottom: 32, marginTop: 16 }}>
                <View style={{ flexDirection: "row", gap: 16 }}>
                  <View style={{ flex: 1 }}>
                    <CustomDropDown
                      placeholder="Blood Type"
                      value={enteredBloodType}
                      items={BLOOD_TYPE}
                      onChange={handleBloodTypeChange}
                      label="Select Your Blood Type"
                    />
                  </View>
                  <View style={{ flex: 1 }}>
                    <CustomDropDown
                      placeholder="Genotype"
                      value={enteredGenoType}
                      items={GENO_TYPE}
                      onChange={handleGenoTypeChange}
                      label="Select Your Genotype"
                    />
                  </View>
                </View>
                <View style={{ flexDirection: "row", gap: 16 }}>
                  <View style={{ flex: 1 }}>
                    <CustomDropDown
                      label="Select an Institution"
                      value={enteredInstitution?.value}
                      // items={[{ label: "Testing", value: "testing" }]}
                      items={allInstitutions}
                      onChange={handleInstitutionChange}
                      placeholder="HMO"
                      bottomLabel="I already have HMO"
                      onPress={() => setSelectedModalType("HMO")}
                    />
                  </View>
                  <View style={{ flex: 1 }}>
                    <CustomDropDown
                      placeholder="Health Plan"
                      value={enteredHealthPlan}
                      items={healthPlans}
                      onChange={handleHealthPlanChange}
                      label="Choose a Health Plan"
                      bottomLabel="I already have Health Plan"
                      onPress={() => setSelectedModalType("HEALTH")}
                    />
                  </View>
                </View>
              </View>
            </View>
            <Divider />
            <View
              style={{
                flexDirection: "row",
                alignSelf: "flex-end",
                gap: 16,
                width: 374,
                marginTop: 48,
              }}
            >
              <FlatButton
                style={{ flex: 1, width: "auto" }}
                onPress={() => navigation.goBack()}
              >
                Back
              </FlatButton>

              <PrimaryButton
                // onPress={() => navigation.navigate("onboard-success-screen")}
                onPress={createPatient}
                style={{ flex: 1, width: "auto" }}
                disabled={false}
              >
                {isLoading ? "Loading..." : "Contiune"}
              </PrimaryButton>
            </View>
          </ScrollView>
        </View>
      </PaperProvider>
    </ScreenView>
  );
};

export default OnboardPatientsTwoScreen;
