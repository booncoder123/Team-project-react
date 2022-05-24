import FeatureDropDown from "../../components/FeatureDropDown";
import classes from "./index.module.css";
import SearchBar from "../../components/SearchBar";
import Dropdown from "../../components/Dropdown";
import ProjectPost from "../../container/ProjectPost";
import { useState } from "react";
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

  //Variables and functions
  const years = [
    { label: "1" },
    { label: "2" },
    { label: "3" },
    { label: "4" },
  ];
  const tracks = [{ label: "AI" }, { label: "IoT" }, { label: "Enterprise" }];
  const [searchValue, setSearchValue] = useState(null);
  const [year, setYear] = useState(null);
  const [inputYear, setInputYear] = useState("");
  const [track, setTrack] = useState(null);
  const [inputTrack, setInputTrack] = useState("");
  const handleYear = (event, newValue) => {
    setType(newValue);
  };
  const handleInputYear = (event, newInputValue) => {
    setInputType(newInputValue);
  };
  const handleTrack = (event, newValue) => {
    setType(newValue);
  };
  const handleInputTrack = (event, newInputValue) => {
    setInputType(newInputValue);
  };

  const getSearchDetailValue = (searchValue) => {
    if (searchValue != null) {
      const detail = searchValue.projectDetail;
      if (detail != null) {
        return detail.name + " " + detail.year + " " + detail.type;
      }
    }
  };

  //Filter function
  const projectList = props.projects.data;
  const searchHandler = (value) => {
    if (value != null || String(value).length == 0) {
      const newProjectList = projectList.filter((project) => {
        const searchString = getSearchDetailValue(searchValue);
        const projectDetail =
          project.projectDetail.name +
          " " +
          project.projectDetail.year +
          " " +
          project.projectDetail.type;
        if (projectDetail.includes(searchString)) {
          return true;
        }
      });
      return newProjectList;
    } else {
      return projectList;
    }
  };
  const dropDownHandler = (searchValue) => {
    if (searchValue != null) {
      const newProjectList = projectList.filter((project) => {
        const searchString = searchValue.toLowerCase();
        const projectDetail =
          project.projectDetail.name +
          " " +
          project.projectDetail.year +
          " " +
          project.projectDetail.type;
        if (projectDetail.includes(searchString)) {
          return true;
        }
      });
      return newProjectList;
    } else {
      return projectList;
    }
  };
  const searchResults = searchHandler(searchValue);
  const yearResults = dropDownHandler(inputYear);
  const trackResults = dropDownHandler(inputTrack);

  //Intersection
  const filteredArrayFunc = (list1, list2, list3) => {
    const data = [list1, list2, list3];
    return data.reduce((a, b) => a.filter((c) => b.includes(c)));
  };
  const filteredArray = filteredArrayFunc(
    searchResults,
    yearResults,
    trackResults
  );

  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <FeatureDropDown feature={"Projects"} />
        <div style={{ marginBottom: "10px" }}>
          <AddCircleOutlineIcon
            fontSize="large"
            onClick={createProjectHandler}
          />
        </div>
      </div>

      <div style={{ paddingRight: "25px", marginTop: "25px" }}>
        <SearchBar
          placeholder="Search..."
          options={props.projects.data}
          setValue={setSearchValue}
          getOptionLabel={(option) => `${option.projectDetail.name}`}
        />
      </div>
      <div className={classes.filter}>
        <div className={classes.Dropdown}>
          <Dropdown
            placeholder="Year"
            options={years}
            setValue={setYear}
            onChange={handleYear}
            // inputValue={inputType}
            setInputValue={setInputYear}
            onInputChange={handleInputYear}
          />
        </div>
        <div className={classes.Dropdown}>
          <Dropdown
            placeholder="Track"
            options={tracks}
            setValue={setTrack}
            onChange={handleTrack}
            // inputValue={inputType}
            setInputValue={setInputTrack}
            onInputChange={handleInputTrack}
          />
        </div>
      </div>
      <div className={classes.projects}>
        {filteredArray.map((project) => {
          console.log(project);
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
