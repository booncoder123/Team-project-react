import FeatureDropDown from "./FeatureDropDown";
import classes from "./index.module.css";
import Avatar from "@mui/material/Avatar";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import EditIcon from "@mui/icons-material/Edit";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRouter } from "next/router";
import { auth, firebase } from "../../firebase";
import withAuth from "../../helpers/withAuth";
import LogoutIcon from "@mui/icons-material/Logout";
import { parseCookies } from "../../helpers/cookie";

function Profile(props) {
  console.log(props);
  const router = useRouter();
  function handleLogout() {
    auth
      .signOut()
      .then(function () {
        router.push("/");
        alert("Logout successful");
      })
      .catch(function (error) {
        alert("OOps something went wrong check your console");
        console.log(err);
      });
  }

  function nextPagehandler(pageUrl) {
    router.push(pageUrl);
  }

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div>
          <FeatureDropDown />
        </div>
        <div className={classes.logout}>
          <button className={classes.button} onClick={handleLogout}>
            <LogoutIcon />
          </button>
        </div>
      </div>

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
        <div className={classes.selection}>
          <div className={classes.savedItems}>
            <div>
              <button onClick={() => nextPagehandler("/Profile/MySavedItems")}>
                {" "}
                Saved Items
              </button>
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

export default withAuth(Profile);

export async function getServerSideProps({ req }) {
  try {
    const cookies = parseCookies(req);
    const { token } = cookies;

    //? call api
    // const storeDetail = await Store.get({
    //   type: Store.GET_STORE_DETAIL,
    //   token,
    // });

    return {
      props: { token }, // will be passed to the page component as props
    };
  } catch (error) {
    console.log(error);
  }
  return { props: {} };
}
