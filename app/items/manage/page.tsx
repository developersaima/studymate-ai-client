import Container from "@/components/shared/Container";
import {studyPlans} from "@/data/studyPlans";


export default function ManagePage(){


return (

<Container>


<div className="py-16">


<h1 className="
text-4xl
font-bold
">
Manage Study Plans
</h1>



<div className="
mt-10
overflow-x-auto
">


<table className="
w-full
border
">


<thead>

<tr className="border">

<th className="p-4 text-left">
Title
</th>

<th className="p-4">
Category
</th>

<th className="p-4">
Action
</th>

</tr>

</thead>



<tbody>


{
studyPlans.map(item=>(

<tr
key={item.id}
className="border"
>


<td className="p-4">
{item.title}
</td>


<td className="p-4 text-center">
{item.category}
</td>


<td className="p-4 text-center space-x-3">


<button
className="
rounded-lg
bg-green-600
px-4
py-2
text-white
"
>
View
</button>


<button
className="
rounded-lg
bg-red-600
px-4
py-2
text-white
"
>
Delete
</button>


</td>


</tr>

))
}


</tbody>


</table>


</div>


</div>


</Container>

)

}