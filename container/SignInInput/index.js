import classes from "./index.module.css";
import * as React from "react";
import CircleButton from "../../components/CircleButton";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import MailIcon from "@mui/icons-material/MailOutlineOutlined";
import PasswordIcon from "@mui/icons-material/HttpsOutlined";
import { useRouter } from "next/router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import auth from "../../firebase";

export default function SignInput() {
  const auth = getAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        router.push("/Feed/Discussions");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <div>
      <div>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            marginBottom: "3rem",
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

        <FormControl style={{ width: "75vw" }} variant="standard">
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <PasswordIcon sx={{ color: "#ff8a00", marginRight: "1rem" }} />
            <Input
              type="password"
              fullWidth
              placeholder="password"
              required={true}
              id="password"
              onChange={handlePassword}
            />
          </Box>
        </FormControl>
      </div>
      <div className={classes.button} onClick={handleSubmit}>
        <CircleButton name="Sign In" />
      </div>
    </div>
  );
}
