import classes from "./index.module.css";
import { discussions } from "../../../const/mockUp.js";
import DiscussionPost from "../../../container/DiscussionPost";
import Discussion from "../../../container/Discussion";
import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout/Feed";
import withAuth from "../../../helpers/withAuth";
import News from "../../../lib/api/news";
import { parseCookies } from "../../../helpers/cookie";
function NewsDetails(props) {
  const [postMessage, setPostMessage] = useState("");
  const router = useRouter();
  const newsLists = props.news;
  return (
    <Layout
      nextPageHandler={() => {
        router.push(`/Feed/News/CreateNews/`);
      }}
    >
      {newsLists.length ? (
        newsLists.map((discussion) => {
          console.log("discussion", discussion);
          return (
            <Discussion
              title={discussion.description}
              images={discussion.images}
              like={discussion.likers ? discussion.likers.length : 0}
              comment={discussion.comments.length}
              user={discussion.user}
              id={discussion._id}
              likers={discussion.likers}
            />
          );
        })
      ) : (
        <div />
      )}
    </Layout>
  );
}

export default withAuth(NewsDetails);

export async function getServerSideProps({ req }) {
  const cookies = parseCookies(req);
  const { token } = cookies;
  let newsList = [];
  try {
    const news = await News.get({
      type: News.GET_NEWS,
      token,
    });
    // console.log("news", news.data.data);
    newsList = news.data.data;
  } catch (error) {
    // return {
    //   props: {error: error.data, token},
    // };
  }
  return {
    props: { token, news: newsList },
  };
}
