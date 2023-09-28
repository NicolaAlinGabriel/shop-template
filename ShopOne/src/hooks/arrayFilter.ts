
export const useArrayFilter = () => {
    const orderBy = (array: any[], arg: any) => {
        return array.reduce((prev, current) => {
            !prev[current[arg]] && (prev[current[arg]] = []);
            prev[current[arg]].push(current);
            return prev;
        }, {});
    };

    const toObjArray = (array: any[], arg: any) => {
        return Object.entries(orderBy(array, arg)).map((item): { name: any, value: any } => {
            return {
                name: item[0],
                value: item[1]
            }
        })
    }

    return {
        orderBy,
        toObjArray
    }
};


export const useArray = (): { first: (array: any[]) => any, last: (array: any[]) => any } => {
    const first = (array: any[]) => {
        return array.length > 0 ?
            array[0] :
            []
    };

    const last = (array: any[]) => {

        return array.length > 0 ?
            array[array.length - 1] :
            []
    }

    return {
        first: first,
        last: last
    }
}