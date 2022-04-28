import classes from "./index.module.css";
import { useRouter } from "next/router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { projects } from "../../../const/mockProject";
import withAuth from "../../../helpers/withAuth";
import ProfileProject from "../../../container/ProfileProject";
import Profile from "../../../lib/api/profile";
import {parseCookies} from "../../../helpers/cookie";
function MyProjects(props) {
  const router = useRouter();
  console.log("Project", props)
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
        {props.projects.data.map((projectDetail) => {
          return (
            <ProfileProject
              name={projectDetail.project.name}
              intro={projectDetail.project.intro}
              type={projectDetail.type}
              images={projectDetail.images}
            />
          );
        })}
      </div>
    </div>
  );
}

export default withAuth(MyProjects);

export async function getServerSideProps({ req }) {
  const cookies = parseCookies(req);
  const { token } = cookies;
  try {
    const projects = await Profile.get({
      type: Profile.GET_PROJECTS,
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