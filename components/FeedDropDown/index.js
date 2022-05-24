import * as React from "react";
import { MenuItem } from "@mui/material";
import { Select } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { useRouter } from "next/router";
import { User } from "../../lib/api";
import ListItemIcon from "@mui/material/ListItemIcon";

import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { auth } from "../../firebase";
import { parseCookies } from "../../helpers/cookie";
import { useEffect } from "react";
export default function FeedDropDown(props) {
  // console.log(props.p);
  const classes = useStyles();
  const [page, setPage] = React.useState(props.p || "Feed");
  const router = useRouter();
  const user = auth.currentUser;
  const cookies = parseCookies();
  const [photo, setPhoto] = useState("");
  const { token } = cookies;

  const handleChange = (event) => {
    setPage(event.target.value);
    if (event.target.value == "Feed") {
      router.push("/Feed/Discussions");
    } else if (event.target.value == "Projects") {
      router.push("/Projects");
    } else if (event.target.value == "Profile") {
      router.push("/Profile");
    }
  };

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
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src={
            "https://se-community-2022.s3.ap-southeast-1.amazonaws.com/" + photo
          }
          style={{ marginRight: "10px" }}
        />{" "}
        <Select
          disableUnderline
          value={page}
          variant="standard"
          onChange={handleChange}
          sx={{
            color: "#424642",
            backgroundColor: "ffffff",
            fontSize: 33,
            fontFamily: "Roboto Bold",
          }}
          classes={{ root: classes.selectRoot }}
        >
          <MenuItem
            classes={{ selected: classes.selected, root: classes.rootMenuItem }}
            value="Feed"
          >
            {page != "Feed" && (
              <img src="/Feed/discussion.svg" style={{ marginRight: "30px" }} />
            )}
            Feed
          </MenuItem>
          <MenuItem
            classes={{ selected: classes.selected, root: classes.rootMenuItem }}
            value="Projects"
          >
            {page != "Projects" && (
              <img src="/Feed/projects.svg" style={{ marginRight: "30px" }} />
            )}
            Projects
          </MenuItem>
          <MenuItem
            classes={{ selected: classes.selected, root: classes.rootMenuItem }}
            value="Profile"
          >
            {page != "Profile" && (
              <img src="/Feed/profile.svg" style={{ marginRight: "30px" }} />
            )}
            Profile
          </MenuItem>
        </Select>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  selectRoot: {
    "&:hover": {
      background: "yellow",
    },
    "&:focus": {
      background: "yellow",
    },
  },
  selected: {},
  rootMenuItem: {
    "&$selected": {
      "&:hover": {
        backgroundColor: "#ff8a00",
      },
      "&:focus": {
        backgroundColor: "#ffffff",
      },
    },
    "&:hover": {
      backgroundColor: "#ff8a00",
    },
  },
}));
