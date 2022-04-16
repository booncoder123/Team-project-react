import classes from "./index.module.css";
import { useRouter } from "next/router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { discussions } from "../../../const/mockUp.js";
import withAuth from "../../../helpers/withAuth";



function ProjectDetail() {
  const router = useRouter();
  function nextPagehandler() {
    router.push("/Projects");
  }
  return(
    <div className={classes.container}>
      <div className={classes.title}>Project Detail</div> 
      <div className={classes.banner}>
        <ArrowBackIosIcon sx={{ fontSize: 15 }} onClick={nextPagehandler} />
        Projects
      </div> 
      <div>
        <div className={classes.header}>Quiz Space</div>
        <div className={classes.introduction}>
          Quiz Space is a web-based examination system where quizzes are taken online i.e. through the internet or using a computer system.
        </div>
        <div className={classes.description}>
          The purpose of Quiz Space is to take Quizzes in an efficient manner and not wasting time checking the paper. The main objective of Quiz Space is to efficiently evaluate the candidate through a fully automated system that not only saves a lot of time but also gives fast results. Additionally, a note canvas is prepared in all quizzes in case the candidate needs it for calculation. The score and the answer to the questions will be shown after the candidate finishes the quiz.
          We apply the web programming knowledge (HTML,CSS) to this project and use React which is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It’s used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components for frontend. Also, we use Django which is a Python-based free and open-source web framework that follows the model–template–views (MTV) architectural pattern for backend part.
          The purpose of Quiz Space is to take Quizzes in an efficient manner and not wasting time checking the paper. The main objective of Quiz Space is to efficiently evaluate the candidate through a fully automated system that not only saves a lot of time but also gives fast results. Additionally, a note canvas is prepared in all quizzes in case the candidate needs it for calculation. The score and the answer to the questions will be shown after the candidate finishes the quiz.
          We apply the web programming knowledge (HTML,CSS) to this project and use React which is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It’s used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components for frontend. Also, we use Django which is a Python-based free and open-source web framework that follows the model–template–views (MTV) architectural pattern for backend part.
        </div>
      </div>
    </div>
      
  );
}
export default withAuth(ProjectDetail);