import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import classes from "./index.module.css";

export default function LikeButton(props) {
  return (
    <div className={classes.reactButton}>
        <Checkbox
          icon={<FavoriteBorder sx={{ color: "#ff8a00" }} />}
          checkedIcon={<Favorite sx={{ color: "#ff8a00" }} />}
          onClick={()=>{props.onClicked()}} 
        />
      <div className={classes.number}>{props.numLikes}</div>
    </div>
  );
}

