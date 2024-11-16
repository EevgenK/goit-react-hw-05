import s from "./Notification.module.css";

const Notification = ({ children }) => {
  return <p className={s.notification}>{children}</p>;
};

export default Notification;
