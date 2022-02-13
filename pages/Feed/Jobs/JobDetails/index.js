import classes from "./index.module.css";
import FeatureDropDown from "/container/Feed/FeatureDropDown";


export default function SignIn() {
    return(
      <div className={classes.bg}>
        { <div className={classes.header}>
            <FeatureDropDown />
        </div> }
        
      </div>
    );
}