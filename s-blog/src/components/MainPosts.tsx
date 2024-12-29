import { getMainPosts } from "@/service/posts";
import PostsGrid from "./PostsGrid";

export default async function MainPosts() {
  const posts = await getMainPosts();
  return (
    <section>
      <h2 className="text-2xl font-bold">MainPosts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
