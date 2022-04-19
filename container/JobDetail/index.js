import classes from "./index.module.css";
import RectangularButton from "../../components/RectangularButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useRouter } from "next/router";
export default function JobDetailContainer(props) {
  const router = useRouter();
  return (
    <div className={classes.JobDetail}>
        
      <div className={classes.content}>
      <div className={classes.banner}>
        <ArrowBackIosIcon sx={{ fontSize: 15 }} onClick={()=>{router.push("/Feed/Jobs")}} />
        Back
      </div> 
        <div className={classes.jobTitle}>{props.companyName}</div>
        <div className={classes.jobIntro}>
          <div>Position: {props.title}</div>
          <div>Type: {props.type}</div>
          

         
        </div>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.button}>
          <RectangularButton
            style={{
              backgroundColor: "#F08F34",
              width: "50%",
              justifyContent: "center",
            }}
            url="/SignIn"
            name="Apply Now"
          />
        </div>
      </div>
    </div>
  );
}
