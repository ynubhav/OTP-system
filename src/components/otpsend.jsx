import { useEffect, useState } from "react"

// import tailwindcss from "@tailwindcss/vite"
export default function Send(){
    const [click,setclick]=useState(false);
    const [color,setcolor]=useState('white');
    const[re,setre]=useState('');
    const[timer,settimer]=useState(10);
    const [endtimer,setend]=useState(true)

   
    return(
        <div>
            <div className="shadow-xl m-2 p-4 bg-black rounded-2xl w-[320px] flex justify-center">
            <div className="grid grid-cols-1 justify-center">
            <div className="m-5 text-white text-center">Login via OTP</div>
            <div className="flex"><div><select className="bg-white text-black rounded-l-md rounded-bl-md text-center p-2 my-2 ml-2"><option value="+91">+91</option>
            <option value="+92">+92</option>
            <option value="+93">+93</option>
            <option value="+01">+01</option></select></div><input className="bg-black border-white border-1 text-white rounded-r-md rounded-br-md p-1 my-2 mr-2 text-center" type="text" placeholder="enter mobile number"/></div>
            <button className={` border-white border-1 bg-white text-black rounded-md py-1 px-2 my-2 mx-4 hover:bg-black hover:text-white cursor-pointer`} onClick={()=>{setclick(!click);if(click){setre('Re-')}else {setre('');}}}>{re}Send OTP</button>
            {!endtimer&&<div className="text-white">{timer}</div>}
            </div>
            </div>
        </div>
        
    )
}
