import classes from "./index.module.css";
import { discussions } from "../../../const/mockUp.js";
import JobPost from "../../../container/JobPost";
import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout/Feed";
import withAuth from "../../../helpers/withAuth";
import SearchBar from "../../../components/SearchBar";
import Dropdown from "../../../components/Dropdown";
import Jobs from "../../../lib/api/jobs";
import { parseCookies } from "../../../helpers/cookie";
import { push } from "draft-js/lib/EditorState";
import JobCreatePost from "./JobCreatePost";
function JobDetails(props) {
  const [postMessage, setPostMessage] = useState("");
  const router = useRouter();
  const nextPageHandler = (title) => {
    // router.query.SUBPAGE = title;
    router.push(`Jobs/JobDetails?jobId=${title}`);
  };

  //Type Options
  const [searchValue, setSearchValue] = useState("");

  const types = [
    { label: "full-time" },
    { label: "part-time" },
    { label: "intern" },
  ];
  const allJobs = []
  for (const item of props.jobs.data) {
    allJobs.push({companyName: item.companyName, position: item.title});
  }

  const tempJob = []
  tempJob.push({
    companyName: 'robert walters bangkok',
    title: "director of software engineering",
    images: ["jobs/625537168acdc12495a56f63/ac820eeefd3078aab7669d3d6fe752c9e8e9a6f9-ab3c-4fd8-bb49-f73467fc0a4c.jpeg"],
    description: "<p>as a vice president of engineering to director level, you will work on critical areas with a focus on working effectively in a highly collaborative, cross-functional environment. you’ll be responsible for leading the engineering team and driving the core product. this headcount will be another management position who help planning on people development strategy to drive the technical career path for all product, software engineer team. the salary offered is competitive with healthcare insurance.</p>",
  })
  console.log(props.jobs.data[0])
  if (searchValue !== null ) { 
    console.log('search value', searchValue.companyName)

  }

  const [type, setType] = useState(null);
  const [inputType, setInputType] = useState("");

  const handleType = (event, newValue) => {
    setType(newValue);
  };
  const handleInputType = (event, newInputValue) => {
    setInputType(newInputValue);
  };
  return (
    <Layout nextPageHandler={() => {router.push(`/Feed/Jobs/JobCreatePost/`);}}>
      <div className={classes.filter}>
        <div className={classes.Searchbar}>
          <SearchBar 
          placeholder="Search..." 
          options={allJobs}
          setValue={setSearchValue}/>
        </div>
        <div className={classes.Dropdown}>
          <Dropdown
            placeholder="Type"
            options={types}
            setValue={setType}
            onChange={handleType}
            inputValue={inputType}
            setInputValue={setInputType}
            onInputChange={handleInputType}
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
              photo={discussion.images}
              jobIntro={discussion.description}
              onClick={() => {
                nextPageHandler(discussion._id);
              }}
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
