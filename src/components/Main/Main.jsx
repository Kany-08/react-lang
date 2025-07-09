import { Container } from "../Container/Container";
import { translations } from "../../config/translations";

export function Main(props) {
  const { welcome } = translations[props.language];
  return <Container {...props}>{welcome}</Container>;
}
