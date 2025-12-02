import { useSelector } from "react-redux";
import styles from "./UserTitle.module.scss";
import { selectUserTitle } from "../../store/user/user-selectors";

interface UserTitleProps {}

export const UserTitle = ({}: UserTitleProps) => {
  const userTitle = useSelector(selectUserTitle);

  return (
    <div className={styles.userTitle}>
      <img src={userTitle.image} alt="" />
      <div className={styles.userTitleInfo}>
        <h2>{userTitle.name}</h2>
        <a href={userTitle.webSite}>@{userTitle.userName}</a>
        <p>{userTitle.joined}</p>
        <p>{userTitle.desc}</p>
      </div>
    </div>
  );
};
