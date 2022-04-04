import classes from "./index.module.css";
import FeatureDropDown from "/container/Feed/FeatureDropDown";
import JobDetailContainer from "../../../../container/JobDetail"
import { useState } from "react";
import Layout from "../../../../components/Layout/Jobs";
import withAuth from "../../../helpers/withAuth";

function JobDetail() {
const [postMessage, setPostMessage] = useState("");
const [type, setType] = useState(0)
    return(
      <div className={classes.bg}>
        <Layout>
          <JobDetailContainer/>
        </Layout>
        
      </div>
    );
}

export default withAuth(JobDetail);