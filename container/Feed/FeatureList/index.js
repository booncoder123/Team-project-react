import * as React from "react";
import { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import classes from "./index.module.css";
import { useRouter } from "next/router";

export default function FeatureList(props) {
  // const type = sessionStorage.getItem('type');
  // const [value, setValue] = useState(0)

  const router = useRouter();

  const getValue = () => {
    console.log(router.pathname.split("/")[2]);
    switch (router.pathname.split("/")[2]) {
      case "Discussions":
        return 0;
      
      case "News":
        return 1;
       
      case "Jobs":
        return 2;
       
      default:
        return 0;
    }
  };

  const handleChange = (event, newValue) => {
    switch (newValue) {
      case 0:
        nextPageHandler("Discussions");
        break;
      case 1:
        nextPageHandler("News");
        break;
      case 2:
        nextPageHandler("Jobs");
        break;
      default:
    }
  };
  const nextPageHandler = (page) => {
    // router.query.NEWSHOP_SUBPAGE = page;
    router.push(`/Feed/${page}`);
  };
  return (
    <Box sx={{ bgcolor: "background.paper" }} className={classes.container}>
      <Tabs
        value={getValue()}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
      >
        <Tab label="Discussions" />
        <Tab label="News" />
        <Tab label="Jobs" />
        <Tab label="Item Four" />
        <Tab label="Item Five" />
        <Tab label="Item Six" />
        <Tab label="Item Seven" />
      </Tabs>
    </Box>
  );
}
