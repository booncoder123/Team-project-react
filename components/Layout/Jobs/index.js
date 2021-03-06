import FeatureList from "../../../container/Feed/FeatureList";
import classes from "./index.module.css";
import { useState } from "react";
import FeatureDropDown from "../../../components/FeedDropDown";

export default function Layout(props) {
  const [type, setType] = useState(0);
  return (
    <div className={classes.content}>
      <div className={classes.header}>
        <FeatureDropDown feature={"Jobs"} />
      </div>

      {/* <FeatureList value={type} setValue={setType}/> */}
      <div className={classes.layout}>{props.children}</div>
    </div>
  );
}
