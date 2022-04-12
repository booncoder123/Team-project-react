import classes from "./index.module.css";
import SignUpInput from "../SignUpInput";

import SocialMediaLogo from "../../components/SocialMediaLogo";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ForgetPassword from "../../pages/ForgetPassword";
export default function SignUpContainer() {
  return (
    <div className={classes.block}>
      <div className={classes.input}>
        <SignUpInput/>

        {/* <div className={classes.logos}>
          <SocialMediaLogo source="/SignIn/googleIcon.svg" />
          <SocialMediaLogo source="/SignIn/FacebookIcon.svg" />
          <SocialMediaLogo source="/SignIn/appleIcon.svg" />
        </div> */}
      </div>
    </div>
  );
}

