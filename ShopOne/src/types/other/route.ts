export interface RouteObjectInterface {
    [key: string]:{
        name: string,
        url: string,
        component: any,
        icon?: any 
    }
}