import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./sass/index.scss";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
  <App />
 </HashRouter>
);

