import classes from "./index.module.css";
import TextField from "../../../../components/TextField";
import Dropdown from "../../../../components/Dropdown";
import RectangularButton from "../../../../components/RectangularButton";
import SingleImageUpload from "../../../../components/SingleImageUpload";
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import withAuth from "../../../../helpers/withAuth";
import { parseCookies } from "../../../../helpers/cookie";
import Discussion from "../../../../lib/api/discussions";
import WYSIWYGEditor from "../../../../components/Editor";


const CreateNews = (props) => {
    
    return (
      <div>
          This is create news page
      </div>
    );
  };
  
  export default withAuth(CreateNews);
  