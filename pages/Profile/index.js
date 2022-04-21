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
import { useState, useEffect } from "react";
import { User } from "../../lib/api";
function Profile(props) {
  // console.log(props);
  const [username, setUsername] = useState("");
  const router = useRouter();
  const user = auth.currentUser;
  console.log("user here", username);

  useEffect(async () => {
    const cookies = parseCookies();
    const { token } = cookies;
  
    try {
      const userDetail = await User.get({
        type: User.GET_USER_BY_ID,
        token,
        body: {
          uid: user.uid,
        },
      });
      setUsername(userDetail.data.data.username)
    } catch (error) {
      console.log(error);
    }
  }, []);

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

  //  if(user !== null){
  //   user.providerData.forEach((profile) => {
  //     setUsername(profile.displayName);
  //     // console.log("user detail from firebase", profile)
  //     // console.log("Sign-in provider: " + profile.providerId);
  //     // console.log("  Provider-specific UID: " + profile.uid);
  //     // console.log("  Name: " + profile.displayName);
  //     // console.log("  Email: " + profile.email);
  //     // console.log("  Photo URL: " + profile.photoURL);
  //   });
  //  }

  function nextPagehandler(pageUrl) {
    router.push(pageUrl);
  }
  console.log("profile", props);

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
            alt="no"
            src={user.photoURL}
            style={{ width: "25vw", height: "25vw" }}
          />
        </div>
        <div className={classes.addPhotoIcon}>
          <AddAPhotoIcon fontSize="small" />
        </div>

        <div className={classes.name}>
          <div>{username}</div>
          <div>
            <EditIcon />
          </div>
        </div>
        <div className={classes.selection}>
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
            <div>My News</div>
            <div className={classes.arrow}>
              <ArrowForwardIosIcon
                fontSize="small"
                onClick={() => nextPagehandler("/Profile/MyNews")}
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
          {user.uid}
        </div>
      </div>
    </div>
  );
}

export default withAuth(Profile);

// export async function getServerSideProps({req}) {
//   const cookies = parseCookies(req);
//   const { token } = cookies;
//   const user = auth.currentUser;
//   try {
//     const userDetail = await User.get({
//       type: User.GET_USER_BY_ID,
//       token,
//       body: {
//         uid:user.uid,
//       },
//     });
//     return {
//       props: { token, userDetail: userDetail.data },
//     };
//   } catch (error) {
//     console.log(error);
//   }
//   return { props: {} };
// }
