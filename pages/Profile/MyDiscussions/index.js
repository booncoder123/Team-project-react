import classes from "./index.module.css";
import { discussions } from "../../../const/mockUp.js";
import Discussion from "../../../container/Discussion";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useRouter } from "next/router";

export default function MyDiscussions() {
    const router = useRouter();
  function nextPagehandler(){
    router.push("/Profile");
  }
  return (
    <div className={classes.container}>
      <div className={classes.title}>My Discussions</div>
      <div className={classes.banner}>
        <ArrowBackIosIcon
          sx={{ fontSize: 15 }}          
          onClick={nextPagehandler}
        />
        My Projects
      </div>
      <div className={classes.content}>
      {discussions.map((discussion) => {
        return (
          <Discussion
            title={discussion.title}
            images={discussion.images}
            like={discussion.like}
            comment={discussion.comment}
          />
        );
      })}
      </div>
    </div>
  );
}
