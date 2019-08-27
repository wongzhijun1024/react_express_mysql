import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import App from "./router/Index";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
