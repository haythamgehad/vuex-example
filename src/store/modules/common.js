import common from "../../services/common";


export default {
  state: {
    resources: null,
    posts:null
  },
  getters: {
    resources: (state) => state.resources,
    posts: (state) => state.posts
  },
  mutations: {
    save_data(state, { key, value }) {
      state[key] = value;
    },
  },
  actions: {
    COMMON({ rootState, commit }, { service, reqPayload }) {
      return new Promise((resolve, reject) => {
        common[service](reqPayload)
          .then((res) => {

            switch (service) {
              case "RESOURCES":
                resolve(res);
                commit("save_data", {
                  key: "resources",
                  value: res.data,
                });
                break;
                case "POSTS":
                  commit("save_data", {
                    key: "posts",
                    value: res.data,
                  });
            }
            resolve("success");
          })
          .catch((error) => {

          })
      });
    },
  },
};
