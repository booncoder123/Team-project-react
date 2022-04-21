import { useState,useEffect } from 'react';
import dynamic from 'next/dynamic';
const Editor = dynamic(
    () => import('react-draft-wysiwyg').then(mod => mod.Editor),
    { ssr: false })
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Test = (props) => {
  return (
    <div>
     <Editor
        editorStyle={{}}
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
