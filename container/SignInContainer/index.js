import classes from "./index.module.css";
import SignInput from "../../components/SignInput";
import SocialMediaLogo from "../../components/SocialMediaLogo";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
export default function SignInContainer() {
    return(
        <div className={classes.block}>
            <SignInput label= "Email Address" type="email"/>
            <SocialMediaLogo source="/SignIn/googleIcon.svg"/>
            <SocialMediaLogo source="/SignIn/FacebookIcon.svg" style={{left:"170px"}}/>
            <SocialMediaLogo source="/SignIn/appleIcon.svg" style={{left:"265px"}}/>
            <div style={{position:"absolute",top:400, left:45, color:"#a6a0a9"}}>
                Forget Password?
            </div>
            <div style={{position:"absolute",top:420, left:45, color:"#a6a0a9"}}>
                New to SE Community?
            </div>
            <div style={{
                position:"absolute",
                top:450, 
                left:45, 
                color:"black",
                fontSize:"large",
                fontWeight:700
                }}>
                Sign Up <NavigateNextIcon sx={{fontSize:"large"}}/>
            </div>
        </div>
    );
}