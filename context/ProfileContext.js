import { createContext, useContext, useState } from "react";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);

  const saveProfile = (data) => {
    setProfile(data);
  };

  return (
    <ProfileContext.Provider value={{ profile, saveProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
