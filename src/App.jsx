import S from "./App.module.css";

import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { useState } from "react";
import { LanguageContext } from "./config/context";

function App() {
  const [language, setLanguage] = useState("de");

  const contextValue = {
    language,
    setLanguage,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      <div className={S.container}>
        <Header language={language} />
        <Main className={S.main} language={language} />
        <Footer language={language} />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
