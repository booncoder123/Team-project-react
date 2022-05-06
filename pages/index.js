import classes from "./index.module.css";
import LandingPageButton from "../components/LandingPageButton";
export default function Home() {
  return (
    <div>
      <img
        className={classes.landing}
        src={"/LandingPage/LandingPage.svg"}
        alt="landing background"
        layout="fixed"
      />

      <div>
        <div className={classes.welcome}>
          <div>
            <img
              objectPosition="right"
              alt={"international college logo"}
              src={"/LandingPage/IcLogo.svg"}
              objectFit="contain"
              className={classes.logo}
            />
          </div>
          <div>
            Welcome to
            <br />
            Software Engineering
            <br />
            Community
          </div>
        </div>

        <div>
          <LandingPageButton
            style={{ backgroundColor: "#ff8a00" }}
            url="/SignIn"
            name="Sign In"
          />
          <LandingPageButton
            style={{ backgroundColor: "#424642", top: "80vh" }}
            url="/SignUp"
            name="Sign Up"
          />
        </div>
      </div>
    </div>
  );
}
