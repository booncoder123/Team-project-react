import classes from "./index.module.css";
import TextField from "../../components/TextField"
import Dropdown from "../../components/Dropdown"
import RectangularButton from "../../components/RectangularButton";
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Test from "../../components/Draft"
 
const JobCreatePost = (props) => {
  const { company, position, description, imageURL, types } = props;
  return (
    <div className={classes.container}>
      <div className={classes.header}>Post Job</div>
      <div className={classes.commentPanel}>
        Company
        <TextField
          className={classes.TextComponent}
          variant="outlined"
          value={company}
          onChange={() => {}}
          setValue={}
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
          onChange={() => {}}
          setValue={}
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
          onClick={() => {}}
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
