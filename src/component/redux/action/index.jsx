export const addCart = (product) =>{
    return{
        type: 'ADDITEM',
        payload: product
    }
}
export const tang = (product) =>{
    return{
        type: 'TANG',
        payload: product
    }
}
export const giam = (product) =>{
    return{
        type: 'GIAM',
        payload: product
    }
}