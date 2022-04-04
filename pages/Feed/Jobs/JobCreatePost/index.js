import classes from "./index.module.css";
import TextField from "../../../../components/TextField"
import Dropdown from "../../../../components/Dropdown";
import RectangularButton from "../../../../components/RectangularButton";
import { useState,useEffect } from 'react';
import dynamic from 'next/dynamic';
import withAuth from "../../../helpers/withAuth";
const Editor = dynamic(
    () => import('react-draft-wysiwyg').then(mod => mod.Editor),
    { ssr: false })
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const height = 76
const labelOffset = -6

const JobCreatePost = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>Post Job</div>
      <div className={classes.commentPanel}>
        Company
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
        Position
        <TextField
          label="text field"
          variant="outlined"
          style={{ height }}
          inputProps={{
              style: {
                height,
                padding: '0 14px',
              },
          }}
        />
      </div>
      <div className={classes.Dropdown}>
          <Dropdown placeholder="Type" />
        </div>

      <div>
        Job Detail
        <Editor
          editorStyle={{
            backgroundColor: ['white'],
            height: ['120px']
          }}
          toolbarStyle={{}}
          toolbar={{  
              options: ['link','image'],
              image: {
                  inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                  alt: { present: false, mandatory: false },
                  defaultSize: {
                    height: 'auto',
                    width: 'auto',
                  }}}}
        />
      </div>
      <div className={classes.button}>
                <RectangularButton
                    style={{ backgroundColor: "#F08F34", width:"100%",justifyContent:"center",marginRight:31}}
                    name="Post"
                />
                <RectangularButton
                    style={{ backgroundColor: "#424642",width:"100%",justifyContent:"center"}}
                    name="Cancel"
                />
      </div>
    </div>
  );
};

export default withAuth(JobCreatePost);
