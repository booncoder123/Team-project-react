import classes from "./index.module.css"
import Image from "next/image";
import Avatar from '@mui/material/Avatar';
import TextField from "../../components/TextField";
export default function DiscussionPost(props) {
  const {value,setValue} = props;

    return (
      <div className={classes.Discussion}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <TextField placeholder={"Write a post ... "} multi={true} value={value} setValue={setValue} style={{marginLeft:13}}
          contentStyle={{minHeight:50}}/>
      </div>
    )
  }
  