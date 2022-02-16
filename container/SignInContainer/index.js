import classes from "./index.module.css";
import SignInput from "../SignInput";
import { useRouter } from "next/router";
import SocialMediaLogo from "../../components/SocialMediaLogo";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ForgetPassword from "../../pages/ForgetPassword";
export default function SignInContainer() {
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
        <SignInput label="Email Address" type="email" />

        <div className={classes.logos}>
          <SocialMediaLogo source="/SignIn/googleIcon.svg" />
          <SocialMediaLogo source="/SignIn/FacebookIcon.svg" />
          <SocialMediaLogo source="/SignIn/appleIcon.svg" />
        </div>

        <div className={classes.link}>
          <div
            onClick={forgetPasswordHandler}
          >
            Forget Password?
          </div>
          <div
            onClick={signUpHandler}
          >
            New to SE Community?
          </div>
        </div>
      </div>
    </div>
  );
}
