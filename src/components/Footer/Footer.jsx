import { useContext } from "react";
import { translations } from "../../config/translations";
import { Container } from "../Container/Container";
import S from "./Footer.module.css";
import { LanguageContext } from "../../config/context";

export function Footer() {
  const { language } = useContext(LanguageContext);
  const { copyright } = translations[language];
  return (
    <div className={S.container}>
      <Container>{copyright}</Container>
    </div>
  );
}
