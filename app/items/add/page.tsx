import Container from "@/components/shared/Container";


export default function AddItemPage(){


return (

<Container>

<div className="py-16 max-w-2xl mx-auto">


<h1 className="
text-4xl
font-bold
">
Create Study Plan
</h1>



<form className="
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



<input
placeholder="Image URL"
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

Submit

</button>


</form>


</div>

</Container>

)

}