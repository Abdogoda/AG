import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import Layout from "./components/Layout";
import "./sass/index.scss";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <Layout />
  </HashRouter>
);
