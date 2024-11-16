import { Link } from "react-router-dom";
import Notification from "../../components/Notification/Notification";
import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <Notification>
      <h1>NOT FOUND PAGE</h1>
      <p>
        Follow this <Link to="/">link</Link> please
      </p>
    </Notification>
  );
};

export default NotFoundPage;
