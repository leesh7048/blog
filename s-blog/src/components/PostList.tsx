import { Post } from "@/service/posts";
import PostListCard from "./PostListCard";

export default function PostList({ posts }: { posts: Post[] }) {
  return (
    <ul className="flex flex-col w-full">
      {posts.map((post) => (
        <li
          className=" text-white border-b-[1px] border-white/[0.2] py-6"
          key={post.id}
        >
          <PostListCard post={post} />
        </li>
      ))}
    </ul>
  );
}
