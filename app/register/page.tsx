import Container from "@/components/shared/Container";
import RegisterForm from "@/components/auth/RegisterForm";


export default function RegisterPage(){

return (

<Container>

<div className="
mx-auto
max-w-md
py-20
">


<h1 className="
text-4xl
font-bold
">

Create Account

</h1>


<p className="
mt-3
text-gray-600
">

Join StudyMate AI and start learning smarter.

</p>



<div className="mt-8">

<RegisterForm/>

</div>



</div>

</Container>

)

}