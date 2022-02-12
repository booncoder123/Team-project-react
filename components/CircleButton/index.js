import classes from "./index.module.css";
import { Button } from "@mui/material";

export default function CircleButton(props) {
    return(
        <button
            type="submit"
            className={classes.submit}
          >
            {props.name}
        </button>
    );
}