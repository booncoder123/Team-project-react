import * as React from "react";
import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import classes from "./index.module.css";
import { useRouter } from "next/router";


import Image from "next/image";


import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import { Directions } from "@mui/icons-material";
import { yellow } from "@mui/material/colors";

import { fontFamily } from "@mui/system";
import ModifyTab from "../../../components/ModifyTab";
import ModifyTabs from "../../../components/ModifyTabs";



export default function FeatureList(props) {

  const router = useRouter();

  const checkCurrentPage = (page) => {
    const router = useRouter();
    console.log(page,router.pathname.split("/")[2])
    if(page === router.pathname.split("/")[2]){
      return 1;
    }
    return 0;
  
  }

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

    router.push(`/Feed/${page}`);
  };
  return (
    <Box sx={{ bgcolor: "background.paper" }} className={classes.container}>
      <ModifyTabs
        value={getValue()}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
        TabIndicatorProps={{  
          style: {
              display: "none",
          },
        }} 
        
      >
        <ModifyTab label="Discussions" active={checkCurrentPage("Discussions")}/>
        <ModifyTab label="News" active={checkCurrentPage("News")}/>
        <ModifyTab label="Jobs" active={checkCurrentPage("Jobs")}/>
        <ModifyTab label="Item Four" />
        <ModifyTab label="Item Five" />
        <ModifyTab label="Item Six" />
        <ModifyTab label="Item Seven" />
      </ModifyTabs>
    </Box>
  );
}


