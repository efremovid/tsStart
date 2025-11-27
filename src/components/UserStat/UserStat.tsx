import styles from "./UserStat.module.scss";

interface UserStatProps {}

export const UserStat = ({}: UserStatProps) => (
  <div className={styles.userStat}>
    <div className={styles.userStatItem}>
      <p>repos</p>
      <p>25</p>
    </div>
    <div className={styles.userStatItem}>
      <p>followers</p>
      <p>25</p>
    </div>
    <div className={styles.userStatItem}>
      <p>following</p>
      <p>25</p>
    </div>
  </div>
);
