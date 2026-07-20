import Link from "next/link";

type Props = {
  plan: any;
};


export default function StudyCard({plan}:Props){

return (

<div className="
rounded-3xl
border
bg-white
overflow-hidden
shadow-sm
hover:shadow-xl
transition
">


<img
src={plan.image}
alt={plan.title}
className="
h-48
w-full
object-cover
"
/>


<div className="p-6">

<h3 className="
text-xl
font-bold
">
{plan.title}
</h3>


<p className="
mt-3
text-gray-600
text-sm
">
{plan.description}
</p>


<div className="
mt-5
space-y-2
text-sm
">

<p>
📚 {plan.category}
</p>

<p>
⭐ {plan.rating}
</p>

<p>
⏳ {plan.duration}
</p>


</div>


<Link
href={`/explore/${plan.id}`}
className="
mt-6
block
rounded-xl
bg-blue-600
py-3
text-center
text-white
font-semibold
"
>

View Details

</Link>


</div>

</div>

)

}