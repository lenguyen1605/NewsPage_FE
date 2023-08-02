import axios from "axios";
import { toast } from "react-toastify";

export const BASE_URL = `http://127.0.0.1:8000/`

const getLocation = () => {
  let _token = typeof window !== "undefined" ? localStorage.getItem('_TOKEN') : ''
  return _token
}

const axiosClient = axios.create({
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: getLocation(),
  },
  baseURL: typeof window !== "undefined" && !window.location.host.includes("localhost") ? `/` : BASE_URL,
  withCredentials: true,
});
axiosClient.interceptors.response.use(
  (res) => {
    return res.data
  },
  (er) => {
    toast.error('Có lỗi xảy ra trong quá trình xử lý vui lòng liên hệ kỹ thuật!')
  }
);
export default axiosClient;