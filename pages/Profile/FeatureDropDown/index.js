import classes from "./index.module.css";
import Avatar from "@mui/material/Avatar";
import { auth } from "../../../firebase";
import { User } from "../../../lib/api";
import { parseCookies } from "../../../helpers/cookie";
import { useState, useEffect } from "react";
import FeedDropDown from "../../../components/FeedDropDown";
export default function FeatureDropDown() {
  const user = auth.currentUser;
  const cookies = parseCookies();
  const [photo, setPhoto] = useState("");
  const { token } = cookies;
  useEffect(async () => {
    try {
      const userDetail = await User.get({
        type: User.GET_USER_BY_ID,
        token,
        body: {
          uid: user.uid,
        },
      });
      setPhoto(userDetail.data.data.photoURL);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className={classes.featureDropDown}>
      <Avatar
        alt="Remy Sharp"
        src={
          "https://se-community-2022.s3.ap-southeast-1.amazonaws.com/" + photo
        }
        style={{ marginRight: "10px" }}
      />{" "}
      <FeedDropDown p="Profile" />
    </div>
  );
}
