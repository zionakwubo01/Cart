import { useState } from "react"
import { FiSearch } from "react-icons/fi"
import { FiHeart } from "react-icons/fi"
import { FiShare } from "react-icons/fi"
import data from "../Data.json"
import { useDispatch } from "react-redux"
import { Addtocart } from "../../Global/Redoxstate"


const Sales = () => {
    const [state, setstate]: any = useState(data)

    const dispatch = useDispatch()

    return (
        <div>
            <div className="w-[100%] h-[700px]
            flex items-center justify-center 

            ">
                <div className="w-[88%] h-[100%]
             flex flex-col  justify-between 
         ">
                    <div
                        className="w-[100%] h-[100px]  flex flex-row
                          justify-between items-center"
                    >
                        <div className="font-bold text-[40px] text-black">
                            FLASH SALES
                        </div>
                        <div className="w-[200px] h-[50px] bg-orange-400">

                        </div>

                    </div>
                    <div className="w-[100%] h-[500px] mb-[70px]
                    flex flex-row justify-between flex-wrap
                    ">
                        {
                            state.map((el: any) => (
                                <div className="w-[330px] h-[100%] bg-green-300">
                                    <div className=" relative w-[100%] h-[80%] bg-red-300 ">

                                        <img src={el.image} className="w-[100%] h-[100%]" />

                                        <div
                                            className="w-[100%] h-[100%]
                                    absolute top-0 opacity-0 hover:opacity-[1] 
                                    transition-all ease-in-out duration-300
                                    flex justify-between flex-col
                                    "
                                        >
                                            <div className="w-[15%] h-[120px]
                                     flex flex-col  justify-between
                                     items-center gap-[3px]
                                     ">
                                                <div className="text-[20px] text-white font-bold
                                        bg-gray-300 w-[40px] h-[40px] flex items-center justify-center
                                        "><FiSearch /></div>
                                                <div className="text-[20px] text-white font-bold
                                        flex items-center justify-center bg-gray-300 w-[40px] h-[40px]
                                        "><FiHeart /></div>
                                                <div className="text-[20px] text-white font-bold
                                        flex items-center justify-center bg-gray-300 w-[40px] h-[40px]
                                        "><FiShare /></div>
                                            </div>

                                            <button className="bg-gray-400 w-[100%] h-[50px]
                                    hover:bg-orange-400 transition-all ease-in-out duration-300
                                    "
                                                onClick={() => {
                                                    dispatch(Addtocart(el))
                                                }}
                                            >
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                    <div className="w-[100%] h-[20%] bg-white flex flex-col justify-between">
                                        <div className="text-black font-bold">{el.title}</div>
                                        <div className="text-orange-400 text-[18px] font-bold">N{el.price * 700}</div>
                                        <div className="text-black font-bold">{el.rating.rate}</div>

                                    </div>
                                </div>
                            ))
                        }


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Sales