import MarkdownViewer from "@/components/MarkdownViewer";
import PostNavigation from "@/components/PostNavigation";
import { getPostData } from "@/service/posts";
import Image from "next/image";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PostPage(props: Props) {
  const params = await props.params;
  const post = await getPostData(params.slug);

  return (
    <article>
      <h1 className="text-4xl font-bold text-white mb-2">{post.title}</h1>
      <p className="text-white/[0.5] mb-10">{post.date}</p>
      <div className="w-full h-[300px] sm:h-[400px] md:h-[600px] px-4 sm:px-16 md:px-28 py-8 sm:py-12 md:py-20 border-b-[1px] border-white/[0.1]">
        <Image
          className="w-full h-full object-contain"
          src={`/images/posts/${post.path}.png`}
          alt={post.title}
          width={800}
          height={600}
          priority
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
