import FeatureList from "../../../container/Feed/FeatureList";
import classes from "./index.module.css";
import { useState } from "react";
import FeatureDropDown from "../../../components/FeedDropDown";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function Layout(props) {
  const [type, setType] = useState(0);
  const { nextPageHandler } = props;

  return (
    <div className={classes.content}>
      <div className={classes.header}>
        <div className={classes.row}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flex: 1,
            }}
          >
            <FeatureDropDown feature={"Feed"} />

            <AddCircleOutlineIcon fontSize="large" onClick={nextPageHandler} />
          </div>
        </div>
      </div>

      <FeatureList value={type} setValue={setType} />
      <div className={classes.layout}>{props.children}</div>
    </div>
  );
}
