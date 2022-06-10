
const cart = [];
const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case 'ADDITEM':
            const exist = state.find((x) => x.id === product.id);
            if (exist) {
                return state.map((x) =>
                    (x.id === product.id) ? { ...x, quantity: x.quantity + 1 } : x
                );
            } else {
                return [
                    ...state,
                    {
                        ...product,
                        quantity: 1,
                    }
                ]

            }
        case 'TANG':
            return state.map((x) =>
                (x.id === product.id) ? { ...x, quantity: x.quantity + 1 } : x
            );
        case 'GIAM':
            if( state.find((x) => 
                (x.id === product.id) && (x.quantity===1) ) 
            ){
                state = state.filter((x)=> x.id !== product.id)
                return state;
            } 
            return state.map((x) =>
                (x.id === product.id) ? { ...x, quantity: x.quantity - 1 } : x
            );

        default:
            return state;
    }

}
export default handleCart;