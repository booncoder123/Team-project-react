import classes from "./index.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
export default function ActivityButtonWithNumber(props) {
  const {value,icon,onClick} = props;
  const router = useRouter();
  const nextPageHandler = (page) => {
 
    router.push(`/Feed/Discussions/Comments`);
  };
  return (
    <div className={classes.activityButton} onClick={nextPageHandler}>
        {icon()}
          <div className={classes.number}>{value}</div>
     
    </div>
  );
}
