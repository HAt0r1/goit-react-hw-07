import { TailSpin } from "react-loader-spinner";
import style from "./Loader.module.css";
const Loader = () => {
  return (
    <TailSpin color="#2077e1" visible={true} wrapperClass={style.loader} />
  );
};

export default Loader;
