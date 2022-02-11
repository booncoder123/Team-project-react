import classes from "./index.module.css";
import FeatureDropDown from "../../container/Feed/FeatureDropDown";
import FeatureList from "../../container/Feed/FeatureList";
import Discussion from "../../container/Discussion";
import {discussions} from "../../const/mockUp.js";
export default function Feed() {
  console.log(discussions)
  return (
    <div className={classes.feed}>
    <div className={classes.container}>
        <FeatureDropDown />
        <FeatureList/>
      </div>
      <div className={classes.container}>
        {
            discussions.map((discussion) => {
                return <Discussion title={discussion.title} images={discussion.images} like={discussion.like} comment={discussion.comment}/>
            })
        }
      </div>
    </div>
  );
}
