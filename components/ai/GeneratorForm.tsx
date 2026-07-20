"use client";


import {useState} from "react";


export default function GeneratorForm(){


const [result,setResult]=useState("");



function generatePlan(){


setResult(
`
Week 1:
Learn JavaScript fundamentals

Week 2:
Master React Components

Week 3:
Build real projects

Week 4:
Advanced Next.js concepts
`
);


}



return (

<div className="
space-y-5
">


<input
placeholder="Your Goal (Example: Become React Developer)"
className="
w-full
rounded-xl
border
p-4
"
/>



<select
className="
w-full
rounded-xl
border
p-4
">

<option>
Beginner
</option>

<option>
Intermediate
</option>

<option>
Advanced
</option>


</select>



<select
className="
w-full
rounded-xl
border
p-4
">

<option>
Short
</option>

<option>
Medium
</option>

<option>
Long
</option>

</select>



<button

onClick={generatePlan}

className="
w-full
rounded-xl
bg-blue-600
py-4
text-white
font-semibold
"

>

Generate With AI

</button>



{
result &&

<div className="
mt-6
rounded-xl
border
bg-slate-50
p-5
whitespace-pre-line
">

{result}

</div>

}



</div>

)

}