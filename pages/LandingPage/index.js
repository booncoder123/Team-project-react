import classes from "./index.module.css";
import { useRouter } from "next/router";
import LandingPageButton from "../../components/LandingPageButton";
export default function LandingPage() {
  return (
    <div>

      <img
        className={classes.landing}
        src={"/LandingPage/LandingPage.svg"}
        alt="landing background"
        layout="fixed"
      />

      <div style={{ position: "relative" }}>
        <div>
          <img
            objectPosition="right"
            alt={"international college logo"}
            src={"/LandingPage/IcLogo.svg"}
            objectFit="contain"
            className={classes.logo}
          />
        </div>

        <div className={classes.welcome}>
          Welcome to<br/>Software Engineering<br/>Community
        </div>

        <div>
            <LandingPageButton style ={{backgroundColor:"#ff8a00"}} url="/SignIn" name="Sign In"/>
            <LandingPageButton style ={{backgroundColor:"#424642", top:657}} url="/SignUp" name="Sign Up"/>
        </div>

      </div>

    </div>
  );
}
