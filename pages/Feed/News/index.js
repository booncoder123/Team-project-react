import classes from "./index.module.css";
import { discussions } from "../../../const/mockUp.js";
import DiscussionPost from "../../../container/DiscussionPost";
import Discussion from "../../../container/Discussion";
import { useState } from "react";
import Layout from "../../../components/Layout/Feed";
import withAuth from "../../../helpers/withAuth";
import JobDetailContainer from "../../../container/JobDetail";
import News from "../../../lib/api/news";
import { parseCookies } from "../../../helpers/cookie";
function NewsDetails(props) {
  const [postMessage, setPostMessage] = useState("");
  return (
    <Layout>
    
      {props.news.data.map((discussion) => {
        console.log("discussion", discussion);
        return (
          <Discussion
            title={discussion.description}
            images={discussion.images}
            like={ discussion.likers ? discussion.likers.length : 0}
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

export default withAuth(NewsDetails);

export async function getServerSideProps({ req }) {
  const cookies = parseCookies(req);
    const { token } = cookies;
  try {
    
    const news = await News.get({
      type: News.GET_NEWS,
      token,
    });
    return {
      props: { token, news: news.data },
    };
  } catch (error) {
    // return {
    //   props: {error: error.data, token},
    // };
  }
  return {props: {}}
}
