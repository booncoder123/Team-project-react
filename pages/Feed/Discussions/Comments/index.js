import classes from "./index.module.css";
import Comment from "../../../../container/Feed/Comment";
import { useState } from "react";
import Avatar from '@mui/material/Avatar';
import TextField from "../../../../components/TextField";
import withAuth from "../../../helpers/withAuth";

function Comments() {
 
  return (
   <div className={classes.container}>
       <div className={classes.header}>Comment</div>
       <div className={classes.comments}>
       <Comment/>
       <Comment/>
       <Comment/>
       <Comment/>
       <Comment/>
       <Comment/>
       <Comment/>
       <Comment/>
       <Comment/>
       <Comment/>
       <Comment/>
       <Comment/>
       </div>
      
       <div className={classes.commentPanel}>
       <div className={classes.comment}>
       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <TextField placeholder={"Comment in name of booncoder123"} multi={true} value={""} setValue={()=>{}} style={{marginLeft:13}}

          contentStyle={{minHeight:45,borderRadius :20,paddingLeft:20,paddingTop:10}}/>

       </div>
       </div>
      
   </div>
  );
}

export default withAuth(Comments);