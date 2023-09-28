import axios, { AxiosInstance } from "axios";
import { Platform } from "react-native";

export const useREST = () => {

    // TBD UPDATE URL'S

    const authInstance = axios.create({
        baseURL: Platform.OS === 'android' ? 'http://192.168.1.214:4000' : 'http://localhost:4000',
    });

    const shopInstance = axios.create({
        baseURL: Platform.OS === 'android' ? 'http://192.168.1.214:4001' : 'http://localhost:4001',
    });

    const transactionInstance = axios.create({
        baseURL: Platform.OS === 'android' ? 'http://192.168.1.214:4002' : 'http://localhost:4002',
    });


    const get = async (endpoint: string, config?: any) => {

        try {
            let res = await shopInstance.get(endpoint);
            return res
        } catch (error) {
            console.warn(error)
        }
    };

    const post = async (endpoint: string, config?: any): Promise<any> => {
        try {
            let res = await authInstance.post(endpoint, config);
            return res;
        } catch (error) {
            console.log(error);

        }
    };

    const put = async (endpoint: string, config?: any) => {

        try {
            let res = await authInstance.put(endpoint, config);
            return res;
        } catch (error) {
            console.log('failed');
            console.warn(error)
        }
    };

    return {
        put, get, post
    }
}


