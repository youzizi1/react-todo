import axios from "axios";

const instance = axios.create();

instance.interceptors.response.use(
  res => res.data,
  err => console.log(err, "网络错误")
);

export default instance;
