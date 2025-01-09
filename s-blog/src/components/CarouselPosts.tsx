import { getNonMainPosts } from "@/service/posts";
import React from "react";
import PostCard from "./PostGridCard";
import MultiCarousel from "./MultiCarousel";

export default async function CarouselPosts() {
  const posts = await getNonMainPosts();
  return (
    <section className="my-4">
      <h2 className="text-2xl text-white font-bold my-4">posts</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </MultiCarousel>
    </section>
  );
}
