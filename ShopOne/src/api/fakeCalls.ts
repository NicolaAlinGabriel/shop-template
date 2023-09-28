import { mockedProducts, mockedAdvertising } from "./mockedData"


const getProducts = (status: '200' | '400'): Promise<any[]> => {
    return new Promise((res, rej) => {
        (status === '200') ?
            res(mockedProducts) :
            rej('Error: FAILED TO FETCH DATA!')
    })
};

const getAdvertising = (status: '200' | '400'): Promise<any[]> => {
    return new Promise<any[]>((resolve, reject) => {
        (status === '200') ?
            resolve(mockedAdvertising) :
            reject('Something went wrong!')
    })
}



export {
    getProducts,
    getAdvertising
}