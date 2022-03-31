

import classes from "./index.module.css";
import TextField from "../../../components/TextField"
import Dropdown from "../../../components/Dropdown";
import RectangularButton from "../../../components/RectangularButton";
import Avatar from '@mui/material/Avatar';
import FeedDropDown from "../../../components/FeedDropDown";
import { useState,useEffect } from 'react';
import dynamic from 'next/dynamic';
const Editor = dynamic(
    () => import('react-draft-wysiwyg').then(mod => mod.Editor),
    { ssr: false })
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const height = 76
const labelOffset = -6

const Test = (props) => {
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
          style={{ height }}
          inputProps={{
              style: {
                height,
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

export default Test;
