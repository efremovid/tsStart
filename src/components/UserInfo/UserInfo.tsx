import styles from "./UserInfo.module.scss";
import locationIcon from "../../assets/icon-location.svg";
import webSiteIcon from "../../assets/icon-website.svg";
import companyIcon from "../../assets/icon-company.svg";
import { useSelector } from "react-redux";
import { selectUserLocation } from "../../store/user/user-selectors";

interface UserInfoProps {}

export const UserInfo = ({}: UserInfoProps) => {
  const userLocation = useSelector(selectUserLocation);

  return (
    <div className={styles.userInfo}>
      <div>
        <img src={locationIcon} alt="" />
        <p>{userLocation}</p>
      </div>
    </div>
  );
};
