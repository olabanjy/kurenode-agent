import { Image, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./style";
import ScreenView from "../../../layouts/ScreenView";
import { ManagePatientsScreenProps } from "../../../navigation/types";
import CustomInput from "../../../components/CustomInput";
import { TouchableOpacity } from "react-native";
import { outfit } from "../../../constants/font";
import TopNavContainer from "../../../components/TopNavContainer";
import PrimaryButton from "../../../components/PrimaryButton";
import CustomTable from "../../../components/CustomTable";
import { PATIENT_TABLE_DATA } from "../../../data/tabledata";
import { DataTable } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  getAllPatients,
  getUserPlansDetails,
} from "../../../services/patient_services";
import useAuthContext from "../../../hooks/useAuth";

const ManagePatientsScreen = ({ navigation }: ManagePatientsScreenProps) => {
  const { userToken } = useAuthContext();
  const [userDetails, setUserDetails] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await getAllPatients(userToken);
        const patientsDataPromises = response?.map(
          async (appointment: Record<string, any>) => {
            const single = await getUserPlansDetails(userToken, 1);
            return {
              userPlan: single?.name,
              ...appointment,
            };
          }
        );
        const patientsData = await Promise.all(patientsDataPromises);
        setUserDetails(patientsData);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [userToken]);

  const handleNextPage = () => {
    if (currentPage * itemsPerPage < userDetails.length) {
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
  const displayedData = userDetails.slice(startIndex, endIndex);

  return (
    <ScreenView style={styles.container}>
      <View style={styles.viewContainer}>
        <TopNavContainer title="Manage Patients" />
        <View style={styles.view1}>
          <PrimaryButton
            onPress={() => navigation.navigate("onboard-one-screen")}
            disabled={false}
            style={{
              width: 192,
              height: 37,
              paddingVertical: 8,
              alignSelf: "flex-end",
            }}
            activeText={{ fontSize: 14, lineHeight: 21 }}
          >
            Onboard Patient
          </PrimaryButton>

          <CustomTable
            renderHeader={
              <>
                {PATIENT_TABLE_DATA.tableHead.map((list, index) => (
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
                    <Text style={{ textAlign: "center" }}>{list}</Text>
                  </DataTable.Title>
                ))}
              </>
            }
            renderDataRows={
              <View style={{ marginTop: 40 }}>
                {isLoading ? (
                  <Text>Loading.....</Text>
                ) : (
                  displayedData.map(
                    (item: Record<string, any>, index: number) => (
                      <DataTable.Row
                        key={index}
                        style={{ flex: 1, padding: 0, height: 64 }}
                      >
                        <DataTable.Cell style={{ flex: 1 }}>
                          {item?.first_name} {item?.last_name}
                        </DataTable.Cell>
                        <DataTable.Cell style={{ flex: 1 }}>
                          {item.userPlan}
                        </DataTable.Cell>
                        <DataTable.Cell style={{ flex: 1 }}>
                          {item.relation?.length}
                        </DataTable.Cell>
                        <DataTable.Cell style={{ flex: 1 }}>
                          {item.phone}
                        </DataTable.Cell>
                        <DataTable.Cell
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <TouchableOpacity style={{ marginRight: 10 }}>
                            <FontAwesome5
                              name="pen"
                              size={16}
                              color="#898989"
                            />
                          </TouchableOpacity>
                          <TouchableOpacity>
                            <Feather name="trash-2" size={16} color="#AE111C" />
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
            disabled={currentPage * itemsPerPage >= userDetails.length}
          >
            <Text
              style={{
                marginHorizontal: 20,
                opacity:
                  currentPage * itemsPerPage >= userDetails.length ? 0.5 : 1,
              }}
            >
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenView>
  );
};

export default ManagePatientsScreen;
