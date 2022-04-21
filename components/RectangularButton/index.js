import { ClassNames } from "@emotion/react";
import { useRouter } from "next/router";
import classes from "./index.module.css"
export default function RectangularButton(props) {
  const router = useRouter();

  const nextPageHandler = () => {
    console.log("Rectangularr",props)
    router.push(props.url);
  };
  return (

    // <div className={classes.button} style={{ ...props.style }} onClick={nextPageHandler}>{props.name}</div>
    <div className={classes.button} style={{ ...props.style }} onClick={() => {props.onClick()}} >{props.name}</div>

  );
}