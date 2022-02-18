import classes from "./index.module.css"
import ActivityButtonWithNumber from "../../components/ActivityButtonWithNumber"
import ProfileTag from "../../components/ProfileTag";
import Image from "next/image";

export default function Discussion(props) {
  const {title,images,like,comment,name,time} = props;
    return (
      <div className={classes.Discussion}>
        <ProfileTag name={name} time={time}/>
        <div className={classes.heading1}>{title}</div>
      { images  &&  <img src={images[0]} className={classes.img}/>}

        <div className={classes.ActivityButton}>
  
        <ActivityButtonWithNumber value={like} icon={ ()=><Image
            objectPosition="center"
            alt={"shop icon"}
            src={"/Feed/Like.svg"}
            objectFit="contain"
            width={16}
            height={12}
          />}
          onClick={()=>{}}/>
        <ActivityButtonWithNumber value={comment}  icon={ ()=><Image
            objectPosition="center"
            alt={"shop icon"}
            src={"/Feed/Comment.svg"}
            objectFit="contain"
            width={16}
            height={12}
          />}
          onClick={()=>{}}/>
        </div>
      </div>
    )
  }
  