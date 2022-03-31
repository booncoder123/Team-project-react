import classes from "./index.module.css";
import { useRouter } from "next/router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ProjectPost from "../../../container/ProjectPost";
import { projects } from "../../../const/mockProject";

export default function MyProjects() {
  const router = useRouter();
  function nextPagehandler() {
    router.push("/Profile");
  }
  return (
    <div className={classes.container}>
      <div className={classes.title}>My Projects</div>
      <div className={classes.banner}>
        <ArrowBackIosIcon sx={{ fontSize: 15 }} onClick={nextPagehandler} />
        My Posts
      </div>
      <div className={classes.content}>
      {projects.map((project) => {
          return (
            <div onClick={() => nextPageHandler("Projects/ProjectDetail")}>
            <ProjectPost
              name={project.name}
              intro={project.intro}
              type={project.type}
              year={project.year}
              description={project.description}
              images={project.images}
            />
            </div>
          );
        })}
      </div>
    </div>
  );
}
