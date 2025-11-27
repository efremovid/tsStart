import { ThemeSwitcher } from "../ThemeSwitcher";
import styles from "./Header.module.scss";

interface HeaderProps {}

export const Header = ({}: HeaderProps) => (
  <div className={styles.header}>
    <h1>GithubFinder</h1>
    <ThemeSwitcher theme />
  </div>
);
