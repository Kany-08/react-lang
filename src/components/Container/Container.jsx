import classNames from "classnames";
import S from "./Container.module.css";

export function Container(props) {
  return (
    <div {...props} className={classNames(props.className, S.container)}></div>
  );
}
