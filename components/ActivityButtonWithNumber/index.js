import classes from "./index.module.css";
import Image from "next/image";
export default function ActivityButtonWithNumber(props) {
  const {value,icon} = props;
  return (
    <div className={classes.activityButton}>
        {icon()}
          <div className={classes.number}>{value}</div>
     
    </div>
  );
}
