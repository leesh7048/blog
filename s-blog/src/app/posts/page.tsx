import FilterPosts from "@/components/FilterPosts";
import { getAllPosts } from "@/service/posts";
import React from "react";

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return (
    <div>
      <FilterPosts posts={posts} categories={categories} />
    </div>
  );
}
