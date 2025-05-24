import axios from "axios";

const medicareBaseURL =
  process.env.REACT_APP_MEDICARE_BASE_URL || "http://localhost:3000/medicare";
const axiosInstance = axios.create({
  baseURL: medicareBaseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
