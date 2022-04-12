import classes from "./index.module.css";
import ActivityButtonWithNumber from "../../components/ActivityButtonWithNumber";
import ProfileTag from "../../components/ProfileTag";
import Image from "next/image";
import ShowMoreText from "react-show-more-text";

export default function Discussion(props) {
  const { title, images, like, comment, user } = props;
  // console.log(user)
  return (
    <div className={classes.Discussion}>
      <ProfileTag name={user.username} photo={user.photoURL}/>
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
        <ActivityButtonWithNumber
          value={like}
          icon={() => (
            <Image
              objectPosition="center"
              alt={"shop icon"}
              src={"/Feed/Like.svg"}
              objectFit="contain"
              width={16}
              height={12}
            />
          )}
          onClick={() => {}}
        />
        <ActivityButtonWithNumber
          value={comment}
          icon={() => (
            <Image
              objectPosition="center"
              alt={"shop icon"}
              src={"/Feed/Comment.svg"}
              objectFit="contain"
              width={16}
              height={12}
            />
          )}
          onClick={() => {}}
        />
      </div>
    </div>
  );
}