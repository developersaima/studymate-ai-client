"use client";

import Container from "@/components/shared/Container";

export default function Newsletter() {
  return (
    <section className="bg-blue-600 py-24 text-white">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <h2 className="text-4xl font-bold">
            Stay Updated
          </h2>

          <p className="mt-5 text-lg text-blue-100">
            Subscribe to receive AI study tips, product updates and learning resources.
          </p>

          <form className="mt-10 flex flex-col gap-4 md:flex-row">

            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-xl px-5 py-4 text-black outline-none"
            />

            <button
              className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 transition hover:bg-slate-100"
            >
              Subscribe
            </button>

          </form>

        </div>

      </Container>
    </section>
  );
}