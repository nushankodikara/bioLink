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
)[0].style.backgroundImage = `url("https://unsplash.com/photos/hPA4hmPBFrQ/download?ixid=MnwxMjA3fDB8MXxhbGx8NDl8fHx8fHwyfHwxNjQ2NjIwMjA2&force=true&w=2400")`;
