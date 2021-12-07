import axios from "axios";

const SetAuthToken = (token) => {
  console.log("token", token);
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default SetAuthToken;
