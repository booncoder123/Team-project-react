import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import classes from "./index.module.css";
import { useState } from "react";

export default function LikeButton(props) {
  const [checked, setChecked] = useState(props.clicked);
  return (
    <div className={classes.reactButton}>
        <Checkbox
          icon={<FavoriteBorder sx={{ color: "#ff8a00" }} />}
          checkedIcon={<Favorite sx={{ color: "#ff8a00" }} />}
          onClick={()=>{props.onClicked()
          setChecked(!checked)}} 
          checked={checked}
        />
      <div className={classes.number}>{props.numLikes}</div>
    </div>
  );
}

