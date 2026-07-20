"use client";


import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function AddItemPage(){


const router = useRouter();


const {
 data:session,
 isPending
}=useSession();



useEffect(()=>{


if(!isPending && !session){

router.push("/login");

}


},[
session,
isPending,
router
]);



if(isPending){

return (

<div className="py-20 text-center">

Checking authentication...

</div>

)

}



if(!session){

return null;

}



return (

<div className="
mx-auto
max-w-3xl
py-16
">


<h1 className="
text-4xl
font-bold
">

Add Study Plan

</h1>



<div className="
mt-10
space-y-5
">


<input

placeholder="Title"

className="
w-full
rounded-xl
border
p-4
"

/>



<textarea

placeholder="Short Description"

className="
w-full
rounded-xl
border
p-4
"

/>



<textarea

placeholder="Full Description"

className="
w-full
rounded-xl
border
p-4
h-40
"

/>



<input

placeholder="Duration"

className="
w-full
rounded-xl
border
p-4
"

/>



<button

className="
rounded-xl
bg-blue-600
px-8
py-4
text-white
"

>

Add Item

</button>



</div>


</div>

)

}