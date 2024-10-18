
import React from "react"; 
import Image from "next/image";
export default function Home() {
  return (
           
           
            <main>
                <div className="underline decoration-4 flex justify-left bg-white-700  text-sm-0 mt-5">
                <p className=" flex text-2xl font-semibold text-gray-900 mt-4">
               MY MOBLIC APPLICATION<br/>
               A moblic app(or moblic APPLICATION) is a software application developed specificalli for use 
               small.wireless computer devices, such as smartphones and tablelts rather,  than desktop or laptop computer.
               
               </p>
               </div>
          
          <div className=" flex justify-end  mt-0 mx-0 py-8 gap-6 items-center">
            <Image src="/mobile1.png" alt="moblie" width={700} height ={700}  className="flex mr-5"  />
           
            </div>
          <div>
            <p className="underline decoration-4 flex justify-centre text-semibold  text-2xl">
            Mobile phones, often referred to as <br/>cell phones, have transformed our lives.<br/>
            They enable instant<br/> communication through calls, <br/>text messages, and social media.
            </p>
          </div>
          <div>
          <Image src="/mobile2.jpg" alt="moblie" width={1000} height ={1000}  className="flex mr-5"  />
           
          </div>
               
          
           
           </main>
            
           
  );
};
   