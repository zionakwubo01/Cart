import logo from "../../assets/SAPA LOGO.png"
import { FiSearch } from "react-icons/fi"
import { FiHeart } from "react-icons/fi"
import { FaCartPlus } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
const Header = () => {
    const dispatch = useDispatch()
    const cart = useSelector((state: any) => state.cart)
    return (
        <div>
            <div className='w-[100%] h-[100px] bg-white flex items-center justify-center'>
                <div className='w-[90%] h-[100%]
                flex items-center justify-between
                '>
                    <div className=''>
                        <img src={logo} />
                    </div>
                    <div className='text-black flex gap-[30px]'>
                        <nav>
                            Home
                        </nav>
                        <nav>
                            Shop
                        </nav>
                        <nav>
                            Pages
                        </nav>
                        <nav>
                            Blog
                        </nav>
                        <nav>
                            Contact us
                        </nav>
                    </div>
                    <div className="flex gap-[15px] items-center justify-center">
                        <div className="text-black text-[25px]"><FiSearch /></div>
                        <div className="text-black  text-[25px]"><FiHeart /></div>
                        <div className="h-[30px] w-[1.5px] bg-black">

                        </div>
                        <Link to={"/cart"}>
                            <div className="text-black  text-[25px] flex flex-row items-center"><FaCartPlus />
                                <div className="text-[13px] bg-red-300 w-[15px] h-[15px] rounded-[50%]
                            flex items-center justify-center mb-[20px]
                            "> {cart.length}</div>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header