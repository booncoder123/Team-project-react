import { useState } from "react";
import Layout from "../../components/Layout/Feed";
import withAuth from "../../helpers/withAuth";

function Feed() {
  const [postMessage, setPostMessage] = useState("");
  const [type, setType] = useState(0);
  return <Layout></Layout>;
}
export default withAuth(Feed);
