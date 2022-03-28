import FeatureDropDown from "./FeatureDropDown";
import classes from "./index.module.css";
import Avatar from "@mui/material/Avatar";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import EditIcon from "@mui/icons-material/Edit";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRouter } from "next/router";
export default function Profile() {
  const router = useRouter();
  function nextPagehandler(pageUrl){
    router.push(pageUrl);
  }

  return (
    <div className={classes.container}>
      <FeatureDropDown />

      <div className={classes.content}>
        <div className={classes.profileImage}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            style={{ width: "25vw", height: "25vw" }}
          />
        </div>
        <div className={classes.addPhotoIcon}>
          <AddAPhotoIcon fontSize="small" />
        </div>

        <div className={classes.name}>
          <div>Mine Jung</div>
          <div>
            <EditIcon />
          </div>
        </div>
        {/* saved items */}
        <div className={classes.selection}>
          <div className={classes.savedItems}>
            <div>
              <button onClick={() => nextPagehandler("/Profile/MySavedItems")}> Saved Items</button>
            </div>
          </div>
          <div className={classes.type}>
            <div>My Discussions</div>
            <div className={classes.arrow}>
              <ArrowForwardIosIcon
                fontSize="small"
                onClick={() => nextPagehandler("/Profile/MyDiscussions")}
              />
            </div>
          </div>
          <div className={classes.type}>
            <div>My Jobs</div>
            <div className={classes.arrow}>
              <ArrowForwardIosIcon
                fontSize="small"
                onClick={() => nextPagehandler("/Profile/MyJobs")}
              />
            </div>
          </div>
          <div className={classes.type}>
            <div>My Projects</div>
            <div className={classes.arrow}>
              <ArrowForwardIosIcon
                fontSize="small"
                onClick={() => nextPagehandler("/Profile/MyProjects")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
