import classes from "./index.module.css"
import Avatar from '@mui/material/Avatar';
import FeedDropDown from "../../../components/FeedDropDown";
export default function FeatureDropDown() {
    return (
      <div className={classes.featureDropDown}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{marginRight:"10px"}} />
          <FeedDropDown p="Profile"/>

      </div>
    )
  }
  