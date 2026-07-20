import Container from "@/components/shared/Container";
import AuthForm from "@/components/auth/AuthForm";


export default function RegisterPage(){

return (

<Container>

<div className="
py-20
max-w-md
mx-auto
">


<h1 className="
text-4xl
font-bold
">

Create Account

</h1>


<div className="mt-8">

<AuthForm mode="register"/>

</div>


</div>

</Container>

)

}