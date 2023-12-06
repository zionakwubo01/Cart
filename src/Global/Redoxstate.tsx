import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [] as any
}

const Redoxstate: any = createSlice({
    name: "Redoxstate",
    initialState,
    reducers: {
        Addtocart: (state, { payload }) => {
            const check = state.cart.find((el: any) =>

                el.id === payload.id)
            if (check) {
                check.QTY += 1
            } else {
                state.cart.push({ ...payload, QTY: 1 });
            }
        },
        removeFromCart: (state, { payload }) => {
            const check = state.cart.filter((el: any) => el.id !== payload.id);
            state.cart = check
        },
        removeCartQTY: (state, { payload }) => {
            const checkcart = state.cart.findindex((el: any) =>
                el.id === payload.id
            )
            if (state.cart[checkcart].QTY > 1) {
                state.cart[checkcart].QTY -= 1;
            } else if (state.cart[checkcart].QTY === 1) {
                const check = state.cart.filter((el: any) =>
                    el.id !== payload.id
                )
                state.cart = check
            }
        }
    }
});

export const { Addtocart, removeCartQTY, removeFromCart } = Redoxstate.actions

export default Redoxstate.reducer