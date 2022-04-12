import classes from "./index.module.css";
import * as React from "react";
import CircleButton from "../../components/CircleButton";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import MailIcon from "@mui/icons-material/MailOutlineOutlined";
import PasswordIcon from "@mui/icons-material/HttpsOutlined";
import { useRouter } from "next/router";
import { useState } from "react";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import User from "../../lib/api/user";

export default function SignUpInput() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const postDataToDatabase = async (token) => {
    try {
      const result = await User.post({
        type: User.CREATE_USER,
        body: {
          firstName: "Boon",
          lastName: "Plaisub",
          username: "Booncoder123",
        },
        token,
      });
      console.log("Result", result);
    } catch (error) {
      console.log("error", error);
    }
  };

  const router = useRouter();
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in user successfully  login
        const token = userCredential.user.accessToken;
        const user = userCredential.user;
        user.displayName = username;
        console.log(user);
        postDataToDatabase(token);
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

        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            marginBottom: "3rem",
          }}
        >
          <AssignmentIndIcon sx={{ color: "#ff8a00", marginRight: "1rem" }} />
          <Input
            fullWidth
            id="name"
            placeholder="username"
            type="text"
            variant="standard"
            required={true}
            onChange={handleUsername}
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
        <CircleButton name="Sign Up" />
      </div>
    </div>
  );
}
