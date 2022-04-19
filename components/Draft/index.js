import { useState,useEffect, createContext } from 'react';
import React, { Component } from 'react'
import { EditorState, ContentState, convertFromHTML } from "draft-js";
import dynamic from 'next/dynamic';
import { convertFromRaw, convertToRaw } from 'draft-js';
const Editor = dynamic(
    () => import('react-draft-wysiwyg').then(mod => mod.Editor),
    { ssr: false }
)
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Test = (props) => {
  const { defaultContent } = props;

  const state = {
    editorState: EditorState.createWithContent(
      ContentState.createFromBlockArray(
        convertFromHTML(defaultContent)
      )
    )
  };

  const onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
    this.props.handleContent(
        convertToRaw(editorState.getCurrentContent()
    ));
  };

  const { editorState } = state;
  return (
    <div>
     <Editor
        editorState={editorState}
        editorStyle={{
          backgroundColor: ['white'],
          height: ['120px'],
          fontSize: 13,
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
  );
};

export default Test;
