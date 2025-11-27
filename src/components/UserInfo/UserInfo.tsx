import styles from './UserInfo.module.scss';
import locationIcon from "../../assets/icon-location.svg"
import webSiteIcon from "../../assets/icon-website.svg"
import companyIcon from "../../assets/icon-company.svg"

interface UserInfoProps { }

export const UserInfo = ({ }: UserInfoProps) => (
  <div className={styles.userInfo}>
    <div>
      <img src={locationIcon} alt="" />
      <p>perm</p>
    </div>
  </div>
);
