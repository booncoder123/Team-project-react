import classes from "./index.module.css";
import { useRouter } from "next/router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { discussions } from "../../../const/mockUp.js";
import withAuth from "../../../helpers/withAuth";
import Projects from "../../../lib/api/projects";
import { parseCookies } from "../../../helpers/cookie";

function ProjectDetail(props) {
  const router = useRouter();
  function nextPagehandler() {
    router.push("/Projects");
  }
  console.log("propsss", props);
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        {props.project.data[0].project[0].name}
      </div>
      <div className={classes.banner}>
        <ArrowBackIosIcon sx={{ fontSize: 15 }} onClick={nextPagehandler} />
        Projects
      </div>
      {props.project.data[0].images[0] && (
        <img
          src={
            "https://se-community-2022.s3.ap-southeast-1.amazonaws.com/" +
            props.project.data[0].images[0]
          }
          className={classes.images}
        />
      )}
      <div>
        {/* <div className={classes.header}>Header</div> */}
        <div className={classes.introduction}>
          {props.project.data[0].project[0].intro}
        </div>
        <div className={classes.description}>
          {props.project.data[0].project[0].projectDescription}
        </div>
      </div>
    </div>
  );
}
export default withAuth(ProjectDetail);

export async function getServerSideProps(context) {
  const { req } = context;
  const cookies = parseCookies(req);
  const { token } = cookies;
  const projectId = context.query.projectId;
  console.log("projectID", projectId);

  try {
    const project = await Projects.get({
      type: Projects.GET_PROJECT_DETAIL,
      token,
      body: {
        projectId,
      },
    });
    return {
      props: { token, project: project.data },
    };
  } catch (error) {
    console.log(error);
  }
  return { props: {} };
}
