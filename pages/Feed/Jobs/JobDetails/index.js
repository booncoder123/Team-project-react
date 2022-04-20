import classes from "./index.module.css";
import FeatureDropDown from "/container/Feed/FeatureDropDown";
import JobDetailContainer from "../../../../container/JobDetail";
import { useState } from "react";
import Layout from "../../../../components/Layout/Jobs";
import withAuth from "../../../../helpers/withAuth";
import Jobs from "../../../../lib/api/jobs";
import { parseCookies } from "../../../../helpers/cookie";
function JobDetail(props) {
  const [postMessage, setPostMessage] = useState("");


  const [type, setType] = useState(0);
  return (
    <div>

        <div className={classes.content}>
          <JobDetailContainer
            companyName={props.jobs.data.companyName}
            title={props.jobs.data.title}
            type={props.jobs.data.types}
            description={props.jobs.data.description}
          />
        </div>

    </div>
  );
}

export default withAuth(JobDetail);

export async function getServerSideProps(context) {
  const { req } = context;
  const cookies = parseCookies(req);
  const { token } = cookies;
  const jobId = context.query.jobId;

  try {
    const jobs = await Jobs.get({
      type: Jobs.GET_JOB_DETAIL,
      token,
      body: {
        jobId,
      },
    });
    return {
      props: { token, jobs: jobs.data },
    };
  } catch (error) {
    console.log(error);
  }
  return { props: {} };
}
