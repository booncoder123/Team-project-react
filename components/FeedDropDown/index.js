import * as React from "react";
import { MenuItem } from "@mui/material";
import { Select } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { useRouter } from "next/router";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Typography } from "@mui/material";
export default function FeedDropDown(props) {
  console.log(props.p);
  const classes = useStyles(); 
  const [page, setPage] = React.useState(props.p);
  const router = useRouter();
  const handleChange = (event) => {
    setPage(event.target.value);
    if(event.target.value=="Feed"){router.push("/Feed/Discussions")}
    else if(event.target.value== "Projects"){router.push("/Projects")}
    else if(event.target.value == "Profile"){router.push("/Profile")}
    
  };
  return (
    <div className="App">
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
         { page != "Feed" &&  <img src="/Feed/discussion.svg" style={{ marginRight: "30px" }} />}
          Feed
        </MenuItem>
        <MenuItem
          classes={{ selected: classes.selected, root: classes.rootMenuItem }}
          value="Projects"
        >
        { page != "Projects" && <img src="/Feed/projects.svg" style={{ marginRight: "30px" }} />}
          Projects
        </MenuItem>
        <MenuItem
          classes={{ selected: classes.selected, root: classes.rootMenuItem }}
          value="Profile"
        >
        {page != "Profile"  && <img src="/Feed/profile.svg" style={{ marginRight: "30px" }} />}
          Profile
        </MenuItem>
      </Select>
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
