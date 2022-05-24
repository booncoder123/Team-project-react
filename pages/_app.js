import "/styles/global.css";
import classes from "/styles/app.module.css";
import { useEffect } from "react";
import { auth } from "../firebase";
import { setCookie, eraseCookie } from "../helpers/cookie";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const unlisten = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setCookie("token", authUser.accessToken);
      } else {
        eraseCookie("token");
      }
    });
    return () => {
      unlisten();
    };
  }, []);
  return (
    <div className={classes.app}>
      <Component {...pageProps}></Component>
    </div>
  );
}

export default MyApp;
