import classes from "./index.module.css";
import { discussions } from "../../../const/mockUp.js";
import JobPost from "../../../container/JobPost";
import { useState } from "react";
import Layout from "../../../components/Layout/Feed";
import withAuth from "../../../helpers/withAuth";
import SearchBar from "../../../components/SearchBar";
import Dropdown from "../../../components/Dropdown";
import Jobs from "../../../lib/api/jobs";
import { parseCookies } from "../../../helpers/cookie";
function JobDetails(props) {
  const [postMessage, setPostMessage] = useState("");
  return (
    <Layout>
      <div className={classes.filter}>
        <div className={classes.Searchbar}>
          <SearchBar placeholder="Search..."/>
        </div>
        <div className={classes.Dropdown}>
          <Dropdown placeholder="Type" />
         
        </div>
       
      </div>
      {props.jobs.data.map((discussion) => {
        return (
          <JobPost
            companyName = {discussion.companyName}
            jobTitle = {discussion.title}
            photo={discussion.images[0]}
            jobIntro={discussion.description}
          />
        );
      })}
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
    console.log(jobs);
    return {
      props: { token, jobs: jobs.data },
    };
  } catch (error) {
    console.log(error);
  }
  return { props: {} };
}
