import classes from "./index.module.css";
import { useRouter } from "next/router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { discussions } from "../../../const/mockUp.js";
import ProfileJob from "../../../container/ProfileJob";
import withAuth from "../../../helpers/withAuth";
import {parseCookies} from "../../../helpers/cookie";
import Profile from "../../../lib/api/profile";

function MyJobs(props) {
  console.log(props)
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
      {props.jobDetail.data.map((job) => {
        return (
          <ProfileJob
            companyName={job.companyName}
            jobTitle={job.title}
            images={job.images[0]}
            jobIntro={job.description}
            jobId={job._id}
          />
        );
      })}
      </div>

    </div>
  );
}

export default withAuth(MyJobs);

export async function getServerSideProps({ req }) {
  const cookies = parseCookies(req);
  const { token } = cookies;
  try {
    const jobDetail = await Profile.get({
      type: Profile.GET_JOBS,
      token,
    });

    return {
      props: { token, jobDetail: jobDetail.data },
    };
  } catch (error) {
    console.log(error);
  }
  return { props: {} };
}