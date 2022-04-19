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

  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [description, setDescription] = useState("");

  console.log('hellooo')
  console.log(props.jobs.data.types)
  const defaultType = {
    title: props.jobs.data.types
  };
  const types = [
    { title: "full-time" },
    { title: "part-time" },
    { title: "ta" },
  ];
  
  const [typeInput, setTypeInput] = useState(defaultType);
  const handleChange = event => {
    setTypeInput(event.target.value);
  };

  // const handleCompanyInputChange = (event) => {
  //   setValue({...values, company: event.target.value})
  // }
  // const handlePositionInputChange = (event) => {
  //   setValue({...values, company: event.target.value})
  // }

//   const postDataToDatabase = async (token) => {
//     try {
//       const result = await Jobs.post({
//         type: Jobs.CREATE_JOB,
//         body: {
//           companyName: company,
//           title: position,
//           images: "",
//           types: "full-time",
//           description: "ดำเนินการ และตรวจสอบการติดตั้งอุปกรณ์ IT ทั้ง Hardware & Software",
//         },
//         token,
//       });
//       console.log("Result", result);
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

  // const handleSubmit = () => {
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in user successfully  login
  //       const token = userCredential.user.accessToken;
  //       postDataToDatabase(token);
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       alert(errorMessage);
  //     });
  // };
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
  const handleSubmit = () => {
    console.log('***this is editing a job')

    // router.push("/Feed/Jobs");
    
    };

  return (
    <div className={classes.container}>
      <div className={classes.header}>Edit Job</div>
      <div className={classes.commentPanel}>
        Company
        <TextField
          className={classes.TextComponent}
          variant="outlined"
          value={props.jobs.data.companyName}
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
          value={props.jobs.data.title}
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
        options={types} 
        onChange={handleChange}
        defaultValue={defaultType}/>
      </div>

      <div>
        Job Detail
        <Test defaultContent={props.jobs.data.description}/>
      </div>
      <div className={classes.button}>
        <RectangularButton
          onClick={handleSubmit}
          style={{ backgroundColor: "#F08F34", width:"100%",justifyContent:"center",marginRight:31}}
          url="/Feed/Jobs"
          name="Save"
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