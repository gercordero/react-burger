import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-german.firebaseio.com/"
});

export default instance;