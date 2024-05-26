import { createContext, useReducer } from "react";

// Create the ThemeContext
export const ThemeContext = createContext();

// Create a reducer function to handle changes to the theme
const ThemeReducer = (state, action) => {
  switch (action.type) {
    // When the color is changed, update the state
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };

    // Return the original state for any other actions
    default:
      return state;
  }
};

// Create a ThemeProvider component to wrap the app and provide the theme context
export function ThemeProvider({ children }) {
  // Use the useReducer hook to create the initial state and dispatch function
  let [state, disPatch] = useReducer(ThemeReducer, { color: "blue" });

  // Create a function to update the theme state
  const updateThemeState = (color) => {
    disPatch({ type: "CHANGE_COLOR", payload: color });
  };

  // Return the ThemeContext.Provider with the state and updateThemeState function
  return (
    <ThemeContext.Provider value={{ ...state, updateThemeState }}>
      {children}
    </ThemeContext.Provider>
  );
}
