import classes from "./index.module.css";
import Image from "next/image";
export default function ActivityButtonWithNumber() {
  return (
    <div className={classes.activityButton}>
         <Image
            objectPosition="center"
            alt={"shop icon"}
            src={"/Feed/Like.svg"}
            objectFit="contain"
            width={16}
            height={12}
          />
          <div className={classes.number}>260</div>
     
    </div>
  );
}
