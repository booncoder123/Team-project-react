import classes from "./index.module.css";
import Avatar from "@mui/material/Avatar";
export default function ProfileTag(props) {
  return (
    <div className={classes.tag}>
      <Avatar alt="Remy Sharp" src= {"https://se-community-2022.s3.ap-southeast-1.amazonaws.com/" +
            props.photo} />
      <div className={classes.heading1}>{props.name} · 1h </div>
    </div>
  );
}
