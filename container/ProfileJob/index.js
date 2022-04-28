import classes from "./index.module.css";
import Image from "next/image";
import Avatar from "@mui/material/Avatar";
import TextField from "../../components/TextField";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import Profile from "../../lib/api/profile";
import { parseCookies } from "../../helpers/cookie";
export default function ProfileJob(props) {
  const { jobId } = props;
  const cookie = parseCookies();
  const {token} = cookie;
  console.log(props);
  const [open, setOpen] = useState(false);
  const [post, setPost] = useState(jobId);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const deletePost = async () => {
    try {
      const result = await Profile.delete({
        type: Profile.DELETE_JOBS,
        token,
        body: {
            jobId
        },
      });
      setPost("");
      console.log("result", result);
    } catch (error) {
      console.log("error", error);
    }
    setOpen(false);
  };
  return post ? (
    <div className={classes.JobPost}>
      <div className={classes.logo}>
        <img
          src={
            "https://se-community-2022.s3.ap-southeast-1.amazonaws.com/" +
            props.images
          }
          width="35"
          height="35"
        />
      </div>

      <div className={classes.content}>
        <div className={classes.companyName}>{props.companyName}</div>
        <div className={classes.jobTitle}>{props.jobTitle}</div>
        <div className={classes.jobIntro}>
          <div dangerouslySetInnerHTML={{ __html: props.jobIntro }} />
        </div>
      </div>

      <div>
        <DeleteForeverIcon
          sx={{ color: "#424642" }}
          onClick={handleClickOpen}
          className={classes.delete}
        />
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Are you sure you want to delete this?</DialogTitle>
        <DialogActions>
          <button className={classes.dialogButtonCancel} onClick={handleClose}>
            Cancel
          </button>
          <button className={classes.dialogButtonConfirm} onClick={deletePost}>
            Delete
          </button>
        </DialogActions>
      </Dialog>
    </div>
  ): (
    <div></div>
  );
}
