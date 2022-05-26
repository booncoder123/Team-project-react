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
  const { title, images, like, comment, user, id, clicked, likers } = props;
  const [counter, setCounter] = useState(props.like);
  // const counter = props.like
  const cookie = parseCookies();
  const { token } = cookie;

  const clickedLike = () => {
    updateLike();
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

      setCounter(result.data.data.likers.length);
    } catch (error) {
      console.log("error", error);
    }
  };
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
          {/* <div dangerouslySetInnerHTML={{__html: title}} /> */}
        </ShowMoreText>

        {images.length ? (
          <img
            src={
              "https://se-community-2022.s3.ap-southeast-1.amazonaws.com/" +
              images
            }
            className={classes.img}
          />
        ) : (
          <div></div>
        )}
      </div>
      <div className={classes.ActivityButton}>
        <LikeButton
          numLikes={counter}
          onClicked={clickedLike}
          clicked={likers.includes(user._id)}
        />
        <CommentButton numComments={comment} id={id} />
      </div>
    </div>
  );
}
