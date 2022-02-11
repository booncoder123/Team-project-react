import "/styles/global.css";
import FeatureDropDown from "/container/Feed/FeatureDropDown";
import classes from "/styles/app.module.css";
function MyApp({ Component, pageProps }) {
  return (
    <div className={classes.app}>
      <div className={classes.header}>
        <FeatureDropDown />
      </div>

      <Component {...pageProps}></Component>
    </div>
  );
}

export default MyApp;