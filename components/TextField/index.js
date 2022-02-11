import * as React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import PropTypes from "prop-types";

import classes from "./index.module.css";

const BootstrapInput = styled(InputBase)((props) => ({
  "label + &": {},
  "& .MuiInputBase-input": {
    borderRadius: 5,
    position: "relative",
    backgroundColor: "#ffffff",
    fontSize: 13,
    width: "100%",
    fontFamily: "Roboto",
    padding: 0,
    boxShadow: "inset 0px 2px 4px 1px rgba(0,0,0,0.16)",
    // cursor: "pointer",
    "&:focus": {},
    paddingLeft: 10,
    ...props.contentStyle,
  },
}));

const TextField = (props) => {
  const { multi, value, contentStyle, onClick, setValue, placeholder } = props;

  const onChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className={classes.container}>
      <BootstrapInput
        id="bootstrap-input"
        {...props}
        placeholder={placeholder}
        multiline={multi}
        value={value}
        contentStyle={contentStyle}
        onClick={() => {
          onClick ? onClick() : () => {};
        }}
        onChange={onChange}
      />
    </div>
  );
};

export default TextField;

TextField.propTypes = {
  title: PropTypes.string,
};
TextField.defaultProps = {
  title: "",
};
