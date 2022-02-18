import classes from "./index.module.css";
import Avatar from "@mui/material/Avatar";
export default function ProfileTag() {
  return (
    <div className={classes.tag}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <div className={classes.heading1}>nnevermine · 1h </div>
    </div>
  );
}
