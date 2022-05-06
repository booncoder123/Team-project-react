import classes from "./index.module.css";
import Avatar from "@mui/material/Avatar";
export default function Comment({comment}) {

  return (
    <div className={classes.JobPost}>
      <div className={classes.logo}>
        <Avatar alt="Remy Sharp" src={"https://se-community-2022.s3.ap-southeast-1.amazonaws.com/"+comment.user.photoURL} />
      </div>
      <div className={classes.content}>
        <div>{comment.user.username}</div>
        <div className={classes.jobDetail}>
         {comment.content}
          
        </div>
        <div></div>
      </div>
    </div>
  );
}
