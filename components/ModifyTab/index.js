import { styled } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import {Colors} from "../../styles/global.js"
const  ModifyTab = styled(Tab)((props) => ({
    "&.MuiTab-root": {
          backgroundColor: props.active ? Colors.orange:"",
          marginRight: 10,
          borderRadius:12,
          fontFamily:"Roboto Bold",
          fontSize: 15,
          color : !props.active ? Colors.grey: Colors.colorBackground 
      
        },
  }));
  export default ModifyTab;
  