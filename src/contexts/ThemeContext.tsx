import { useState, useContext, createContext } from "react";

export type themeContentType = {
  bg: string;
  syntax: string;
  ui: string;
};

type themeType = {
  light: themeContentType;
  dark: themeContentType;
  isLightTheme: boolean;
};

export type themeContextType = {
  theme: themeType;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<themeContextType | null>(null);

export const useThemeContext = () => useContext(ThemeContext);

const ThemeContextProvider = ({ children }: React.PropsWithChildren) => {
  const [theme, setTheme] = useState<themeType>({
    light: { bg: "#f5f5f5d8", syntax: "#212529", ui: "#ffffff" },
    dark: { bg: "#262525", syntax: "#f5f5f5d8", ui: "#c1b8b8" },
    isLightTheme: true,
  });

  const toggleTheme = () => {
    setTheme((currentTheme) => ({
      ...currentTheme,
      isLightTheme: !currentTheme.isLightTheme,
    }));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme } as themeContextType}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
