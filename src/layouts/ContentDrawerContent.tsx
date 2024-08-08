import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import DashboardIcon from "../components/svg/DashboardIcon";
import { NavLinks } from "../data/tabSelection";
import { outfit } from "../constants/font";
import {
  NavigationProp,
  useNavigation,
  useNavigationState,
} from "@react-navigation/native";
import { destoryStorage, destoryToken } from "../utils/storage";
const CustomDrawerContent = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const currentRoute = useNavigationState(
    (state) => state.routes[state.index].name
  );
  const logoutUser = async () => {
    try {
      setIsLoggingOut(true);
      // Show "Logging out..." for a moment
      await destoryToken();
      await destoryStorage("userInfo");
      // Redirect to login or initial screen
      navigation.navigate("auth-stack", {
        screen: "login-screen",
      });
    } catch (error) {
      console.log(error);
      setIsLoggingOut(false); // Reset in case of error
    }
  };
  return (
    <View style={styles.drawerHeader}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={{ width: 152, height: 34 }}
      />
      <View style={{ flex: 2, marginTop: 40, gap: 12, width: "100%" }}>
        {NavLinks.map((list, index) => {
          const isActive = currentRoute === list.navigateLinks;
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate(list.navigateLinks)}
              style={{
                flexDirection: "row",
                gap: 12,
                alignItems: "center",
                height: 40,
                borderTopRightRadius: 5,
                borderBottomRightRadius: 5,
                width: 220,
                paddingLeft: 16,
                backgroundColor: isActive ? "#E0ECFD" : "",
              }}
              key={index}
            >
              {React.cloneElement(list.icon, {
                color: isActive ? "#126AE3" : "#595959",
              })}
              <Text
                style={[
                  {
                    fontSize: 16,
                    color: "#898989",
                    lineHeight: 24,
                    fontFamily: outfit,
                  },
                  isActive && { color: "#126AE3" },
                ]}
              >
                {list.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <TouchableOpacity
        onPress={() => logoutUser()}
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
          flex: 0.5,
          height: 70,
        }}
      >
        <MaterialIcons name="logout" size={24} color="black" />
        <Text>{isLoggingOut ? "Logging out..." : "Logout"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  drawerHeader: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F8F8F8",
    paddingTop: 20,
    paddingBottom: 24,
    flex: 0.4,
  },
});
