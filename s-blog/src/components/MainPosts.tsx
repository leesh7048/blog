import { getMainPosts } from "@/service/posts";
import PostsGrid from "./PostsGrid";

export default async function MainPosts() {
  const posts = await getMainPosts();
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-2xl text-white font-bold">MainPosts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
