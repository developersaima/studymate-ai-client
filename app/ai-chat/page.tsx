import Container from "@/components/shared/Container";
import ChatBox from "@/components/ai/ChatBox";


export default function AIChatPage(){


return (

<Container>

<div className="py-16">


<h1 className="
text-4xl
font-bold
">

AI Study Assistant

</h1>


<p className="
mt-3
text-gray-600
">

Ask anything about your learning journey.

</p>


<div className="mt-10">

<ChatBox/>

</div>


</div>


</Container>

)

}