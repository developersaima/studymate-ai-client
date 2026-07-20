"use client";


import { useState } from "react";
import { signUp, signInGoogle } from "@/lib/auth-client";
import { useRouter } from "next/navigation";


export default function RegisterForm(){


const router = useRouter();


const [name,setName] = useState("");

const [email,setEmail] = useState("");

const [password,setPassword] = useState("");

const [error,setError] = useState("");

const [loading,setLoading] = useState(false);



async function handleSubmit(
  e: React.FormEvent
){

e.preventDefault();


try{


setLoading(true);

setError("");



const result = await signUp.email({

name,

email,

password,

callbackURL:"/",

});



if(result.error){

setError(
result.error.message || "Registration failed"
);

return;

}



router.push("/");



}

catch(error){

setError(
"Something went wrong"
);

}


finally{

setLoading(false);

}


}



return (

<div className="space-y-5">


<form
onSubmit={handleSubmit}
className="space-y-5"
>


<input

placeholder="Full Name"

value={name}

onChange={(e)=>setName(e.target.value)}

className="
w-full
rounded-xl
border
p-4
"

/>



<input

placeholder="Email"

type="email"

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

placeholder="Password"

type="password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

className="
w-full
rounded-xl
border
p-4
"

/>



{
error &&

<p className="
text-sm
text-red-500
">

{error}

</p>

}



<button

disabled={loading}

className="
w-full
rounded-xl
bg-blue-600
py-4
text-white
font-semibold
disabled:opacity-50
"

>

{
loading
?
"Creating Account..."
:
"Create Account"
}


</button>



</form>




<div className="
text-center
text-gray-500
">

OR

</div>




<button

onClick={signInGoogle}

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



</div>

)

}