import Container from "@/components/shared/Container";
import AuthForm from "@/components/auth/AuthForm";

export default function LoginPage() {
  return (
    <Container>
      <div
        className="
py-20
max-w-md
mx-auto
"
      >
        <h1
          className="
text-4xl
font-bold
"
        >
          Login
        </h1>

        <div className="mt-8">
          <AuthForm/>
        </div>
      </div>
    </Container>
  );
}
