import styles from "./Search.module.scss";
import iconSearch from "../../assets/icon-search.svg";

interface SearchProps {}

export const Search = ({}: SearchProps) => (
  <form className={styles.search}>
    <img src={iconSearch} alt="" />
    <input className={styles.input} type="text" placeholder="Search by githun username..."/>
    <button className={styles.btn}>Search</button>
  </form>
);
