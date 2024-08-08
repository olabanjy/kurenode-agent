import React from "react";

import { createContext, ReactNode, useState } from "react";
import { _setToken, setStorage } from "../utils/storage";

type AuthContextProviderProps = {
  children: ReactNode;
};
export type ContextProviderProps = {
  userInfo: { [key: string]: any };
  updateUserInfo: (userInfo: { [key: string]: any }) => void;
  userToken: string;
  updateUserToken: (token: string) => void;
};

export const AuthContext = createContext<ContextProviderProps | null>(null);
export default function AuthContextProvider({
  children,
}: AuthContextProviderProps) {
  const [userInfo, setUserInfo] = useState<Record<string, any>>({});
  const [userToken, setUserToken] = useState<string>("");
  const updateUserInfo = (newUserInfo: { [key: string]: any }) => {
    setUserInfo((prevUserInfo) => {
      const updatedUserInfo = { ...prevUserInfo, ...newUserInfo };
      setStorage("userInfo", JSON.stringify(updatedUserInfo));
      return updatedUserInfo;
    });
  };
  const updateUserToken = (token: string) => {
    setUserToken(token);
    _setToken(token);
  };
  return (
    <AuthContext.Provider
      value={{
        userInfo,
        updateUserInfo,
        userToken,
        updateUserToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
