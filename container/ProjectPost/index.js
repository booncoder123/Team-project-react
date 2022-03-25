import classes from "./index.module.css";

export default function ProjectPost(props) {
  const { name, intro, type, year, description, images } = props;
  return (
    <div className={classes.ProjectPost}>
      <div className={classes.content}>
        <div className={classes.projectName}>{name}</div>
        <div className={classes.projectIntro}>{intro}</div>
      </div>
      {images && <img src={images} className={classes.images} />}
    </div>
  );
}
