import Container from "@/components/shared/Container";
import GeneratorForm from "@/components/ai/GeneratorForm";


export default function AIGeneratorPage(){

return (

<Container>

<div className="py-16">


<div className="max-w-3xl mx-auto">


<h1 className="
text-4xl
font-bold
">
AI Study Plan Generator
</h1>


<p className="
mt-3
text-gray-600
">
Generate personalized learning roadmap using AI.
</p>


<div className="mt-10">

<GeneratorForm/>

</div>


</div>


</div>

</Container>

)

}