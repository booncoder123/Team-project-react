import FeatureDropDown from "../../components/FeatureDropDown";
import classes from "./index.module.css";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import EditIcon from "@mui/icons-material/Edit";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRouter } from "next/router";
import { auth, firebase } from "../../firebase";
import withAuth from "../../helpers/withAuth";
import LogoutIcon from "@mui/icons-material/Logout";
import { parseCookies } from "../../helpers/cookie";
import { useState, useEffect } from "react";
import { User } from "../../lib/api";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { async } from "@firebase/util";

function Profile(props) {
  // console.log(props);
  const [username, setUsername] = useState("");
  const [newName, setNewName] = useState("");
  const [open, setOpen] = useState(false);
  const [photo, setPhoto] = useState("");
  const router = useRouter();
  const user = auth.currentUser;
  const cookies = parseCookies();
  const { token } = cookies;
  const [value, setValue] = useState(null);
  console.log("Value here", username);
  console.log("Value here", newName);
  console.log("Value here", photo);
  console.log("Value here", value);
  console.log("Value here", open);

  useEffect(async () => {
    try {
      const userDetail = await User.get({
        type: User.GET_USER_BY_ID,
        token,
        body: {
          uid: user.uid,
        },
      });
      setUsername(userDetail.data.data.username);
      setPhoto(userDetail.data.data.photoURL);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleLogout() {
    auth
      .signOut()
      .then(function () {
        router.push("/");
        alert("Logout successful");
      })
      .catch(function (error) {
        alert("OOps something went wrong check your console");
        console.log(err);
      });
  }

  useEffect(async () => {
    try {
      const formData = new FormData();
      formData.append("images", value);
      const result = await User.post({
        type: User.UPDATE_USER_DETAIL,
        token,
        body: formData,
      });
      setPhoto(result.data.data.photoURL);
    } catch (error) {
      console.log("error", error);
    }
  }, [value]);

  const changeUsername = async () => {
    try {
      const formData = new FormData();
      formData.append("username", newName);
      // formData.append("images", photo);

      const result = await User.post({
        type: User.UPDATE_USER_DETAIL,
        token,
        body: formData,
      });
      console.log("result here", result);

      setUsername(result.data.data.username);
    } catch (error) {
      console.log("error", error);
    }
    setOpen(false);
  };

  function nextPagehandler(pageUrl) {
    router.push(pageUrl);
  }

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div>
          <FeatureDropDown feature={"Profile"} />
        </div>
        <div className={classes.logout}>
          <button className={classes.button} onClick={handleLogout}>
            <LogoutIcon />
          </button>
        </div>
      </div>

      <div className={classes.content}>
        <div className={classes.profileImage}>
          <Avatar
            alt="no"
            src={
              "https://se-community-2022.s3.ap-southeast-1.amazonaws.com/" +
              photo
            }
            style={{ width: "25vw", height: "25vw" }}
          />
          <div className={classes.addPhotoIcon}>
            <IconButton
              className={classes.shadow1}
              style={{
                width: 36,
                height: 36,
                backgroundColor: "white",
                position: "absolute",
                bottom: 0,
                right: 0,
                borderRadius: 100,
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
              variant="contained"
              component="label"
            >
              <CameraAltIcon />
              <input
                type="file"
                hidden
                onChange={(e) => {
                  setValue(
                    Object.assign(e.target.files[0], {
                      preview: URL.createObjectURL(e.target.files[0]),
                    })
                  );
                }}
              />
            </IconButton>
          </div>
        </div>

        <div className={classes.name}>
          <div>{username}</div>
          <div>
            <EditIcon onClick={handleClickOpen} />
          </div>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Change your username</DialogTitle>
            <TextField
              autoFocus
              id="name"
              label="username"
              type="text"
              variant="standard"
              defaultValue={username}
              value={newName}
              color="warning"
              onChange={(e) => {
                setNewName(e.target.value);
              }}
              sx={{ marginLeft: "10px", marginRight: "10px" }}
            />
            <DialogActions>
              <button
                className={classes.dialogButtonCancel}
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                className={classes.dialogButtonConfirm}
                onClick={changeUsername}
              >
                Confirm
              </button>
            </DialogActions>
          </Dialog>
        </div>
        <div className={classes.selection}>
          <div className={classes.type}>
            <div>My Discussions</div>
            <div className={classes.arrow}>
              <ArrowForwardIosIcon
                fontSize="small"
                onClick={() => nextPagehandler("/Profile/MyDiscussions")}
              />
            </div>
          </div>

          <div className={classes.type}>
            <div>My News</div>
            <div className={classes.arrow}>
              <ArrowForwardIosIcon
                fontSize="small"
                onClick={() => nextPagehandler("/Profile/MyNews")}
              />
            </div>
          </div>

          <div className={classes.type}>
            <div>My Jobs</div>
            <div className={classes.arrow}>
              <ArrowForwardIosIcon
                fontSize="small"
                onClick={() => nextPagehandler("/Profile/MyJobs")}
              />
            </div>
          </div>

          <div className={classes.type}>
            <div>My Projects</div>
            <div className={classes.arrow}>
              <ArrowForwardIosIcon
                fontSize="small"
                onClick={() => nextPagehandler("/Profile/MyProjects")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Profile);

// export async function getServerSideProps({req}) {
//   const cookies = parseCookies(req);
//   const { token } = cookies;
//   const user = auth.currentUser;
//   try {
//     const userDetail = await User.post({
//       type: User.UPDATE_USER_DETAIL,
//       token,
//       body: {
//         username,
//       },
//     });
//     return {
//       props: { token, userDetail: userDetail.data },
//     };
//   } catch (error) {
//     console.log(error);
//   }
//   return { props: {} };
// }
