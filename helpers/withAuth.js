import React from "react";
import router from "next/router";
import { auth } from "../firebase";
import { setCookie } from "../helpers/cookie";
const withAuth = (Component) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        status: "LOADING",
      };
    }
    componentDidMount() {
      auth.onAuthStateChanged((authUser) => {
        console.log("authUser here", authUser);
        if (authUser) {
          //   const accessToken = authUser.accessToken;
          //   sessionStorage.setItem("token", accessToken);
          setCookie("token", authUser.accessToken);
        }
        if (authUser) {
          this.setState({
            status: "SIGNED_IN",
          });
        } else {
          router.push("/");
        }
      });
    }
    renderContent() {
      const { status } = this.state;
      if (status == "LOADING") {
        return <h1>Loading ......</h1>;
      } else if (status == "SIGNED_IN") {
        return <Component {...this.props} />;
      }
    }
    render() {
      return <React.Fragment>{this.renderContent()}</React.Fragment>;
    }
  };
};
export default withAuth;
