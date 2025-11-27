import styles from "./ThemeSwitcher.module.scss";
import iconSun from "../../assets/icon-sun.svg";
import iconMoon from "../../assets/icon-moon.svg";

interface ThemeSwitcherProps {
  theme: boolean;
}

export const ThemeSwitcher = ({ theme }: ThemeSwitcherProps) => (
  <button className={styles.btn}>
    {theme ? (
      <div className={styles.btnContainer}>
        <p>LIGHT</p>
        <img src={iconSun} alt="" />
      </div>
    ) : (
      <div className={styles.btnContainer}>
        <p>DARK</p>
        <img src={iconMoon} alt="" />
      </div>
    )}
  </button>
);
