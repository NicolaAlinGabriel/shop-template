import { getProducts } from '@api';
import { addMiddleware, types, flow } from 'mobx-state-tree';
import { useREST, userEp } from '@api';

const { put, post } = useREST();
const { signIn, signOut } = userEp


const initialState = {
  authenticated: false,
  products: [],
  name: ''
};

export const UserStore = types
  .model({
    authenticated: types.boolean,
    products: types.array(types.model({
      name: types.string,
      icon: types.string,
      price: types.string,
      rating: types.number
    },
    )),
    name: types.string,
  })
  .actions((self) => ({
    signInFn: flow(function* signInFn(arg: any) {
      try {
        let res = yield put(signIn, arg)
        res.status === 200 && (self.authenticated = res.data.authorized, self.name = res.data.name)
      } catch (error) {
        console.log(error);
      }
    }),
    signOutFn: flow(function* signOutFn(arg: any) {
      try {
        let res = yield put(signOut, arg)
        res.status === 200 && (self.authenticated = false)
      } catch (error) {
        console.log(error);

      }
    })
  }))
  .create(initialState);

