import { Post } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
  post: Post;
}

export default function PostGridCard({
  post: { title, content, path, date, category },
}: PostCardProps) {
  return (
    <Link href={`/posts/${path}`}>
      <article className="rounded-md py-4 overflow-hidden shadow-md hover:shadow-lg bg-white shadow-white/[0.1] hover:shadow-white/[0.2]">
        <Image
          className="w-full h-[100px] object-contain "
          src={`/images/posts/${path}.png`}
          alt={title}
          width={200}
          height={100}
        />
        <div className="flex flex-col p-4 items-start">
          <time className="self-end">{date.toString()}</time>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="w-full truncate ">{content}</p>
          <span className="text-sm rounded-lg bg-[#88bdeeb4] px-2 my-2">
            {category}
          </span>
        </div>
      </article>
    </Link>
  );
}
