// import { useQuery } from '@tanstack/react-query'
// import { useDispatch, useSelector } from 'react-redux'

// const producthook = () => {
//     const dispatch = useDispatch()
//     const cart = useSelector((state: any) => state.cart)
//     const { data } = useQuery({
//         queryKey: ["products"],
//         queryFn: () => cart
//     })
//     const products = dispatch(cart(data))
//     return { products };
// }

// export default producthook;

import React from 'react'

const producthook = () => {
    return (
        <div>producthook</div>
    )
}

export default producthook