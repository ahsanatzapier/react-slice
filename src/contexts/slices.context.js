import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListener,
  createSliceArrayForUser,
  getUserSlicesFromArray,
} from "../utils/firebase.utils";

import { useContext } from "react";
import { UserContext } from "./user.context";

export const SlicesContext = createContext({
  currentSlices: {},
  setCurrentSlices: () => null,
});

export const SlicesProvider = ({ children }) => {
  const [currentSlices, setCurrentSlices] = useState(null);
  const value = {
    currentSlices,
    setCurrentSlices,
  };

  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createSliceArrayForUser(user);
      }
      const setSlices = async () => {
        const { slices } = await getUserSlicesFromArray(user);
        setCurrentSlices(slices);
      };

      setSlices();
    });
    return unsubscribe;
  }, []);

  return (
    <SlicesContext.Provider value={value}>{children}</SlicesContext.Provider>
  );
};
