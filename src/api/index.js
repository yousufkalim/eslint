// Init
import axios from "axios";
import { toast } from "react-toastify";
import { baseUrl } from "../config";

const api = async (method = "get", uri, body) => {
  // Default setting for production

  axios.defaults.baseURL = baseUrl;
  axios.defaults.withCredentials = true;

  // axios.defaults.baseURL = "http://localhost:5000/api/";
  // axios.defaults.withCredentials = true;
  // API Call
  return new Promise((resolve, reject) => {
    axios[method](uri, body)
      .then((res) => resolve(res))
      .catch((err) => {
        if (err?.response?.status === 401) {
          //  window.location = "/login";
        } else {
          toast.error(err?.response?.data?.message ? err.response.data.message : err?.message);
          reject(err);
        }
      });
  });
};

// Export
export default api;
