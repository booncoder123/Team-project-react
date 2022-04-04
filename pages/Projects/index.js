import FeatureDropDown from "./FeatureDropDown";
import classes from "./index.module.css";
import SearchBar from "../../components/SearchBar";
import Dropdown from "../../components/Dropdown";
import ProjectPost from "../../container/ProjectPost";
import { projects } from "../../const/mockProject";
import {useRouter} from "next/router";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import withAuth from "../../helpers/withAuth";

function Projects() {
  const router = useRouter();
  // const createProjectHandler  = () => {
  //     router.push("/Projects/CreateProject");
  // };
  function nextPageHandler(pageUrl){
    router.push(pageUrl);
  }
  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <FeatureDropDown />
        <div style={{ marginBottom: "10px" }} onClick={() => nextPageHandler("Projects/CreateProject")}>
          <AddCircleOutlineIcon fontSize="large" />
        </div>
      </div>

      <div style={{ paddingRight: "25px", marginTop: "25px" }}>
        <SearchBar placeholder="Search..." />
      </div>
      <div className={classes.filter}>
        <div className={classes.Dropdown}>
          <Dropdown placeholder="Year" />
        </div>
        <div className={classes.Dropdown}>
          <Dropdown placeholder="Track" />
        </div>
      </div>
      <div className={classes.projects}>
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

export default withAuth(Projects);