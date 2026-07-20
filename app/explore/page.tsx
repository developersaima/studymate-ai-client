import Container from "@/components/shared/Container";
import StudyGrid from "@/components/explore/StudyGrid";


export default function ExplorePage(){

return (

<Container>

<div className="py-16">


<h1 className="
text-4xl
font-bold
">
Explore AI Study Plans
</h1>


<p className="
mt-3
text-gray-600
">
Find personalized learning roadmaps created with AI.
</p>


<div className="mt-10">

<StudyGrid/>

</div>


</div>


</Container>

)

}