import { ClassNames } from "@emotion/react";
import { useRouter } from "next/router";
import classes from "./index.module.css"
export default function LandingPageButton(props) {
  const router = useRouter();
  const nextPageHandler = () => {
    router.push(props.url);
  };
  return (

      <div className={classes.button} style={{ ...props.style }} onClick={nextPageHandler}>{props.name}</div>

  );
}
