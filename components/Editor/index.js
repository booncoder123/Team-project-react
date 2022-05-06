import React, { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
// import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';

import dynamic from 'next/dynamic';
const Editor = dynamic(
  () => import('react-draft-wysiwyg').then(mod => mod.Editor),
  { ssr: false }
)
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// Hooks version of the Class below (done by me)
const WYSIWYGEditor = ({setValue, height}) => {
  const [content, setContent] = useState('');

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = editorState => {
    // return setEditorState(editorState)
    setEditorState(editorState)
    setContent(draftToHtml(convertToRaw(editorState.getCurrentContent())))
    setValue(draftToHtml(convertToRaw(editorState.getCurrentContent())))
    return editorState.getCurrentContent();
    // return input.onChange(setContent(draftToHtml(convertToRaw(editorState.getCurrentContent()))));
  } 
  return (
    <div className="editor">
      <Editor 
        editorState={editorState} 
        editorStyle={{
          backgroundColor: ['white'],
          height: [height],
          fontSize: 13,

        }}
        // toolbar={{
        //   options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'embedded', 'emoji', 'image', 'remove', 'history'],
        //   inline: { inDropdown: true },
        //   list: { inDropdown: true },
        //   textAlign: { inDropdown: true },
        //   link: { inDropdown: true },
        //   history: { inDropdown: true },
        // }}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
        setValue={setValue}
      />
      {
        console.log('editorState => ', draftToHtml(convertToRaw(editorState.getCurrentContent())))
      }
    </div>
  )
}

export default WYSIWYGEditor