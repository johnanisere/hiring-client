import axios from "axios";
import store from "./store";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/api/v1`
});

instance.interceptors.request.use(config => {
  const { token } = store.getState().authentication;
  if (token) {
    return {
      ...config,
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
  }
  console.log({ config });

  return config;
});

export default instance;
