import classes from "./index.module.css";
import ProfileTag from "../../components/ProfileTag";
import Image from "next/image";
import ShowMoreText from "react-show-more-text";
import LikeButton from "../../components/LikeButton";
import CommentButton from "../../components/CommentButton";
import { useState } from "react";
import Post from "../../lib/api/discussions";
import { parseCookies } from "../../helpers/cookie";

export default function Discussion(props) {
  const { title, images, like, comment, user, id } = props;
  // const [counter, setCounter] = useState(props.like);
  console.log(title,like)
  const counter = props.like
  const cookie = parseCookies();
  const { token } = cookie;
  console.log(counter);
  const [clicked, setClicked] = useState(false);
  const clickedLike = () => {
    counter+=1
    updateLike()
    // if (!clicked) {
    //   setCounter(counter + 1);
    //   console.log("counter jaaaaa", counter)
    //   updateLike();
    //   setClicked(true);
    // } else {
    //   setCounter(counter - 1);

    //   updateLike();
    //   setClicked(false);
    // }
  };
  const updateLike = async () => {
    try {
      const result = await Post.put({
        type: Post.PUT_DISCUSSIONS,
        body: {
          likes: counter,
          postId: id,
        },
        token,
      });
      console.log("Result", result);
    } catch (error) {
      console.log("error", error);
    }
  };
  console.log("likessss", like)
  return (
    <div className={classes.Discussion}>
      <ProfileTag name={user.username} photo={user.photoURL} />
      <div className={classes.heading1}>
        <ShowMoreText
          more={<span style={{ color: "#ff8a00" }}>Show More</span>}
          less={<span style={{ color: "#ff8a00" }}>Show less</span>}
          expanded={false}
          truncatedEndingComponent=" ... "
          width={800}
        >
          <p>{title}</p>
        </ShowMoreText>

        {images && (
          <img
            src={
              "https://se-community-2022.s3.ap-southeast-1.amazonaws.com/" +
              images
            }
            className={classes.img}
          />
        )}
      </div>
      <div className={classes.ActivityButton}>
        <LikeButton numLikes={like} onClicked={clickedLike} />
        <CommentButton numComments={comment} id={id} />
      </div>
    </div>
  );
}
