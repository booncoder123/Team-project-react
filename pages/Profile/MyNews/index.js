import classes from "./index.module.css";
import { discussions } from "../../../const/mockUp.js";
import ProfileDiscussion from "../../../container/ProfileDiscussion";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useRouter } from "next/router";
import withAuth from "../../../helpers/withAuth";
import { parseCookies } from "../../../helpers/cookie";
import Profile from "../../../lib/api/profile";

function MyDiscussions(props) {
  const router = useRouter();
  console.log("props", props);
  function nextPagehandler() {
    router.push("/Profile");
  }
  return (
    <div className={classes.container}>
      <div className={classes.title}>My News</div>
      <div className={classes.banner}>
        <ArrowBackIosIcon sx={{ fontSize: 15 }} onClick={nextPagehandler} />
        My Posts
      </div>
      <div className={classes.content}>
        {props.newsDetail.data.map((news) => {
          return (
            <ProfileDiscussion
            title={news.description}
            images={news.images}
            postId={news._id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default withAuth(MyDiscussions);

export async function getServerSideProps({ req }) {
  const cookies = parseCookies(req);
  const { token } = cookies;
  try {
    const newsDetail = await Profile.get({
      type: Profile.GET_NEWS,
      token,
    });

    return {
      props: { token, newsDetail: newsDetail.data },
    };
  } catch (error) {
    console.log(error);
  }
  return { props: {} };
}