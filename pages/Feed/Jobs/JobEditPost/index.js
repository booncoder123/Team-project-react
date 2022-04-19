import classes from "./index.module.css";
import TextField from "../../../../components/TextField";
import Dropdown from "../../../../components/Dropdown";
import RectangularButton from "../../../../components/RectangularButton";
import { useState, useEffect, useRef } from 'react';
import { useRouter } from "next/router";
import withAuth from "../../../../helpers/withAuth"
import Test from "../../../../components/Draft"
import { parseCookies } from "../../../../helpers/cookie";
import Jobs from "../../../../lib/api/jobs";


const JobCreatePost = (props) => {
  // const {value,setValue} = props;
  const types = [
    { value: "full-time" },
    { value: "part-time" },
    { value: "ta" },
  ];

  const defaultCompany = props.jobs.data.companyName;
  const defaultPosition = props.jobs.data.title;
  const defaultType = {
    title: props.jobs.data.types
  };
  const defaultDescription = props.jobs.data.types;

  
  const [company, setCompany] = useState(defaultCompany);
  const [position, setPosition] = useState(defaultPosition);
  const [description, setDescription] = useState("");
  const [typeInput, setTypeInput] = useState(defaultType);
  
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
  const handleType = event => {
    setTypeInput(event.target.value);
  };

  const handleSubmit = () => {
    console.log('***this is editing a job')
    console.log(company, position, typeInput.value)

    // router.push("/Feed/Jobs");
    };
  const handleCancel = () => {
    router.push("/Feed/Jobs");
    };

  return (
    <div className={classes.container}>
      <div className={classes.header}>Edit Job</div>
      <div className={classes.commentPanel}>
        Company
        <TextField
          className={classes.TextComponent}
          variant="outlined"
          value = {company}
          // defaultValue={defaultCompany}
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
          // defaultValue={defaultPosition}
          multi={true}
          onChange={handlePosition}
          setValue={setPosition}
          inputProps={{
            style: {
              height: '80px',
              padding: '2px 14px 2px 14px',
            },
          }}
        />
      </div>
      <div className={classes.Dropdown}>
        <Dropdown placeholder="Type" 
        value={typeInput}
        options={types} 
        onChange={handleType}
        // defaultValue={defaultType}
        />
      </div>

      <div>
        Job Detail
        <Test defaultContent={props.jobs.data.description}/>
      </div>
      <div className={classes.button}>
        <RectangularButton
          onClick={handleSubmit}
          style={{ backgroundColor: "#F08F34", width:"100%",justifyContent:"center",marginRight:31}}
          // url="/Feed/Jobs"
          name="Save"
        />
        <RectangularButton
          onClick={handleCancel}
          style={{ backgroundColor: "#424642",width:"100%",justifyContent:"center"}}
          // url="/Feed/Jobs"
          name="Cancel"
        />
      </div>
    </div>
  );
};

export default withAuth(JobCreatePost);

export async function getServerSideProps({ req }) {
    const cookies = parseCookies(req);
    const { token } = cookies;
    try {
      const jobs = await Jobs.get({
        type: Jobs.GET_JOB_BY_ID,
        body: {
            jobId: "625556952e14c600a7d53259",
        },
        token,
      });
      console.log(jobs);
      return {
        props: { token, jobs: jobs.data },
      };
    } catch (error) {
      console.log(error);
    }
    return { props: {} };
  }