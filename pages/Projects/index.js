import FeatureDropDown from "./FeatureDropDown";
import classes from "./index.module.css";
import SearchBar from "../../components/SearchBar";
import Dropdown from "../../components/Dropdown";
import ProjectPost from "../../container/ProjectPost";
// import { projects } from "../../const/mockProject";
import { useRouter } from "next/router";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import withAuth from "../../helpers/withAuth";
import Projects from "../../lib/api/projects";
import { parseCookies } from "../../helpers/cookie";

function ProjectsLanding(props) {
  const router = useRouter();
  const createProjectHandler = () => {
    router.push("/Projects/CreateProject");
  };
  const nextPageHandler = (title) => {
    router.push(`Projects/ProjectDetail?projectId=${title}`);
  };
  // function nextPageHandler(pageUrl){
  //   router.push(pageUrl);
  // }
  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <FeatureDropDown />
        <div style={{ marginBottom: "10px" }}>
          <AddCircleOutlineIcon
            fontSize="large"
            onClick={createProjectHandler}
          />
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
        {props.projects.data.map((project) => {
          console.log(project)
          return (
            <div>
              <ProjectPost
                name={project.projectDetail.name}
                intro={project.projectDetail.intro}
                // type={project.projectDetail.type[0]}
                // year={project.projectDetail.year[0]}
                // description={project.projectDetail.projectDescription}
                images={project.images[0]}
                onClick={() => {
                  nextPageHandler(project._id);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default withAuth(ProjectsLanding);

export async function getServerSideProps({ req }) {
  const cookies = parseCookies(req);
  const { token } = cookies;
  try {
    const projects = await Projects.get({
      type: Projects.GET_PROJECTS,
      token,
    });

    return {
      props: { token, projects: projects.data },
    };
  } catch (error) {
    console.log(error);
  }
  return { props: {} };
}
