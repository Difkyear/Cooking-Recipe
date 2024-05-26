import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const useTheme = () => {
  let result = useContext(ThemeContext);
  if (result === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return result;
};
