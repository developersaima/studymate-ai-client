import Container from "@/components/shared/Container";


export default function AboutPage(){

return (

<Container>

<section className="py-20">


<h1 className="
text-4xl
font-bold
">

About StudyMate AI

</h1>



<p className="
mt-6
max-w-3xl
text-gray-600
leading-7
">

StudyMate AI is an AI-powered learning assistant
designed to help students create personalized study
plans, manage learning goals, and improve productivity.


</p>



<div className="
mt-12
grid
gap-6
md:grid-cols-3
">


<div className="
rounded-xl
border
p-6
">

<h2 className="
text-xl
font-semibold
">

Smart Planning

</h2>


<p className="mt-3 text-gray-600">

Generate personalized study roadmaps using AI.

</p>


</div>




<div className="
rounded-xl
border
p-6
">

<h2 className="
text-xl
font-semibold
">

AI Assistant

</h2>


<p className="mt-3 text-gray-600">

Ask questions and get instant learning support.

</p>


</div>




<div className="
rounded-xl
border
p-6
">

<h2 className="
text-xl
font-semibold
">

Student Focused

</h2>


<p className="mt-3 text-gray-600">

Built to make learning easier and organized.

</p>


</div>



</div>



</section>


</Container>

)

}