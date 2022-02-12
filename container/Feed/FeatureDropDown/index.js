import classes from "./index.module.css"
import Avatar from '@mui/material/Avatar';
import Image from "next/image";
export default function FeatureDropDown() {
    return (
      <div className={classes.featureDropDown}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <div className={classes.title}>Feed</div>
            <Image
            objectPosition="center"
            alt={"shop icon"}
            src={"/Feed/Down.svg"}
            objectFit="contain"
            width={20}
            height={30}
          />

      </div>
    )
  }
  