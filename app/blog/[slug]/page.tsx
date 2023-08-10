
export const revalidate = 420;

interface Post {
  title: string;
  content: string;
  slug: string;
}

interface Props {
  params: { slug: string };
}

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
console.log("apiUrl", apiUrl)

export async function generateStaticParams() {
  // const posts: Post[] = await fetch(`${apiUrl}/api/content`).then((res) => res.json())
  const posts: Post[] = []
  
  return posts.map((post) => ({ params: { slug: post.slug } }))  
}

export default async function BlogPost({  params }: Props) {
  // const posts: Post[] = await fetch(`${apiUrl}/api/content`).then((res) => res.json())
  const posts: Post[] = []

  const post = posts.find((post) => post.slug === params.slug)!;
  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.content}</p>
    </div>
  )
}