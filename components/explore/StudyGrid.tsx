import {studyPlans} from "@/data/studyPlans";
import StudyCard from "./StudyCard";


export default function StudyGrid(){

return (

<div className="
grid
gap-8
md:grid-cols-2
xl:grid-cols-4
">

{
studyPlans.map(plan=>(
<StudyCard
key={plan.id}
plan={plan}
/>
))
}

</div>

)

}