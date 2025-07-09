import { useContext } from "react";
import { LanguageContext } from "../../config/context";

const languages = [
  {
    id: "ru",
    title: "Русский",
  },
  {
    id: "de",
    title: "Deutsch",
  },
  {
    id: "en",
    title: "English",
  },
];

export function LanguageSwitch() {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        {languages.map((lang) => (
          <option key={lang.id} value={lang.id}>
            {lang.title}
          </option>
        ))}
      </select>
    </div>
  );
}
