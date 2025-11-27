import styles from './UserTitle.module.scss';

interface UserTitleProps { }

export const UserTitle = ({ }: UserTitleProps) => (
  <div className={styles.userTitle}>
    <img src="" alt="" />
    <div className={styles.userTitleInfo}>
      <h2>Канье Уэст</h2>
      <a href="">@...</a>
      <p>Joined...</p>
      <p>frontend developer</p>
    </div>
  </div>
);
