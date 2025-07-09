import { translations } from "../../config/translations";
import { Container } from "../Container/Container";
import S from "./Footer.module.css";

export function Footer(props) {
  const { copyright } = translations[props.language];
  return (
    <div className={S.container}>
      <Container>{copyright}</Container>
    </div>
  );
}
