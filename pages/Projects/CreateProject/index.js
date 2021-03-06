import classes from "./index.module.css";
import TextField from "../../../components/TextField"
import Dropdown from "../../../components/Dropdown";
import SingleImageUpload from "../../../components/SingleImageUpload";
import RectangularButton from "../../../components/RectangularButton";
import MultipleImageUploadComponent from "../../../components/MultipleImageUpload";
import { useState,useEffect } from 'react';
import { useRouter } from "next/router";
import withAuth from "../../../helpers/withAuth";
import WYSIWYGEditor from "../../../components/Editor";
import { parseCookies } from "../../../helpers/cookie";
import Projects from "../../../lib/api/projects"

const CreateProject = (props) => {
  //Year and Type Options
  const years = [
    { label: "1" },
    { label: "2" },
    { label: "3" },
    { label: "4" },
  ];
  const types = [
    { label: "ai" },
    { label: "iot" },
    { label: "enterprise" },
  ];

  //Values and Set Values
  const [name, setName] = useState("");
  const [intro, setIntro] = useState("");
  // const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");
  const [type, setType] = useState(null);
  const [inputType, setInputType] = useState('');
  const [year, setYear] = useState(null);
  const [inputYear, setInputYear] = useState('');

  //Functions
  const router = useRouter();
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleIntro = (event) => {
    setIntro(event.target.value);
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
  const handleYear = (event, newValue) => {
    setYear(newValue);
  }
  const handleInputYear = (event, newInputValue) => {
    setInputYear(newInputValue);
  }
  const handleSubmit2 = () => {
    console.log(inputType);
    console.log(inputYear)
    console.log(parseInt(inputYear))
    console.log(typeof parseInt(inputYear))
  }
  const handleSubmit = () => {
    console.log('***this is posting a job')
    
    const cookie = parseCookies()
    const { token } = cookie
    console.log(token)
    postDataToDatabase(token);
  };
  const handleCancel = () => {
    router.push('/Projects')
  };
  const postDataToDatabase = async (token) => {
    const img = images.file;
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("intro", intro);
      for (let i = 0; i < img.length; i++) {
        formData.append("images", img[i]);
      }
      formData.append("likers", []);
      formData.append("type", [inputType]);
      formData.append("year", [parseInt(inputYear)]);
      formData.append("description", description);

      const result = await Projects.post({
        type: Projects.CREATE_PROJECT,
        body: formData,
        token,
      });
      console.log("Result", result);
      router.push('/Projects')
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className={classes.container}>
      <div className={classes.header}>Post Project</div>
      <div className={classes.commentPanel}>
        Project Name
        <TextField
          className={classes.TextComponent}
          variant="outlined"
          value={name}
          onChange={handleName}
          setValue={setName}
          inputProps={{
              style: {
                height: '30px',
                padding: '0px 14px',
              },
          }}
        />
        Introduction
        <TextField
          variant="outlined"
          value={intro}
          multi={true}
          onChange={handleIntro}
          setValue={setIntro}
          inputProps={{
              style: {
                height: '50px',
                padding: '0 14px',
              },
          }}
        />
        <MultipleImageUploadComponent setImage={setImages} />
      </div>
      <div className={classes.DropdownContainer}>
        <div className={classes.Dropdown}>
          <Dropdown placeholder="Year"
          options={years}
          value={year}
          setValue={setYear}
          onChange={handleYear}
          inputValue={inputYear}
          setInputValue={setInputYear}
          onInputChange={handleInputYear}
          getOptionLabel={option => option.label}
          />
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
      </div>
      <div>
        Description
        <WYSIWYGEditor 
        setValue={setDescription}
        height={'100px'}/>
      </div>
      <div className={classes.button}>
        <RectangularButton
          onClick={handleSubmit}
          style={{ backgroundColor: "#F08F34", width:"100%",justifyContent:"center",marginRight:31}}
          name="Post" 
          // url="/Projects"
        />
        <RectangularButton
          onClick={handleCancel}
          style={{ backgroundColor: "#424642",width:"100%",justifyContent:"center"}}
          name="Cancel" 
          // url="/Projects"
        />
      </div>
    </div>
  );
};

export default withAuth(CreateProject);
