import App from "./component/App.js";
import { attach } from "./redux/store.js";

attach(App, document.getElementById("root"));
