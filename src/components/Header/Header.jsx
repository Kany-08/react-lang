import { LanguageSwitch } from "../LanguageSwitch/LanguageSwitch";
import S from "./Header.module.css";

export function Header({ language, onLanguageChange }) {
  return (
    <div className={S.container}>
      <LanguageSwitch value={language} onValueChange={onLanguageChange} />
    </div>
  );
}
