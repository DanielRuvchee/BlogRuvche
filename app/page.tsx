
import Link from "next/link"
import { prisma } from "./utils/db";
import BlogPostCards from "@/components/general/BlogPostCards";

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 2000))//Fake Delay for showing loading

  const data = await prisma.blogPost.findMany({
    select: {
      title: true,
      content: true,
      imageUrl: true,
      authorImage: true,
      authorName: true,
      id: true,
      createdAt: true,
      authorId: true,
      updatedAt: true,
    },
  });

  return data;
}

export default  function Home() {
  

  return ( 
    <div className="py-6">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Latest posts</h1>

    <BlogPost />
    </div>
  );
}

async function BlogPost() {
  const data = await getData()
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item) => (
          <BlogPostCards key={item.id} data={item} />
        ))}
      </div>
  )
}
