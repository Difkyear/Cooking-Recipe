import React from "react";
// styles
import "./ThemeSelect.css";

import { useTheme } from "../hooks/useTheme";

const themeColors = ["#58249c", "#249c6b", "#b70233"];
export default function ThemeSelect() {
  let { updateThemeState } = useTheme();
  return (
    <div className="theme-select">
      {themeColors.map((color) => (
        <div
          className="button"
          style={{ background: color }}
          key={color}
          onClick={() => updateThemeState(color)}
        />
      ))}
    </div>
  );
}
