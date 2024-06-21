import { Dispatch, FC, ReactNode, createContext, useState } from "react";

interface ThemeProviderProvider {
  children: ReactNode;
}

export enum ThemeOption {
  dark = "dark",
  light = "light",
}

interface ThemeContextType {
  theme: ThemeOption;
  setTheme: Dispatch<React.SetStateAction<ThemeOption>>;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: ThemeOption.light,
  setTheme: () => {},
});

const ThemeProvider: FC<ThemeProviderProvider> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeOption>(ThemeOption.light);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
