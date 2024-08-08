import { Image, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./style";
import ScreenView from "../../../layouts/ScreenView";
import { ManageEncounterScreenProps } from "../../../navigation/types";
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
import {
  APPOINTMENT_TABLE_DATA,
  ENCOUNTER_TABLE_DATA,
} from "../../../data/tabledata";
import CustomTable from "../../../components/CustomTable";
import { DataTable } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import { FILTER_ENCOUNTER } from "../../../data/medicaldata";
import { getAllEncounters } from "../../../services/encounter_services";
import useAuthContext from "../../../hooks/useAuth";
import DeleteModal from "../../../components/DeleteModal";
import { useIsFocused } from "@react-navigation/native";
import ViewModalComponent from "../../../components/ViewModal";

const ManageEncounterScreen = ({ navigation }: ManageEncounterScreenProps) => {
  const { userToken } = useAuthContext();
  const isFocused = useIsFocused();
  const [encounterList, setencounterList] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [id, setId] = useState<number | null>(null);
  const [cancelModal, setCancelModal] = useState<number | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [selectedAppointment, setSelectedAppointment] = useState<Record<
    string,
    any
  > | null>(null);
  useEffect(() => {
    if (isFocused) {
      (async () => {
        setIsLoading(true);
        try {
          const response = await getAllEncounters(userToken);
          console.log(response);
          setencounterList(response?.results);
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      })();
    }
  }, [userToken, isFocused]);
  const handleClose = () => {
    setId(null);
  };
  const handleCloseCancel = () => {
    setCancelModal(null);
  };
  const handleId = (index: number) => {
    setId(index);
    const appointment = encounterList.find(
      (appt: { id: number }) => appt.id === index
    );
    console.log(appointment, "encounter");
    setSelectedAppointment(appointment || null); // Set selected appointment
  };
  const handleModal = (index: number) => {
    setCancelModal(index);
    const appointment = encounterList.find(
      (appt: { id: number }) => appt.id === index
    );
    console.log(appointment, "encounter");
    setSelectedAppointment(appointment || null); // Set selected appointment
  };
  const handlePopup = (id: number) => {
    setSelectedId(selectedId === id ? null : id);
  };
  const handleNextPage = () => {
    if (currentPage * itemsPerPage < encounterList.length) {
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
  const displayedData = encounterList.slice(startIndex, endIndex);
  return (
    <ScreenView style={styles.container}>
      <View style={styles.viewContainer}>
        <TopNavContainer title="Manage Encounters" />
        <View style={styles.view1}>
          <FilterContainer
            filterTag={FILTER_ENCOUNTER}
            buttonText=" + Create Encounter"
            onPress={async () => navigation.navigate("create-encounter-screen")}
          />
          <CustomTable
            renderHeader={
              <>
                {ENCOUNTER_TABLE_DATA.tableHead.map((item, index) => (
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
                ))}
              </>
            }
            renderDataRows={
              <View style={{ marginTop: 40 }}>
                {isLoading ? (
                  <Text>Loading.....</Text>
                ) : (
                  displayedData?.map(
                    (list: Record<string, any>, index: number) => (
                      <DataTable.Row
                        key={index}
                        style={{ flex: 1, padding: 0, height: 64 }}
                      >
                        <DataTable.Cell style={{ marginRight: 10 }}>
                          {list?.patient_name}
                        </DataTable.Cell>
                        <DataTable.Cell style={{ marginRight: 10 }}>
                          {list?.diagnosis}
                        </DataTable.Cell>
                        <DataTable.Cell style={{ marginRight: 10 }}>
                          {list?.prescription}
                        </DataTable.Cell>
                        <DataTable.Cell style={{ marginRight: 10 }}>
                          {list?.lab_work}
                        </DataTable.Cell>
                        <DataTable.Cell style={{ marginRight: 10 }}>
                          {list?.admitted?.length <= 0 ? "Yes" : "No"}
                        </DataTable.Cell>
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
                                  height: 200,
                                  backgroundColor: "#fff",
                                  borderRadius: 5,
                                  padding: 24,
                                  gap: 20,
                                }}
                              >
                                <TouchableOpacity
                                  onPress={() => handleId(list?.id)}
                                >
                                  <Text>View Encounter</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                  onPress={() =>
                                    navigation.navigate(
                                      "update-encounter-screen",
                                      { encounterId: list?.id }
                                    )
                                  }
                                >
                                  <Text>Update Encounter</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                  onPress={() => handleModal(list?.id)}
                                >
                                  <Text>Delete Encounter</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                  onPress={() => setSelectedId(null)}
                                >
                                  <Text>Close</Text>
                                </TouchableOpacity>
                              </View>
                            )}
                          </View>
                          <TouchableOpacity
                            onPress={() => handlePopup(list?.id)}
                            style={{ marginRight: 10 }}
                          >
                            <Entypo
                              name="dots-three-vertical"
                              size={16}
                              color="#898989"
                            />
                          </TouchableOpacity>
                        </DataTable.Cell>
                      </DataTable.Row>
                    )
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
            disabled={currentPage * itemsPerPage >= encounterList?.length}
          >
            <Text
              style={{
                marginHorizontal: 20,
                opacity:
                  currentPage * itemsPerPage >= encounterList?.length ? 0.5 : 1,
              }}
            >
              Next
            </Text>
          </TouchableOpacity>
        </View>
        <ViewModalComponent
          toggleRescheduleAppointment={!!id}
          appointment={selectedAppointment}
          setToggleRescheduleAppointment={handleClose}
        />
        <DeleteModal
          toggleRescheduleAppointment={!!cancelModal}
          appointment={selectedAppointment}
          setToggleRescheduleAppointment={handleCloseCancel}
        />
      </View>
    </ScreenView>
  );
};

export default ManageEncounterScreen;

{
  /* <Table>
  <Row data={APPOINTMENT_TABLE_DATA.tableHead} />
  <TableWrapper>

  </TableWrapper>
</Table> */
}
