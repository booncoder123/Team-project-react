import classes from "./index.module.css";
import { useRouter } from "next/router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { discussions } from "../../../const/mockUp.js";
import JobPost from "../../../container/JobPost";
import withAuth from "../../../helpers/withAuth";

function MyJobs() {
  const router = useRouter();
  function nextPagehandler() {
    router.push("/Profile");
  }
  return (
    <div className={classes.container}>
      <div className={classes.title}>My Jobs</div> 
      <div className={classes.banner}>
        <ArrowBackIosIcon sx={{ fontSize: 15 }} onClick={nextPagehandler} />
        My Posts
      </div> 
      <div className={classes.content}>
      {discussions.map((discussion) => {
        return (
          <JobPost
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

export default withAuth(MyJobs);