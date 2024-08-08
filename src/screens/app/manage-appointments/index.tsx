import { Image, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./style";
import ScreenView from "../../../layouts/ScreenView";
import { ManageAppointmentScreenProps } from "../../../navigation/types";
import CustomInput from "../../../components/CustomInput";
import { TouchableOpacity } from "react-native";
import { outfit } from "../../../constants/font";
import TopNavContainer from "../../../components/TopNavContainer";
import HeaderInfo from "../../../components/ui/HeaderInfo";
import HomeCard from "../../../components/HomeCard";
import { homeCardList } from "../../../data/cardlist";
import PrimaryButton from "../../../components/PrimaryButton";
import FilterContainer from "../../../components/FilterContainer";
import { Table, Row, Rows, TableWrapper } from "react-native-table-component";
import { APPOINTMENT_TABLE_DATA } from "../../../data/tabledata";
import CustomTable from "../../../components/CustomTable";
import { DataTable } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import { FILTER_TAGS } from "../../../data/medicaldata";
import {
  Appointment,
  getAllAppointments,
} from "../../../services/appointment_services";
import useAuthContext from "../../../hooks/useAuth";
import moment from "moment";
import { getSinglePatient } from "../../../services/patient_services";
import ModalComponent from "../../../components/Modal";
import CancelModal from "../../../components/CancelModal";

const ManageAppointmentScreen = ({
  navigation,
}: ManageAppointmentScreenProps) => {
  const { userToken } = useAuthContext();
  const [allPatients, setAllPatients] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [id, setId] = useState<number | null>(null);
  const [cancelModal, setCancelModal] = useState<number | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [patientName, setPatientName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const [selectedAppointment, setSelectedAppointment] =
    useState<Appointment | null>(null);
  useEffect(() => {
    const fetchAllAppointments = async () => {
      setIsLoading(true);
      try {
        const response = await getAllAppointments(userToken);
        if (response?.results) {
          // Collect patient details and other relevant data
          const patientsDataPromises = response.results.map(
            async (appointment: Record<string, any>) => {
              const single = await getSinglePatient(userToken, appointment?.id);
              return {
                id: appointment.id, // Or any other identifier
                name: `${single?.first_name} ${single?.last_name}`,
                // Include other relevant data from appointment
                ...appointment,
              };
            }
          );

          // Wait for all promises to resolve
          const patientsData = await Promise.all(patientsDataPromises);

          // Update state with the collected data
          setAllPatients(patientsData);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllAppointments();
  }, [userToken]);
  const handleClose = () => {
    setId(null);
  };
  const handleCloseCancel = () => {
    setCancelModal(null);
  };
  const handleId = (index: number) => {
    setId(index);
    const appointment = allPatients.find(
      (appt: { id: number }) => appt.id === index
    );
    setSelectedAppointment(appointment || null); // Set selected appointment
  };
  const handleModal = (index: number) => {
    setCancelModal(index);
    const appointment = allPatients.find(
      (appt: { id: number }) => appt.id === index
    );
    setSelectedAppointment(appointment || null); // Set selected appointment
  };
  const handlePopup = (id: number) => {
    setSelectedId(selectedId === id ? null : id);
  };
  const handleNextPage = () => {
    if (currentPage * itemsPerPage < allPatients.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = allPatients.slice(startIndex, endIndex);
  return (
    <ScreenView style={styles.container}>
      <View style={styles.viewContainer}>
        <TopNavContainer title="Manage Appointments" />
        <View style={styles.view1}>
          <FilterContainer
            filterTag={FILTER_TAGS}
            buttonText=" + Create Appointment"
            onPress={async () =>
              navigation.navigate("create-appoinment-screen")
            }
          />
          <CustomTable
            renderHeader={
              <>
                {isLoading ? (
                  <Text>Loading......</Text>
                ) : (
                  APPOINTMENT_TABLE_DATA.tableHead.map((item, index) => (
                    <DataTable.Title
                      key={index}
                      style={{
                        justifyContent: "flex-start",
                        alignItems: "center",
                        padding: 0,
                        height: 58,
                        flex: 1,
                        marginRight: 10,
                      }}
                    >
                      <Text style={{ textAlign: "center" }}>{item}</Text>
                    </DataTable.Title>
                  ))
                )}
              </>
            }
            renderDataRows={
              <View style={{ marginTop: 40 }}>
                {displayedData?.map(
                  (list: Record<string, any>, index: number) => (
                    <DataTable.Row
                      key={index}
                      style={{ flex: 1, padding: 0, height: 64 }}
                    >
                      <DataTable.Cell style={{ marginRight: 10 }}>
                        {list?.name}
                      </DataTable.Cell>
                      <DataTable.Cell style={{ marginRight: 10 }}>
                        {moment(list?.start_at).format(
                          "MMMM Do YYYY, h:mm:ss a"
                        )}
                      </DataTable.Cell>
                      <DataTable.Cell style={{ marginRight: 10 }}>
                        {list?.type}
                      </DataTable.Cell>
                      {/* <DataTable.Cell style={{ marginRight: 10 }}>
                        {list.status}
                      </DataTable.Cell>
                      <DataTable.Cell style={{ marginRight: 10 }}>
                        {list.doctor}
                      </DataTable.Cell>
                      <DataTable.Cell style={{ marginRight: 10 }}>
                        {list.department}
                      </DataTable.Cell> */}

                      <DataTable.Cell
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: "100%",
                          position: "relative",
                        }}
                      >
                        <View
                          style={{
                            position: "relative",
                          }}
                        >
                          {selectedId === list?.id && (
                            <View
                              style={{
                                width: 238,
                                height: 160,
                                backgroundColor: "#fff",
                                borderRadius: 5,
                                padding: 24,
                                gap: 20,
                              }}
                            >
                              <TouchableOpacity
                                onPress={() => handleId(list?.id)}
                              >
                                <Text>Reschedule Appointment</Text>
                              </TouchableOpacity>
                              <TouchableOpacity
                                onPress={() =>
                                  navigation.navigate(
                                    "update-appoinment-screen",
                                    { appointmentId: list?.id }
                                  )
                                }
                              >
                                <Text>Update Appointment</Text>
                              </TouchableOpacity>
                              <TouchableOpacity
                                onPress={() => handleModal(list?.id)}
                              >
                                <Text>Cancel Appointment</Text>
                              </TouchableOpacity>
                              <TouchableOpacity
                                onPress={() => setSelectedId(null)}
                              >
                                <Text>Close</Text>
                              </TouchableOpacity>
                            </View>
                          )}
                        </View>
                        {selectedId !== list?.id && (
                          <>
                            <TouchableOpacity style={{ marginRight: 10 }}>
                              <Entypo
                                onPress={() => handlePopup(list?.id)}
                                name="dots-three-vertical"
                                size={16}
                                color="#898989"
                              />
                            </TouchableOpacity>
                            <TouchableOpacity>
                              <Entypo
                                name="chevron-thin-right"
                                size={16}
                                color="#898989"
                              />
                            </TouchableOpacity>
                          </>
                        )}
                      </DataTable.Cell>
                    </DataTable.Row>
                  )
                )}
              </View>
            }
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 10,
            marginTop: 30,
          }}
        >
          <TouchableOpacity
            onPress={handlePrevPage}
            disabled={currentPage === 1}
          >
            <Text
              style={{
                marginHorizontal: 20,
                opacity: currentPage === 1 ? 0.5 : 1,
              }}
            >
              Prev
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleNextPage}
            disabled={currentPage * itemsPerPage >= allPatients?.length}
          >
            <Text
              style={{
                marginHorizontal: 20,
                opacity:
                  currentPage * itemsPerPage >= allPatients?.length ? 0.5 : 1,
              }}
            >
              Next
            </Text>
          </TouchableOpacity>
        </View>
        <ModalComponent
          toggleRescheduleAppointment={!!id}
          appointment={selectedAppointment}
          setToggleRescheduleAppointment={handleClose}
        />
        <CancelModal
          toggleRescheduleAppointment={!!cancelModal}
          appointment={selectedAppointment}
          setToggleRescheduleAppointment={handleCloseCancel}
        />
      </View>
    </ScreenView>
  );
};

export default ManageAppointmentScreen;

{
  /* <Table>
  <Row data={APPOINTMENT_TABLE_DATA.tableHead} />
  <TableWrapper>

  </TableWrapper>
</Table> */
}
