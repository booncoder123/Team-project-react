import classes from "./index.module.css";
import { discussions } from "../../../const/mockUp.js";
import JobPost from "../../../container/JobPost";
import { useState } from "react";
import {useRouter} from "next/router";
import Layout from "../../../components/Layout/Feed";
import withAuth from "../../../helpers/withAuth";
import SearchBar from "../../../components/SearchBar";
import Dropdown from "../../../components/Dropdown";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Jobs from "../../../lib/api/jobs";
import { parseCookies } from "../../../helpers/cookie";
import { useRouter } from "next/router";
function JobDetails(props) {
  const [postMessage, setPostMessage] = useState("");
  const router = useRouter();
  const nextPageHandler = (title) => {
    // router.query.SUBPAGE = title;
    router.push(`Jobs/JobDetails?jobId=${title}`);
  };

  const types = [
    { title: "full-time" },
    { title: "part-time" },
    { title: "ta" },
  ];
  return (
    <Layout>
      <div style={{ marginBottom: "10px" }} onClick={() => nextPageHandler("Jobs/JobCreatePost")}>
          <AddCircleOutlineIcon fontSize="large" />
      </div>
      <div className={classes.filter}>
        <div className={classes.Searchbar}>
          <SearchBar placeholder="Search..." />
        </div>
        <div className={classes.Dropdown}>
          <Dropdown placeholder="Type"
          options={types}
          />
         
        </div>
      </div>
      <div

      >
        {props.jobs.data.map((discussion) => {
          return (
            <JobPost
              companyName={discussion.companyName}
              jobTitle={discussion.title}
              photo={discussion.images[0]}
              jobIntro={discussion.description}
              onClick={() => {nextPageHandler(discussion._id)}}
            />
          );
        })}
      </div>
    </Layout>
  );
}

export default withAuth(JobDetails);

export async function getServerSideProps({ req }) {
  const cookies = parseCookies(req);
  const { token } = cookies;
  try {
    const jobs = await Jobs.get({
      type: Jobs.GET_JOBS,
      token,
    });
    return {
      props: { token, jobs: jobs.data },
    };
  } catch (error) {
    console.log(error);
  }
  return { props: {} };
}
