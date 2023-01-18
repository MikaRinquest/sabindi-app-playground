import { createStore } from "vuex";

export default createStore({
  state: {
    clients: null,
  },
  mutations: {
    setClients: (state, clients) => {
      state.clients = clients;
    },
  },
  actions: {
    getClients: async (context) => {
      fetch("https://sabindi-app-yfz5.onrender.com/clients/")
        .then((res) => res.json())
        .then((clients) => {
          context.commit("setClients", clients);
        });
    },
  },
});
