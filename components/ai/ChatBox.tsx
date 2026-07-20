"use client";


import {useState} from "react";


export default function ChatBox(){


const [message,setMessage]=useState("");

const [chat,setChat]=useState<string[]>([]);



function send(){


if(!message) return;


setChat([
...chat,
`You: ${message}`,
`AI: I suggest practicing daily and following your personalized roadmap.`
]);


setMessage("");

}



return (

<div className="
max-w-2xl
space-y-5
">


<div className="
min-h-60
rounded-xl
border
p-5
space-y-3
">


{
chat.map((item,index)=>(

<p key={index}>
{item}
</p>

))
}


</div>



<div className="
flex
gap-3
">


<input

value={message}

onChange={(e)=>setMessage(e.target.value)}

placeholder="Ask AI..."

className="
flex-1
rounded-xl
border
p-4
"

/>


<button

onClick={send}

className="
rounded-xl
bg-blue-600
px-6
text-white
"

>

Send

</button>


</div>


</div>

)

}