import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// 假定我们有一个可以返回 Promise 的
// 通用 API（请忽略此 API 具体实现细节）
const fetchItem = () => {
  return new Promise(reslove => {
    reslove({
      data: "name-helloWorld!"
    });
  });
};

export function createStore() {
  const store = new Vuex.Store({
    state: {
      items: {}
    },
    mutations: {
      setItem(state, { id, data }) {
        Vue.set(state.items, id, data.data || "error");
      }
    },
    actions: {
      fetchItem({ commit }, id) {
        // `store.dispatch()` 会返回 Promise，
        // 以便我们能够知道数据在何时更新
        return fetchItem().then(data => {
          commit("setItem", { id, data });
        });
      }
    },
    modules: {}
  });
  return store;
}
