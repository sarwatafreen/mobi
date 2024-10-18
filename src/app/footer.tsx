import Link from "next/link";
import React from "react"; 
export default function Footer() {
    return (
           <section>
  <div className="flex-1 justify-around bg-red-400 h-12">
    <h2 className=" flex gap-4 justify-center"> FOLLOW US</h2>
<ul className=" flex justify-center gap-x-4 text -4xl">
<li><Link href="/ FACEBOOK"> facebook</Link></li>
<li><Link href="/GITHUB">github</Link></li>
<li><Link href="/REPLIT ">replit</Link></li>
</ul>
<div className="flex justify-center">
<p>&copy;2014 Your Company Name.All rights reserved.</p>
</div>
</div>


</section>
    );
};