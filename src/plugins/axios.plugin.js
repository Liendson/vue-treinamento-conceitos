import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://randomuser.me/api/",
  headers: {
    Authorization: "Bearer: dfsuydfgsdf223"
  }
})

AxiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = "Bearer: guardado no local storage"
  console.log('Request Alterado:', config);
  return config;
});

AxiosInstance.interceptors.response.use((config) => {
  console.log('Response:', config);
  return config;
})

const Plugin = {
  install(Vue) {
    Vue.mixin({
      methods: {
        $axios() {
          return AxiosInstance;
        }
      }
    })
  }
}

export default Plugin;
