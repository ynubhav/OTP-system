// import tailwindcss from "@tailwindcss/vite";
//to get suggestions

import { useRef, useState } from "react"

export default function Otp(){
    const ref1=useRef(null);
    const ref2=useRef(null);
    const ref3=useRef(null);
    const ref4=useRef(null);
    const refb=useRef(null);
    const[timer,settimer]=useState(10000);
    return(
            <div>
            <div className="shadow-xl m-2 p-4 bg-black rounded-2xl w-[320px] flex justify-center">
            <div className="grid grid-cols-1 justify-center">
            <div className="m-5 text-white text-center">Login via OTP</div>
            <div className="flex justify-center-safe">
                <input ref={ref1} className="bg-black border-white border-1 text-white rounded-md p-1 m-2 text-center w-[30px]" type="character" placeholder="" maxLength={1} onChange={(e)=>{{ref2.current.focus()}}}/>
                <input ref={ref2} className="bg-black border-white border-1 text-white rounded-md p-1 m-2 text-center w-[30px]" type="character" placeholder="" maxLength={1} onChange={(e)=>{{ref3.current.focus()}}}/>
                <input ref={ref3} className="bg-black border-white border-1 text-white rounded-md p-1 m-2 text-center w-[30px]" type="character" placeholder="" maxLength={1} onChange={(e)=>{{ref4.current.focus()}}}/>
                <input ref={ref4} className="bg-black border-white border-1 text-white rounded-md p-1 m-2 text-center w-[30px]" type="character" placeholder="" maxLength={1} onChange={(e)=>{{refb.current.focus()}}}/>
            </div>
            <button ref={refb} className="border-white border-1 bg-white text-black rounded-md py-1 px-2 my-2 mx-4 hover:bg-black hover:text-white cursor-pointer" onClick={()=>{setclick(true)}}>Login</button>
            </div>
            </div>
            </div>
        )
}

//<input className="bg-black border-white border-1 text-white rounded-r-md rounded-br-md p-1 my-2 mr-2 text-center" type="text" placeholder="enter mobile number"/>