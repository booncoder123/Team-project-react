import classes from "./index.module.css";
import RectangularButton from "../../../../components/RectangularButton";
import SingleImageUpload from "../../../../components/SingleImageUpload";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import withAuth from "../../../../helpers/withAuth";
import { parseCookies } from "../../../../helpers/cookie";
import WYSIWYGEditor from "../../../../components/Editor";
import Discussions from "../../../../lib/api/discussions";

const CreateDiscussion = (props) => {
  //Values and Set Values
  const [postType, setPostType] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");

  console.log("image from front", image);

  //Functions
  const router = useRouter();
  const handlePostType = (postType) => {
    setPostType(postType);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };
  const handleSubmit2 = () => {
    console.log(image);
    console.log(description);
    console.log(typeof description);
  };
  const handleSubmit = () => {
    console.log("***this is posting a job");
    console.log(description, postType);

    const cookie = parseCookies();
    const { token } = cookie;
    console.log(token);
    postDataToDatabase(token);

    // router.push('/Feed/Discussions/')
  };
  const handleCancel = () => {
    router.push("/Feed/Discussions");
  };
  const postDataToDatabase = async (token) => {
    try {
      const formData = new FormData();
      formData.append("description", description);
      formData.append("postType", "discussion");
      formData.append("images", image);
      // for (let i = 0; i < image.length; i++) {
      //   formData.append("images", image[i]);
      // }
      // formData.append("likers", []);

      const result = await Discussions.post({
        type: Discussions.CREATE_DISCUSSIONS,
        body: formData,
        token,
      });
      console.log("Result", result);
      router.push("/Feed/Discussions");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>Post Discussion</div>
      <div className={classes.commentPanel}>
        <WYSIWYGEditor setValue={setDescription} height={"200px"} />
        <SingleImageUpload setImage={setImage} />
      </div>
      <div className={classes.button}>
        <RectangularButton
          onClick={handleSubmit}
          style={{
            backgroundColor: "#F08F34",
            width: "100%",
            justifyContent: "center",
            marginRight: 31,
          }}
          name="Post"
        />
        <RectangularButton
          onClick={handleCancel}
          style={{
            backgroundColor: "#424642",
            width: "100%",
            justifyContent: "center",
          }}
          name="Cancel"
        />
      </div>
    </div>
  );
};

export default withAuth(CreateDiscussion);
