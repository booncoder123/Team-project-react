import classes from "./index.module.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ShowMoreText from "react-show-more-text";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
export default function ProfileDiscussion(props) {
  const { title, images } = props;
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.Discussion}>
         <div className={classes.delete}>
          <DeleteForeverIcon sx={{ color: "#424642"}} onClick={handleClickOpen}/>
        </div>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Are you sure you want to delete this?</DialogTitle>
            <DialogActions>
              <button
                className={classes.dialogButtonCancel}
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                className={classes.dialogButtonConfirm}
                onClick={handleClose}
              >
                Delete
              </button>
            </DialogActions>
          </Dialog>
      <div className={classes.heading1}>
       
        <ShowMoreText
          more={<span style={{ color: "#ff8a00" }}>Show More</span>}
          less={<span style={{ color: "#ff8a00" }}>Show less</span>}
          expanded={false}
          truncatedEndingComponent=" ... "
          width={800}
        >
          <p>{title}</p>
          {/* <div dangerouslySetInnerHTML={{__html: title}} /> */}
        </ShowMoreText>

        {images && (
          <img
            src={
              "https://se-community-2022.s3.ap-southeast-1.amazonaws.com/" +
              images
            }
            className={classes.img}
          />
        )}
      </div>
    </div>
  );
}
