import { auth } from "../../firebase";
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import MailIcon from "@mui/icons-material/MailOutlineOutlined";
import { useRouter } from "next/router";
import { ClassNames } from "@emotion/react";
import classes from "./index.module.css";
import CircleButton from "../../components/CircleButton";
export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const resetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(function () {
        // Email sent.
        alert("email sent: Please check your email to reset the password");
        router.push("/SignIn");
      })
      .catch(function (error) {
        // An error happened.
        alert(error);
      });
  };
  return (
    <div className={classes.bg}>
      <div className={ClassNames.block}>
        <div className={classes.input}>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              marginBottom: "3rem",
              marginTop: "50px",
            }}
          >
            <MailIcon sx={{ color: "#ff8a00", marginRight: "1rem" }} />
            <Input
              fullWidth
              id="email"
              placeholder="email address"
              type="email"
              variant="standard"
              required={true}
              onChange={handleEmail}
            />
          </Box>

          <button className={classes.button} onClick={resetPassword}>
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
}
