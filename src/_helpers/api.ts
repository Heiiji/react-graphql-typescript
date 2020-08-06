import { API_URL } from "../config";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: API_URL
})

export default axiosInstance;