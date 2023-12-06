import { useDispatch, useSelector } from "react-redux"
import { removeCartQTY } from "../../Global/Redoxstate"


const Cart = () => {

    const select = useSelector((state: any) => state.cart)
    console.log(select)

    const dispatch = useDispatch()
    return (
        <div className='w-[100%] min-h '>
            <div className='w-[100%] h-[150px] bg-purple-400 
            flex items-center justify-center text-black
            '>
                <div className='
                font-bold text-[40px] 
                '>shopping cart</div>
            </div>
            <div className='w-[100%] min-h 
              flex items-center justify-center bg-slate-600 
              flex-col gap-[20px]
            '>
                {
                    select.map((el: any) => (
                        <div className='w-[90%] h-[100%] border-[1px] border-solid border-black
                    flex justify-between items-center flex-row
                    '>
                            <div className='min-w-[200px] min-h bg-purple-400
                         flex justify-between items-center flex-row
                        '>
                                <img
                                    src={el.image}
                                    className='w-[90%] h-[100px]' />
                                <div>{el.title}</div>
                            </div>

                            <div>
                                ${el.price}
                            </div>
                            <div className="w-[200px] h-[50px] bg-orange-400
                            flex flex-row justify-between items-center
                            ">

                                <div className="w-[50px] h-[100%] bg-gray-500
                                
                                flex  justify-center items-center
                                "
                                    onClick={() => {
                                        dispatch(removeCartQTY())
                                    }}
                                >-</div>
                                <div className="w-[50px] h-[100%] bg-gray-500
                                  flex  justify-center items-center
                                "> {el.QTY}</div>
                                <div className="w-[50px] h-[100%] bg-gray-500
                                  flex  justify-center items-center
                                ">+</div>
                            </div>
                            <div>${el.price * el.QTY}</div>

                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Cart