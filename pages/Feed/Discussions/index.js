import classes from "./index.module.css";
import { discussions } from "../../../const/mockUp.js";
import DiscussionPost from "../../../container/DiscussionPost";
import Discussion from "../../../container/Discussion";
import { useState } from "react";
import Layout from "../../../components/Layout/Feed";
import withAuth from "../../../helpers/withAuth";

function Discussions(props) {
  const [postMessage, setPostMessage] = useState("");
  return (
    <Layout>
      <DiscussionPost value={postMessage} setValue={setPostMessage} />
      {discussions.map((discussion) => {
        return (
          <Discussion
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
export default withAuth(Discussions);

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
