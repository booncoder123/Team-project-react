import classes from "./index.module.css";
import SignInContainer from "../../container/SignInContainer";
export default function SignIn() {
    return(
      <div className={classes.bg}>
        <SignInContainer/>
      </div>
    );
}

// import Dropdown from "../../components/Dropdown";
// import { Button } from "@mui/material";
// import Image from "next/image";
// import TextField from '@mui/material/TextField';
// export default function Login() {
//      return (
//        <div className={classes.title}>
//            Login
//            <Button>minejung</Button>
//            {false && <Dropdown/>}
          //  <Image
          //   objectPosition="center"
          //   alt={"shop icon"}
          //   src={"/Login/Visible.svg"}
          //   objectFit="contain"
          //   width={20}
          //   height={30}
          // />
//           <TextField id="standard-basic" label="Standard" variant="standard" />
//        </div>
//      );