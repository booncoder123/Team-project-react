import classes from "./index.module.css";
import TextField from "../../../../components/TextField";
import Dropdown from "../../../../components/Dropdown";
import RectangularButton from "../../../../components/RectangularButton";
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import withAuth from "../../../../helpers/withAuth"
import Test from "../../../../components/Draft"
import { parseCookies } from "../../../../helpers/cookie";
import Jobs from "../../../../lib/api/jobs";
import SingleImageUpload from "../../../../components/SingleImageUpload";
import WYSIWYGEditor from "../../../../components/Editor";

const JobCreatePost = (props) => {
  //Type Options
  const types = [
    { label: "full-time" },
    { label: "part-time" },
    { label: "intern" },
 ];

  //Values and Set Values
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [type, setType] = useState(null);
  const [inputType, setInputType] = useState('');

  //Functions
  const router = useRouter();
  const handleCompany = (event) => {
    setCompany(event.target.value);
  };
  const handlePosition = (event) => {
    setPosition(event.target.value);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };
  const handleType = (event, newValue) => {
    setType(newValue);
  }
  const handleInputType = (event, newInputValue) => {
    setInputType(newInputValue);
  }
  const handleSubmit2 = () => {
    console.log(inputType);
    console.log(description)
    console.log(typeof description)
  }
  const handleSubmit = () => {
    console.log('***this is posting a job')
    console.log(company, position)
    console.log(typeof description)
    
    const cookie = parseCookies()
    const { token } = cookie
    console.log(token)
    postDataToDatabase(token);
  };

  const postDataToDatabase = async (token) => {
    try {
      const formData = new FormData();
      formData.append("companyName", company);
      formData.append("title", position);
      formData.append("images", image);
      formData.append("types", inputType);
      formData.append("description", description);

      const result = await Jobs.post({
        type: Jobs.CREATE_JOB,
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
      <div className={classes.header}>Post Job</div>
      <div className={classes.commentPanel}>
        Company
        <TextField
          className={classes.TextComponent}
          variant="outlined"
          value={company}
          onChange={handleCompany}
          setValue={setCompany}
          inputProps={{
            style: {
              height: '30px',
              padding: '0px 14px',
            },
          }}
        />
        Position
        <TextField
        className={classes.TextComponent}
          variant="outlined"
          value={position}
          multi={true}
          onChange={handlePosition}
          setValue={setPosition}
          inputProps={{
            style: {
              height: '70px',
              padding: '2px 14px 2px 14px',
            },
          }}
        />
        <SingleImageUpload setImage={setImage}/>
      </div>
      <div className={classes.Dropdown}>
        <Dropdown placeholder="Type" 
        options={types}
        value={type}
        setValue={setType}
        onChange={handleType}
        inputValue={inputType}
        setInputValue={setInputType}
        onInputChange={handleInputType}
        getOptionLabel={option => option.label}
        />
      </div>
      <div>
        Job Detail
        {/* <Test defaultContent=""
        /> */}
        <WYSIWYGEditor 
        setValue={setDescription}/>
      </div>
      <div className={classes.button}>
        <RectangularButton
          onClick={handleSubmit}
          style={{ backgroundColor: "#F08F34", width:"100%",justifyContent:"center",marginRight:31}}
          url="/Feed/Jobs"
          name="Post"
        />
        <RectangularButton
          style={{ backgroundColor: "#424642",width:"100%",justifyContent:"center"}}
          url="/Feed/Jobs"
          name="Cancel"
        />
      </div>
    </div>
  );
};

export default withAuth(JobCreatePost);
