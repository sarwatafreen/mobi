// import Link from "next/link";
import React from "react";
import Image from "next/image";
export default function Contact(){
    return(
       <div>
    
       <div className=" flex-0 justify-around  bg-gray-100 mt-11 ml-80">

       </div>
   <div className="flex w-full min-h-screen  flex-col space-y-6 items-center bg-cyan-700 w-full-max-w-2xl p-8 rounded-xl shadow-lg

   text-white "> 
  
   
  
   
  
    <p className=" pt-4 text-black-900  text-1l ">
    A good contact form should include 1 or 2 fields.<br/> The phone number and perhaps a name. <br/>
    Thats it. It also needs a unique call-to-action. Here is ...
    </p>
   
    <div>

    <Image src="/moblie4.jpg" alt="moblie" width={700} height ={700}  className="flex mr-5"  />
        

    </div>
    {/* <div className="flex justify-center font-size-semibold">
        <li><Link href="/ facebook"> FACEBOOK</Link></li>
        <li><Link href="/ TWITTER"> twitter</Link></li>
        </div> */}
    </div>
    </div>

   
    );
};