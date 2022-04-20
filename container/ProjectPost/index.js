import classes from "./index.module.css";

export default function ProjectPost(props) {
  console.log(props);
  const { name, intro, images } = props;
  return (
    <div
      className={classes.ProjectPost}
      onClick={() => {
        props.onClick();
      }}
    >
      <div className={classes.content}>
        <div className={classes.projectName}>{name}</div>
        <div className={classes.projectIntro}>{intro}</div>
      </div>
      <div className={classes.images}>
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
