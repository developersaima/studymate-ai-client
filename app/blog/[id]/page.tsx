import Container from "@/components/shared/Container";
import { blogs } from "@/data/blogs";
import Link from "next/link";
import Image from "next/image";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function BlogDetailsPage({ params }: Props) {
  const { id } = await params;

  const blog = blogs.find((item) => item.id === Number(id));

  if (!blog) {
    return (
      <Container>
        <div className="py-24 text-center">
          <h1 className="text-4xl font-bold">
            Blog Not Found
          </h1>

          <Link
            href="/blog"
            className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 text-white"
          >
            Back to Blogs
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <section className="mx-auto max-w-5xl py-16">

        <Image
          src={blog.image}
          alt={blog.title}
          width={1200}
          height={600}
          className="h-[420px] w-full rounded-3xl object-cover"
        />

        <p className="mt-8 text-sm font-medium text-blue-600">
          {blog.date}
        </p>

        <h1 className="mt-3 text-5xl font-bold">
          {blog.title}
        </h1>

        <p className="mt-8 text-lg leading-8 text-gray-700 whitespace-pre-line">
          {blog.content}
        </p>

        <div className="mt-12">
          <Link
            href="/blog"
            className="
            rounded-xl
            bg-blue-600
            px-6
            py-3
            text-white
            hover:bg-blue-700
            transition
            "
          >
            ← Back to Blogs
          </Link>
        </div>

      </section>
    </Container>
  );
}