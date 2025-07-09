import { Container } from "../Container/Container";
import { translations } from "../../config/translations";
import { useContext } from "react";
import { LanguageContext } from "../../config/context";

export function Main(props) {
  const { language } = useContext(LanguageContext);
  const { welcome } = translations[language];
  return <Container {...props}>{welcome}</Container>;
}
