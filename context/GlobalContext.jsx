"use client";

const { useContext, createContext, useState } = require("react");

const UserContext = createContext();
const AuthUserContext = createContext()
const ShowNavModalContext = createContext();



export const useUsers = () => {
  return useContext(UserContext);
};

export const useAuthUser = () => {
  return useContext(AuthUserContext);
}

export const useshowNavModal = () => {
  return useContext(ShowNavModalContext);
};

export const GlobalProvider = ({ children }) => {
  const [users, setUsers] = useState();
  const [showNavModal, setShowNavModal] = useState(false);
  const [isAuthUser,setIsAuthUser] = useState(false);
  return (
    <UserContext.Provider value={[users, setUsers]}>
      <ShowNavModalContext.Provider value={[showNavModal, setShowNavModal]}>
        <AuthUserContext.Provider value={[isAuthUser, setIsAuthUser]} >

        {children}
        </AuthUserContext.Provider>
      </ShowNavModalContext.Provider>
    </UserContext.Provider>
  );
};
