// "use client"
import Link from "next/link";
// import { useRouter } from "next/navigation";
import React from "react";

const BlogsPage = async () => {
  // const router = useRouter()
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  });
  const blogs = await res.json();
  return (
    <div className="container mx-auto">
      {blogs.map(({ id, title, body }) => (
        <div key={id} className="block border border-blue-500 p-2 my-2">
          <h2 className="text-xl">
            {id}.{title}
          </h2>
          <p>{body}</p>
          <Link className="inline-block mt-5"
            href={`/blogs/${id}`}
            // onClick={() => router.push(`blogs/${year}/${id}?title=${title}`)}
          >
            <button className="btn text-white border p-2 m-1 bg-blue-500 rounded-lg text-sm">
              Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogsPage;
