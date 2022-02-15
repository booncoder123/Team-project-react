import classes from "./index.module.css";
import FeatureDropDown from "/container/Feed/FeatureDropDown";
import JobDetailContainer from "../../../../container/JobDetail"

export default function JobDetail() {
    return(
      <div className={classes.bg}>
        <div>
          <JobDetailContainer/>
        </div>
        
      </div>
    );
}