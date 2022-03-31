import classes from "./index.module.css";
export default function CircleButton(props) {
  return (
    <button type="submit" className={classes.submit}>
      {props.name}
    </button>
  );
}
