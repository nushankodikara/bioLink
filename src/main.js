// @ts-ignore
import App from "./App.svelte";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./style.scss";

const app = new App({
    target: document.getElementById("app"),
});

export default app;

document.getElementsByTagName(
    "body"
)[0].style.backgroundImage = `url("https://unsplash.com/photos/rOUCyx9xxH8/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OHx8YnVkZGhpc218ZW58MHx8fHwxNjYyMjU3Njkz&force=true&w=1920")`;
