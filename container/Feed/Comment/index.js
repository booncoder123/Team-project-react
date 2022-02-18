import classes from "./index.module.css";
import Avatar from "@mui/material/Avatar";
export default function Comment(props) {
  return (
    <div className={classes.JobPost}>
      <div className={classes.logo}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </div>
      <div className={classes.content}>
        
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
