import axios from "axios";
const packageJson = require("../../package.json");

const API_URL =
  process?.env?.REACT_APP_API_URL ??
  "https://stock-console-backend.herokuapp.com";

console.log(API_URL, `v${packageJson?.version}`);

export default axios.create({
  baseURL: API_URL,
  timeout: 30000,
});
