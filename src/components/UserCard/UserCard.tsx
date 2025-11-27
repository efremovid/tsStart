import { UserInfo } from "../UserInfo";
import { UserStat } from "../UserStat";
import { UserTitle } from "../UserTitle";
import styles from "./UserCard.module.scss";

interface UserCardProps {}

export const UserCard = ({}: UserCardProps) => (
  <div className={styles.userCard}>
    <UserTitle />
    <UserStat />
    <UserInfo />
  </div>
);
