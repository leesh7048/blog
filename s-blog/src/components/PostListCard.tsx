import { Post } from "@/service/posts";
import Link from "next/link";

interface PostListCardProps {
  post: Post;
}

export default function PostListCard({
  post: { title, date, content, category, path },
}: PostListCardProps) {
  return (
    <Link href={`/posts/${path}`}>
      <article className="flex flex-col gap-4 group">
        <h3 className="text-3xl font-semibold group-hover:text-[#0085FF]">
          {title}
        </h3>
        <p className="text-sm font-light ">{content}</p>
        <div className="flex gap-4">
          <p className="text-base ">{category}</p>
          <p className="text-base ">{date.toString()}</p>
        </div>
      </article>
    </Link>
  );
}
