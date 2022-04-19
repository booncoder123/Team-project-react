import classes from "./index.module.css";
import Image from "next/image";
import Avatar from "@mui/material/Avatar";
import TextField from "../../components/TextField";
export default function JobPost(props) {
  // const { value, setValue } = props;

  return (
    <div className={classes.JobPost} onClick={()=>{props.onClick()}}>
      <div className={classes.logo}>
        <img
          src={
            "https://se-community-2022.s3.ap-southeast-1.amazonaws.com/" +
            props.photo
          }
          width="35"
          height="35"
        />
      </div>
      <div className={classes.content}>
        {/* companyname */}
        <div className={classes.companyName}>{props.companyName}</div>
        <div className={classes.jobTitle}>{props.jobTitle}</div>
        <div className={classes.jobIntro}>{props.jobIntro}</div>
        <div></div>
      </div>
    </div>
  );
}
