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
  function nextPagehandler() {
    router.push("/Profile");
  }
  return (
    <div className={classes.container}>
      <div className={classes.title}>My Discussions</div>
      <div className={classes.banner}>
        <ArrowBackIosIcon sx={{ fontSize: 15 }} onClick={nextPagehandler} />
        My Posts
      </div>
      <div className={classes.content}>
        {props.discussions.data.map((discussion) => {
          return (
            <ProfileDiscussion
            title={discussion.description}
            images={discussion.images}
            postId={discussion._id}
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
    const discussions = await Profile.get({
      type: Profile.GET_DISCUSSIONS,
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