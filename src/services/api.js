import axios from "axios";

export default () => {
  let Api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    headers: {
      // Authorization: `Bearer ${store.getters.token}`,
      'Content-Type': "application/json",
      Accept: "application/json",
      local: localStorage.getItem('lang') || 'ar'
    }
  })

  return Api
}
