import Container from "@/components/shared/Container";
import Link from "next/link";
import { blogs } from "@/data/blogs";

export default function BlogPage() {
  return (
    <Container>
      <section className="py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            StudyMate AI Blog
          </h1>

          <p className="mt-4 text-gray-600">
            Tips, guides and AI-powered learning resources.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="
                rounded-2xl
                border
                bg-white
                p-6
                shadow-sm
                transition
                hover:shadow-lg
              "
            >
              <p className="text-sm text-blue-600">
                {blog.date}
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                {blog.title}
              </h2>

              <p className="mt-4 text-gray-600">
                {blog.description}
              </p>

              <Link
                href={`/blog/${blog.id}`}
                className="
                  mt-6
                  inline-block
                  rounded-lg
                  bg-blue-600
                  px-5
                  py-2
                  text-white
                  transition
                  hover:bg-blue-700
                "
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}