import { Grid } from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader = () => (
  <Grid
    visible={true}
    height="150"
    width="150"
    color="var(--background-accent)"
    ariaLabel="grid-loading"
    radius="12.5"
  />
);

export default Loader;
