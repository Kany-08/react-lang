import { Container } from "../Container/Container";
import { LanguageSwitch } from "../LanguageSwitch/LanguageSwitch";
import S from "./Header.module.css";

export function Header({ language }) {
  return (
    <div className={S.container}>
      <Container>
        <LanguageSwitch value={language} />
      </Container>
    </div>
  );
}
