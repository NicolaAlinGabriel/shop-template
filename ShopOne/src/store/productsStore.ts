import { getAdvertising, getProducts, userEp, useREST } from "@api";
import { flow, types } from "mobx-state-tree";
const { put, post, get } = useREST();


const initialState = {
    campaigns: [],
    topOffers: [],
    products: [],
    serverProduct: []
}

export const ProductsStore = types
    .model({
        campagins: types.array(types.model({
            name: types.string,
            icon: types.string,
        }
        )),
        topOffers: types.array(types.model({
            name: types.string,
            icon: types.string,
            price: types.string,
            rating: types.string
        }
        )),
        products: types.array(types.model({
            name: types.string,
            icon: types.string,
            price: types.string,
            rating: types.number,
            category: types.string,
            reviews: types.array(types.model({
                name: types.string,
                score: types.number,
                comment: types.string
            })),
            details: types.string,
        }
        )),
        serverProduct: types.array(types.model({
            product_name: types.string,
            icon: types.string,
            price: types.string,
            rating: types.maybeNull(types.string),
            category_name: types.string,
            category_icon: types.string,
            reviews: types.maybeNull(types.array(types.model({
                name: types.maybeNull(types.string),
                score: types.maybeNull(types.number),
                comment: types.maybeNull(types.string)
            }))),
            details: types.string,
        }
        ))
    })
    .actions(self => ({
        fetchCampaigns: flow(function* fetchCampaigns() {
            try {
                let response = yield getAdvertising('200')
                self.campagins = response;
            } catch (error) {
                console.error(error)
            }
        }),
        fetchTopOffers: flow(function* fetchTopOffers() {
            try {
                let response = yield getAdvertising('200')
                self.campagins = response;
            } catch (error) {
                console.error(error)
            }
        }),
        fetchProducts: flow(function* fetchProducts() {
            try {
                let response = yield getProducts('200')
                self.products = response;
            } catch (error) {
                console.error(error)
            }
        }),

        fetchServerProducts: flow(function* fetchServerProducts() {
            try {
                let res = yield get(`/products`)
                self.serverProduct = res.data
            } catch (error) {
                console.log(error);

            }

        })
    }))
    .create(initialState)