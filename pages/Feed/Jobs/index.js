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

  //Variables and functions
  const types = [
    { label: "full-time" },
    { label: "part-time" },
    { label: "intern" },
  ];
  const [searchValue, setSearchValue] = useState("");
  const [type, setType] = useState(null);
  const [inputType, setInputType] = useState("");

  const handleType = (event, newValue) => {
    setType(newValue);
  };
  const handleInputType = (event, newInputValue) => {
    setInputType(newInputValue);
  };

  //Filter function
  const jobList = props.jobs.data
  const searchHandler = (searchValue) => {
    if(searchValue != null) {
      const newJobList = jobList.filter((job) => {
        const searchString = Object.values(searchValue).join(" ").toLowerCase()
        return Object.values(job).join(" ").toLowerCase().includes(searchString)
      });
      return newJobList
    }
    else {
      return jobList
    }
  }
  const searchResults = searchHandler(searchValue)
  const dropDownResults = searchHandler(type)
  
  //Intersection
  const filteredArrayFunc = (list1, list2) => {
    const data = [list1, list2]
    return data.reduce((a, b) => a.filter(c => b.includes(c)))
  }
  const filteredArray = filteredArrayFunc(searchResults, dropDownResults)

  return (
    <Layout nextPageHandler={() => {router.push(`/Feed/Jobs/JobCreatePost/`);}}>
      <div className={classes.filter}>
        <div className={classes.Searchbar}>
          <SearchBar 
          placeholder="Search..." 
          options={props.jobs.data}
          setValue={setSearchValue}/>
        </div>
        <div className={classes.Dropdown}>
          <Dropdown
            placeholder="Type"
            options={types}
            setValue={setType}
            onChange={handleType}
            // inputValue={inputType}
            setInputValue={setInputType}
            onInputChange={handleInputType}
          />
        </div>
      </div>
      <div
      >
        {filteredArray.map((discussion) => {
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
