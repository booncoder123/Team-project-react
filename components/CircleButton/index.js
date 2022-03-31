import classes from "./index.module.css";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
export default function CircleButton(props) {
  return (
    <button type="submit" className={classes.submit}>
      {props.name}
    </button>
  );
}
