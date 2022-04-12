import classes from "./index.module.css";
import { discussions } from "../../../const/mockUp.js";
import JobPost from "../../../container/JobPost";
import { useState } from "react";
import Layout from "../../../components/Layout/Feed";
import withAuth from "../../../helpers/withAuth";
import SearchBar from "../../../components/SearchBar";
import Dropdown from "../../../components/Dropdown";
function JobDetails() {
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
    </Layout>
  );
}

export default withAuth(JobDetails);
