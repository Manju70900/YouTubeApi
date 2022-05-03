import axios from "axios"
const KEY = "AIzaSyDBMgmxL7CoeD2OFFV28Q3lB-S-FBmQcBk";
export let baseParam = {
    key: KEY,
    maxResults: 10,
    part: "snippet",
    
};
export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
})