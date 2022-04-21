import classes from "./index.module.css";
import { discussions } from "../../../const/mockUp.js";
import DiscussionPost from "../../../container/DiscussionPost";
import Discussion from "../../../container/Discussion";
import { useState } from "react";
import Layout from "../../../components/Layout/Feed";
import withAuth from "../../../helpers/withAuth";
import Post from "../../../lib/api/discussions";
import { parseCookies } from "../../../helpers/cookie";
import { useEffect } from "react";
function Discussions(props) {
  const [postMessage, setPostMessage] = useState("");

  return (
    <Layout>
      <DiscussionPost value={postMessage} setValue={setPostMessage} />
      {props.discussions.data.map((discussion) => {
        console.log("discussion", discussion);

        return (
          <Discussion
            title={discussion.description}
            images={discussion.images[0]}
            like={discussion.likers ? discussion.likers.length : 0}
            comment={discussion.comments.length}
            user={discussion.user}
            id={discussion._id}
            likers={discussion.likers}
          />
        );
      })}
    </Layout>
  );
}
export default withAuth(Discussions);

export async function getServerSideProps({ req }) {
  const cookies = parseCookies(req);
  const { token } = cookies;
  try {
    const discussions = await Post.get({
      type: Post.GET_DISCUSSIONS,
      token,
    });

    return {
      props: { token, discussions: discussions.data },
    };
  } catch (error) {
    console.log(error);
  }
  return { props: {} };
}
