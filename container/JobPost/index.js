import classes from "./index.module.css";
import Image from "next/image";
import Avatar from "@mui/material/Avatar";
import TextField from "../../components/TextField";
export default function JobPost(props) {
  const { value, setValue } = props;

  return (
    <div className={classes.JobPost}>
      <div className={classes.logo}></div>
      <div className={classes.content}>
        <div className={classes.jobTitle}>Agoda.com</div>
        <div className={classes.jobIntro}>
          Associate Software Engineer, Back End team
        </div>
        <div className={classes.jobDetail}>
          Agoda is an online travel booking platform for accommodations,
          flights, and more. We build and deploy cutting-edge technology that
          connects travelers with more than 2.5 million accommodations globally.
          Based in Asia...
        </div>
        <div></div>
      </div>
    </div>
  );
}
