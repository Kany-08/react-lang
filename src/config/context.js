import { createContext } from "react";

export const LanguageContext = createContext({
  language: "de",
  setLanguage: (f) => f,
});
