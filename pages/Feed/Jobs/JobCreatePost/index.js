import classes from "./index.module.css";
import TextField from "../../../../components/TextField";
import Dropdown from "../../../../components/Dropdown";
import RectangularButton from "../../../../components/RectangularButton";
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import withAuth from "../../../../helpers/withAuth"
import Test from "../../../../components/Draft"
import { parseCookies } from "../../../../helpers/cookie";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Jobs from "../../../../lib/api/jobs";


const JobCreatePost = (props) => {
  // const {value,setValue} = props;
  const [values, setValues] = useState({
    company: "",
    position: "",
  });
  // const handleCompanyInputChange = (event) => {
  //   setValue({...values, company: event.target.value})
  // }
  // const handlePositionInputChange = (event) => {
  //   setValue({...values, company: event.target.value})
  // }

  const postDataToDatabase = async (token) => {
    try {
      const result = await User.post({
        type: Jobs.CREATE_USER,
        body: {
          companyName: values.company,
          title: values.position,
          images: "",
          types: "full-time",
          description: "ดำเนินการ และตรวจสอบการติดตั้งอุปกรณ์ IT ทั้ง Hardware & Software",
        },
        token,
      });
      console.log("Result", result);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleSubmit = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in user successfully  login
        const token = userCredential.user.accessToken;
        postDataToDatabase(token);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>Post Job</div>
      <div className={classes.commentPanel}>
        Company
        <TextField
          className={classes.TextComponent}
          variant="outlined"
          value={values.company}
          // onChange={handleCompanyInputChange}
          setValue={setValues}
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
          value={values.position}
          // onChange={handlePositionInputChange}
          setValue={setValues}
          inputProps={{
            style: {
              height: '80px',
              padding: '2px 14px 2px 14px',
            },
          }}
        />
      </div>
      <div className={classes.Dropdown}>
        <Dropdown placeholder="Type" />
      </div>

      <div>
        Job Detail
        <Test/>
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