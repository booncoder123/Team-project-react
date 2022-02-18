import classes from "./index.module.css"
import Avatar from '@mui/material/Avatar';
import Image from "next/image";
import FeedDropDown from "../../../components/FeedDropDown";
export default function FeatureDropDown() {
    const handleClick = () =>{
      alert("click");
      <FeedDropDown/>
    }
    return (
      <div className={classes.featureDropDown}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{marginRight:"10px"}} />
            {/* <div className={classes.title}>Feed</div>
            <Image
            objectPosition="absolute"
            alt={"shop icon"}
            src={"/Feed/Down.svg"}
            width={20}
            height={30}
           layout="fixed"
           onClick={handleClick}
          /> */}
          <FeedDropDown/>

      </div>
    )
  }
  