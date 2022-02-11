import classes from "./index.module.css";
import { discussions } from "../../../const/mockUp.js";
import JobPost from "../../../container/JobPost";
import { useState } from "react";
import Layout from "../../../components/Layout/Feed";

import Searchbar from "../../../components/SearchBar";
import Dropdown from "../../../components/Dropdown";
export default function Discussions() {
  const [postMessage, setPostMessage] = useState("");
  return (
    <Layout>
      <div className={classes.filter}>
        <div className={classes.Searchbar}>
          <Searchbar />
        </div>
        <div className={classes.Dropdown}>
          <Dropdown />
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
