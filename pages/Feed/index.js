import classes from "./index.module.css";
import FeatureDropDown from "../../container/Feed/FeatureDropDown";
import FeatureList from "../../container/Feed/FeatureList";
import Discussion from "../../container/Discussion";
import {discussions} from "../../const/mockUp.js";
import DiscussionPost from "../../container/DiscussionPost"
import { useState } from "react";
import Layout from "../../components/Layout/Feed";
export default function Feed() {
 const [postMessage, setPostMessage] = useState("");
 const [type, setType] = useState(0)
  return (
    <Layout>
      
    </Layout>
  );
}

