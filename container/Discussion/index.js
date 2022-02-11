import classes from "./index.module.css"
import ActivityButtonWithNumber from "../../components/ActivityButtonWithNumber"
import ProfileTag from "../../components/ProfileTag";
export default function Discussion(props) {
  const {title,images,like,comment,name,time} = props;
    return (
      <div className={classes.Discussion}>
        <ProfileTag name={name} time={time}/>
        <div className={classes.heading1}>{title}</div>
        <div className={classes.ActivityButton}>
        <ActivityButtonWithNumber value={like}/>
        <ActivityButtonWithNumber value={comment}/>
        </div>
      </div>
    )
  }
  