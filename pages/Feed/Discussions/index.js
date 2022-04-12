import classes from "./index.module.css";
import { discussions } from "../../../const/mockUp.js";
import DiscussionPost from "../../../container/DiscussionPost";
import Discussion from "../../../container/Discussion";
import { useState } from "react";
import Layout from "../../../components/Layout/Feed";
import withAuth from "../../../helpers/withAuth";
import Post from "../../../lib/api/discussions";
import { parseCookies } from "../../../helpers/cookie";
import {useEffect} from "react";
function Discussions(props) {
  const [postMessage, setPostMessage] = useState("");
  // useEffect(async () => {
  //   try {
  //     const discussions = await Post.get({
  //       type: Post.GET_DISCUSSIONS,
  //       token,
  //     });
  //     console.log("discussions", discussions);
  //   } catch (error) {
  //     console.log("Errorrr", error);
  //   }
  // }, []);
  console.log(props);
  return (
    <Layout>
      <DiscussionPost value={postMessage} setValue={setPostMessage} />
      {props.discussions.data.map((discussion) => {
        return (
          <Discussion
            title={discussion.description}
            images={discussion.images[0]}
            like={discussion.like}
            comment={discussion.comment}
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
    return {
      props: {error: error.data, token},
    };
  }
  return {props: {}}
}
