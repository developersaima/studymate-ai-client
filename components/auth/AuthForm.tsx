"use client";

import {useState} from "react";


type Props={
 mode:"login"|"register";
}


export default function AuthForm({mode}:Props){


const [email,setEmail]=useState("");
const [password,setPassword]=useState("");



function submit(e:React.FormEvent){

e.preventDefault();

console.log({
email,
password
});

}



return (

<form
onSubmit={submit}
className="
space-y-5
"
>


{
mode==="register" &&

<input
placeholder="Full Name"
className="
w-full
rounded-xl
border
p-4
"
/>

}



<input

type="email"

placeholder="Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

className="
w-full
rounded-xl
border
p-4
"

/>



<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

className="
w-full
rounded-xl
border
p-4
"

/>



<button

className="
w-full
rounded-xl
bg-blue-600
py-4
text-white
font-semibold
"

>

{
mode==="login"
?
"Login"
:
"Create Account"
}


</button>



<button

type="button"

className="
w-full
rounded-xl
border
py-4
font-semibold
"

>

Continue With Google

</button>


</form>

)

}