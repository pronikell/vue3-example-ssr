import { createStore } from 'vuex';
import { inject, provide } from 'vue';

const StoreSymbol = Symbol('vuex-store');

export function _createStore() {
  return createStore({
    state() {
      return {
        users: [],
      };
    },
    mutations: {
      setUsers(state: { users: Array<any> }, users: Array<any>) {
        users.forEach((u) => {
          state.users.push(u);
        });
      },
    },
  });
}

export function provideStore(store: any) {
  provide(StoreSymbol, store);
}

export default function useStore(): any {
  const store = inject(StoreSymbol);
  if (!store) {
    throw Error('no store provided');
  }
  return store;
}
