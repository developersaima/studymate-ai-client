import Container from "@/components/shared/Container";
import { studyPlans } from "@/data/studyPlans";
import Link from "next/link";


export default function DetailsPage({
  params,
}:{
  params:{id:string}
}){


const plan = studyPlans.find(
(item)=>item.id === Number(params.id)
);


if(!plan){
return (
<div className="py-20 text-center">
<h1 className="text-3xl font-bold">
Not Found
</h1>
</div>
)
}



return (

<Container>

<div className="py-16">


<img
src={plan.image}
alt={plan.title}
className="
h-[400px]
w-full
rounded-3xl
object-cover
"
/>



<div className="mt-10">


<h1 className="
text-4xl
font-bold
">

{plan.title}

</h1>


<p className="
mt-5
text-gray-600
text-lg
">

{plan.description}

</p>



<div className="
mt-8
grid
gap-5
md:grid-cols-3
">


<div className="rounded-xl border p-5">
Category
<h3 className="font-bold">
{plan.category}
</h3>
</div>


<div className="rounded-xl border p-5">
Duration
<h3 className="font-bold">
{plan.duration}
</h3>
</div>


<div className="rounded-xl border p-5">
Rating
<h3 className="font-bold">
⭐ {plan.rating}
</h3>
</div>


</div>



<div className="mt-10">

<h2 className="text-2xl font-bold">
Overview
</h2>


<p className="mt-3 text-gray-600">
This AI generated learning roadmap helps students
build skills with personalized guidance and smart planning.
</p>


</div>



<div className="mt-10">

<Link
href="/explore"
className="
rounded-xl
bg-blue-600
px-6
py-3
text-white
"
>
Back Explore
</Link>

</div>



</div>


</div>

</Container>

)

}