import classes from "./index.module.css";

export default function ProfileProject(props) {
  console.log(props);
  const { name, intro, images } = props;
  return (
    <div className={classes.ProjectPost}>
      <div className={classes.content}>
        <div className={classes.projectName}>{name}</div>
        <div className={classes.projectIntro}>{intro}</div>
      </div>
      <div>
        {images && (
          <img
            src={
              "https://se-community-2022.s3.ap-southeast-1.amazonaws.com/" +
              images
            }
            className={classes.images}
          />
        )}
      </div>
    </div>
  );
}
