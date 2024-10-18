import Link from "next/link";
import React from "react";
import Image from "next/image";
export default function About(){
    return(
    <div className="underline decoration-double flex justify-start font-serif  gap-x-0 mx-1 text-2xl text-yellow-900 mt-2"> 
        <li><Link href="/"></Link></li>
        <li><Link href="/"></Link></li>

     <div>
    <h1> ABOUT OUR MOBILE APPLICATION</h1>
   
    
    <div className="underline decoration-double flex-justify-centre font-serif flex-0 text-indent: 0px mt-10 mx-1 ">
        <p className=" ">
            Our mobile appplication is designed to bring convenience and sfficiency to your<br/> fingertips.
            Built to work seamlessly on smartphones and tablets,it provides a user-friendly experiencetailored specifically 
            for mobile devices.

        </p>
    </div>
   <div className="flex justify-center mt-0 mx-0 py-1">
   <Image src="/mobile3.jpg" alt="moblie" width={1000} height={1000} className="flex mr-5" /> 
   </div>
   </div>
   </div> 

    )
}