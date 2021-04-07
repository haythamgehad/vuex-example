import Api from "./api";

export default {
  RESOURCES() {
    return Api().get(`todos/1`);
    // return {test:'test'}
  },
  POSTS() {
    return Api().get(`posts`);
    // return {test:'test'}
  },
  CREATE_POST(reqPayload) {
    return Api().post(`posts`,reqPayload);
    // return {test:'test'}
  }
};
