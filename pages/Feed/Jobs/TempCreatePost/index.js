import classes from "./index.module.css";
import React, { useState } from 'react';
import WYSIWYGEditor from "../../../../components/Editor";
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';

export default function temp() {
  const [value, setValue] = useState('');

  console.log("value")
  // const onEditorStateChange = (editorState) => {
  //   setEditorState(editorState)
  // };

  return (
    <div className={classes.container}>
      <div className={classes.commentPanel}>
          <WYSIWYGEditor 
          setValue={setValue}/>
      </div>
      <p>Value: {value}</p>
    </div>
  )
}
  