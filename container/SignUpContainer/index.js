import classes from "./index.module.css";
import SignUpInput from "../SignUpInput";
import { useRouter } from "next/router";
import SocialMediaLogo from "../../components/SocialMediaLogo";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ForgetPassword from "../../pages/ForgetPassword";
export default function SignUpContainer() {
  const router = useRouter();
  const signUpHandler = () => {
    router.push("/SignUp");
  };

  const forgetPasswordHandler = () => {
    router.push("/ForgetPassword");
  };

  return (
    <div className={classes.block}>
      <div className={classes.input}>
        <SignUpInput/>

        <div className={classes.logos}>
          <SocialMediaLogo source="/SignIn/googleIcon.svg" />
          <SocialMediaLogo source="/SignIn/FacebookIcon.svg" />
          <SocialMediaLogo source="/SignIn/appleIcon.svg" />
        </div>
      </div>
    </div>
  );
}

