"use client";


import {useState} from "react";
import Link from "next/link";


const plans=[

{
id:1,
title:"React Mastery",
category:"Frontend",
duration:"3 Months"
},


{
id:2,
title:"Node Backend",
category:"Backend",
duration:"4 Months"
},


{
id:3,
title:"AI Engineer",
category:"AI",
duration:"6 Months"
}


];



export default function ExploreClient(){


const [search,setSearch]=useState("");



const filtered=plans.filter(item=>

item.title
.toLowerCase()
.includes(search.toLowerCase())

);



return(

<div className="mt-10">


<input

placeholder="Search study plan..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

className="
w-full
rounded-xl
border
p-4
"

/>



<div className="
mt-10
grid
gap-6
md:grid-cols-3
">


{
filtered.map(plan=>(


<div

key={plan.id}

className="
rounded-xl
border
p-6
"

>


<h2 className="
text-xl
font-bold
">

{plan.title}

</h2>


<p>
{plan.category}
</p>


<p>
{plan.duration}
</p>


<Link

href={`/explore/${plan.id}`}

className="
mt-4
inline-block
text-blue-600
"

>

View Details

</Link>



</div>


))
}



</div>


</div>

)

}