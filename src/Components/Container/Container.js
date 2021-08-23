import s from "./Container.module.css";
//рендерит своих детей
function Container({ children }) {
  return <div className={s.container}>{children}</div>;
}

export default Container;
