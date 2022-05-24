import classes from "./index.module.css";
import Comment from "../../../../container/Feed/Comment";
import Avatar from "@mui/material/Avatar";
import { auth } from "../../../../firebase";
import { User } from "../../../../lib/api";
import { useState, useEffect } from "react";
// import Comments from "../../../../lib/api/comment";
import withAuth from "../../../../helpers/withAuth";
import CommentApi from "../../../../lib/api/comment";
import { parseCookies } from "../../../../helpers/cookie";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import InboxIcon from "@mui/icons-material/Inbox";
import { useRouter } from "next/router";

function Comments(props) {
  const [value, setValue] = useState("");
  const { comments } = props;
  const [fakedComment, setFakedComment] = useState(comments);
  const router = useRouter();
  const { postId } = router.query;
  const user = auth.currentUser;
  const cookies = parseCookies();
  const [photo, setPhoto] = useState("");
  const { token } = cookies;
  useEffect(async () => {
    try {
      const userDetail = await User.get({
        type: User.GET_USER_BY_ID,
        token,
        body: {
          uid: user.uid,
        },
      });
      setPhoto(userDetail.data.data.photoURL);
    } catch (error) {
      console.log(error);
    }
  }, []);

  // METHOD TO ADD COMMENT
  const addComment = async () => {
    const cookies = parseCookies();
    const { token } = cookies;

    console.log("postId", postId);

    try {
      const comment = await CommentApi.postComment({
        token,
        body: {
          postId: postId,
          content: value,
        },
      });
      console.log("comment", comment.data.data[0]);
      const chunk = [...fakedComment, comment.data.data[0]];
      setFakedComment(chunk);
      setValue("");
      console.log("comment hereeeee", fakedComment);
    } catch (error) {
      console.log("Errorrr", error);
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className={classes.container}>
      {fakedComment.length == 0 && (
        <div className={classes.loadingBg}>
          <InboxIcon style={{ fontSize: 100 }} />
          <div>Comment is empty</div>
        </div>
      )}

      {fakedComment.length == 0 && (
        <div className={classes.loadingBg}>
          <InboxIcon style={{ fontSize: 100 }} />
          <div>Comment is empty</div>
        </div>
      )}

      <div className={classes.header}>Comment</div>

      {fakedComment && (
        <div className={classes.comments}>
          {fakedComment.map((comment) => (
            <Comment comment={comment} />
          ))}
        </div>
      )}

      <div className={classes.commentPanel}>
        <div className={classes.comment}>
          <Avatar
            alt="Remy Sharp"
            src={
              "https://se-community-2022.s3.ap-southeast-1.amazonaws.com/" +
              photo
            }
            style={{ marginRight: "10px" }}
          />

          <TextField
            id="outlined-multiline-static"
            onChange={handleChange}
            value={value}
            multiline
            rows={1}
            placeholder="Write a comment..."
            style={{
              width: "100%",
              marginLeft: 10,
              marginRight: 10,
              backgroundColor: "white",
              borderRadius: 10,
            }}
          />
          <Button
            variant="contained"
            style={{ height: 50, backgroundColor: "#ff8a00" }}
            onClick={addComment}
          >
            send
          </Button>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Comments);

export async function getServerSideProps({ req, query }) {
  const cookies = parseCookies(req);
  const { token } = cookies;
  const { postId } = query;
  console.log("postId", postId);
  try {
    const comments = await CommentApi.getComments({
      token,
      body: { postId },
    });

    return {
      props: { token, comments: comments.data.data, postId },
    };
  } catch (error) {
    console.log("Error", error);
  }
  return { props: { comments: [] } };
}
