import classes from "./index.module.css";
import TextField from "../../../../components/TextField";
import Dropdown from "../../../../components/Dropdown";
import RectangularButton from "../../../../components/RectangularButton";
import SingleImageUpload from "../../../../components/SingleImageUpload";
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import withAuth from "../../../../helpers/withAuth";
import { parseCookies } from "../../../../helpers/cookie";
import WYSIWYGEditor from "../../../../components/Editor";
import News from "../../../../lib/api/news";


const CreateNews = (props) => {
  //Values and Set Values
  const [postType, setPostType] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");

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
    console.log(description)
    console.log(typeof description)
  }
  const handleSubmit = () => {
    console.log('***this is posting a job')
    console.log(description, postType)
    
    const cookie = parseCookies()
    const { token } = cookie
    console.log(token)
    postDataToDatabase(token);

    // router.push('/Feed/News/')
  };
  const handleCancel = () => {
    router.push('/Feed/News/')
  };
  const postDataToDatabase = async (token) => {
    try {
      const formData = new FormData();
      formData.append("description", "this is des");
      formData.append("postType", "news");
      formData.append("images", [""]);
      formData.append("likers", []);

      const result = await News.post({
        type: News.CREATE_NEWS,
        body: formData,
        token,
      });
      console.log("Result", result);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>Post News</div>
      <div className={classes.commentPanel}>
        <WYSIWYGEditor 
        setValue={setDescription}
        height={'200px'}
        />
        <SingleImageUpload setImage={setImage}/>
      </div>
      <div className={classes.button}>
        <RectangularButton
          onClick={handleSubmit}
          style={{ backgroundColor: "#F08F34", width:"100%",justifyContent:"center",marginRight:31}}
          name="Post"
        />
        <RectangularButton
          onClick={handleCancel}
          style={{ backgroundColor: "#424642",width:"100%",justifyContent:"center"}}
          name="Cancel"
        />
      </div>
    </div>
  );
};
  
  export default withAuth(CreateNews);
  