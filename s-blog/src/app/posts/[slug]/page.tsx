import MarkdownViewer from "@/components/MarkdownViewer";
import PostNavigation from "@/components/PostNavigation";
import { getPostData } from "@/service/posts";
import Image from "next/image";

interface ParamsProps {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params }: ParamsProps) {
  const { slug } = await Promise.resolve(params);
  const post = await getPostData(slug);

  return (
    <article>
      <h1 className="text-4xl font-bold text-white mb-2">{post.title}</h1>
      <p className="text-white/[0.5] mb-10">{post.date}</p>
      <div className="w-full h-[600px] px-28 py-20 border-b-[1px] border-white/[0.1]">
        <Image
          className="w-full h-full"
          src={`/images/posts/${post.path}.png`}
          alt={post.title}
          width={800}
          height={600}
        />
      </div>
      <MarkdownViewer content={post.content} />
      <section className="flex shadow-md">
        {post.prev && <PostNavigation post={post.prev} type="prev" />}
        {post.next && <PostNavigation post={post.next} type="next" />}
      </section>
    </article>
  );
}
