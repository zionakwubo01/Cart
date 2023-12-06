import img from "../../assets/watch3.jpg"

const Heropage = () => {
    return (
        <div>
            <div className='w-[100%] h-[calc(100vh-100px)] bg-blue-800
            flex items-center justify-center
            '>
                <div className='w-[85%] h-[100%]
                flex justify-between items-center'>
                    <div className='w-[40%] h-[90%] bg-red-300 flex items-center justify-center'>
                        <img src={img} className="w-[100%] h-[100%]" />
                    </div>
                    <div className="w-[50%] flex flex-col gap-[10px]">
                        <div>HYBIRD SMARTWATCH</div>
                        <div
                            className="font-extrabold text-[40px]"
                        >WEARABLE HEALTH YOU'LL <br />WANT TO WEAR</div>
                        <div>explore a range of hybird smartwatchs crafted to track
                            ,monitor and improve <br />overall health and wellness. powered
                            by state of the art technology, sapa trackers<br /> are renowned
                            for thier winnings and unsurpassed battery lif
                        </div>
                        <div
                            className="mt-[25px]"
                        >#1</div>
                        <div className="text-orange-400">WORLDWIDE</div>
                        <div>sapa invented the first hybird smart watch</div>
                        <button className='bg-orange-400 text-white
                        w-[150px] h-[50px]
                        '>but now</button>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Heropage