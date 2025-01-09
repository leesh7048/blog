"use client";

import { Post } from "@/service/posts";
import { useState } from "react";
import Categories from "./Categories";
import PostList from "./PostList";

interface FilterPostsProps {
  posts: Post[];
  categories: string[];
}

export default function FilterPosts({ posts, categories }: FilterPostsProps) {
  const [selected, setSelected] = useState("all");
  const filtered =
    selected === "all"
      ? posts
      : posts.filter((post) => post.category === selected);

  return (
    <section className="flex gap-4">
      <PostList posts={filtered} />
      <Categories
        categories={["all", ...categories]}
        selected={selected}
        onClick={setSelected}
      />
    </section>
  );
}
