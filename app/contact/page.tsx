import Container from "@/components/shared/Container";


export default function ContactPage(){

return (

<Container>

<section className="py-20">


<h1 className="
text-4xl
font-bold
">

Contact Us

</h1>



<p className="
mt-4
text-gray-600
">

Have questions? Send us a message.

</p>



<form className="
mt-10
max-w-xl
space-y-5
">


<input

placeholder="Your Name"

className="
w-full
rounded-xl
border
p-4
"

/>



<input

placeholder="Email"

type="email"

className="
w-full
rounded-xl
border
p-4
"

/>



<textarea

placeholder="Message"

className="
h-40
w-full
rounded-xl
border
p-4
"

/>



<button

className="
rounded-xl
bg-blue-600
px-8
py-3
text-white
"

>

Send Message

</button>



</form>



</section>


</Container>

)

}