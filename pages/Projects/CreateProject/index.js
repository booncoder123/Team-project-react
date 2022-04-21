import classes from "./index.module.css";
import TextField from "../../../components/TextField"
import Dropdown from "../../../components/Dropdown";
import RectangularButton from "../../../components/RectangularButton";
import Avatar from '@mui/material/Avatar';
import FeedDropDown from "../../../components/FeedDropDown";
import { useState,useEffect } from 'react';
import withAuth from "../../../helpers/withAuth";
import WYSIWYGEditor from "../../../components/Editor";

const CreateProject = (props) => {
  //Year and Type Options
  const years = [
    { label: "1" },
    { label: "2" },
    { label: "3" },
    { label: "3" },
  ];
  const types = [
    { label: "ai" },
    { label: "iot" },
    { label: "enterprise" },
  ];

  //Values and Set Values
  const [name, setName] = useState("");
  const [intro, setIntro] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [type, setType] = useState(null);
  const [inputType, setInputType] = useState('');
  const [year, setYear] = useState(null);
  const [inputYear, setInputYear] = useState('');

  //Functions
  const router = useRouter();
  
  return (
    <div className={classes.container}>
      <div className={classes.header}>Post Project</div>
      <div className={classes.commentPanel}>
        Project Name
        <TextField
          className={classes.TextComponent}
          label="text field"
          variant="outlined"
          inputProps={{
              style: {
                height: '30px',
                padding: '0px 14px',
              },
          }}
        />
        Introduction
        <TextField
          label="text field"
          variant="outlined"
          inputProps={{
              style: {
                height: '70px',
                padding: '0 14px',
              },
          }}
        />
      </div>

      <div className={classes.DropdownContainer}>
        <div className={classes.Dropdown}>
          <Dropdown placeholder="Year" />
        </div>
        <div className={classes.Dropdown}>
          <Dropdown placeholder="Type" />
        </div>
      </div>

      <div>
        Description
        <WYSIWYGEditor 
        />
      </div>
      <div className={classes.button}>
        <RectangularButton
            style={{ backgroundColor: "#F08F34", width:"100%",justifyContent:"center",marginRight:31}}
            name="Post" url="/Projects"
        />
        <RectangularButton
            style={{ backgroundColor: "#424642",width:"100%",justifyContent:"center"}}
            name="Cancel" url="/Projects"
        />
      </div>
    </div>
  );
};

export default withAuth(CreateProject);
