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
export default function SignInput(props) {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <form>
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
            id={props.name}
            placeholder="email address"
            type={props.type}
            variant="standard"
            required={true}
          />
        </Box>

        <FormControl style={{ width: "75vw" }} variant="standard">
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <PasswordIcon sx={{ color: "#ff8a00", marginRight: "1rem" }} />
            <Input
              fullWidth
              placeholder="password"
              required={true}
              id="password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </Box>
        </FormControl>
        <div className={classes.button}>
          <CircleButton name="Sign In" />
        </div>
      </div>
    </form>
  );
}
