import { Link } from "react-router-dom";
import s from "./landing.module.css";

const LandingPage = () => {
  return (
    <div className={s.contenedor_landing}>
      <h1 className={s.title}>Food App !</h1>
      <Link className={s.link} to="/home" exact>
        WELCOME
      </Link>
    </div>
  );
};

export default LandingPage;
