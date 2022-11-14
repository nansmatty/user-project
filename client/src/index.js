import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
	document.getElementById("root")
);

root.render(
	<BrowserRouter>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</BrowserRouter>
);
