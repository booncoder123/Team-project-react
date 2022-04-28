import classes from "./index.module.css";
import { parseCookies } from "../../helpers/cookie";
import Profile from "../../lib/api/profile";
import { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
export default function ProfileProject(props) {
  console.log(props);
  const { name, intro, images, postId} = props;
  const cookie = parseCookies();
  const {token} = cookie;
  console.log(props);
  const [open, setOpen] = useState(false);
  const [post, setPost] = useState(postId);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const deletePost = async () => {
    try {
      const result = await Profile.delete({
        type: Profile.DELETE_PROJECTS,
        token,
        body: {
            postId
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
    <div className={classes.ProjectPost}>
     
      <div className={classes.content}>
        <div className={classes.projectName}>{name}</div>
        <div className={classes.projectIntro}>{intro}</div>
      </div>
      <div>
        {images && (
          <img
            src={
              "https://se-community-2022.s3.ap-southeast-1.amazonaws.com/" +
              images[0]
            }
            className={classes.images}
          />
        )}
      </div>
      <div className={classes.delete}>
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
  ): (<div></div>);
}
