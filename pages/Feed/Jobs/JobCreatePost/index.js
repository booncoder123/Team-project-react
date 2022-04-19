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
 import SingleImageUpload from "../../../../components/SingleImageUpload";

const JobCreatePost = (props) => {
  // const {value,setValue} = props;

  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  // const handleCompanyInputChange = (event) => {
  //   setValue({...values, company: event.target.value})
  // }
  // const handlePositionInputChange = (event) => {
  //   setValue({...values, company: event.target.value})



    

  // }

  const postDataToDatabase = async (token) => {
    try {
  
      
      console.log("image", image);
      console.log("company", image);
     const formData = new FormData();
     formData.append("description", "ดำเนินการ และตรวจสอบการติดตั้งอุปกรณ์ IT ทั้ง Hardware & Software");
     formData.append("images", image);
     formData.append("images", image);

    //  {
    //   companyName: company,
    //   title: position,
    //   images: formData,
    //   types: "full-time",
    //   description: "ดำเนินการ และตรวจสอบการติดตั้งอุปกรณ์ IT ทั้ง Hardware & Software",
    // }
  
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
    // const token = userCredential.user.accessToken;
    // postDataToDatabase(token);
    
    console.log('***this is posting a job')
    console.log(company, position)
    
    const cookie = parseCookies()
    const {token} = cookie
    console.log(token)
    postDataToDatabase(token);
    
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
              height: '80px',
              padding: '2px 14px 2px 14px',
            },
          }}
        />
        <SingleImageUpload setImage={setImage}/>
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

export async function getServerSideProps({ req }) {
  const cookies = parseCookies(req);
  const { token } = cookies;
  try {
    const result = await Jobs.post({
      type: Jobs.CREATE_JOB,
      body: {
        companyName: company,
        title: position,
        images: "",
        types: "full-time",
        description: "ดำเนินการ และตรวจสอบการติดตั้งอุปกรณ์ IT ทั้ง Hardware & Software",
      },
      token,
    });
    return {
      props: { token },
    };
  } catch (error) {
    console.log(error);
  }
  return { props: {} };
}