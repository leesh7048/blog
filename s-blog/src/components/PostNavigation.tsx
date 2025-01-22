import Link from "next/link";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Post } from "@/service/posts";

type PostNavigationProps = {
  post: Post;
  type: "prev" | "next";
};

export default function PostNavigation({ post, type }: PostNavigationProps) {
  return (
    <Link
      href={`/posts/${post.path}`}
      className="relative w-full bg-gray-100 max-h-56 mb-10"
    >
      <div className="group absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-around items-center text-white px-8">
        {type === "prev" && (
          <FaArrowLeft className="text-5xl m-4 text-green-700 transition-all group-hover:text-6xl" />
        )}
        <div className="w-full text-center">
          <h3 className="text-3xl font-bold">{post.title}</h3>
          <p className="font-bold">{post.content}</p>
        </div>
        {type === "next" && (
          <FaArrowRight className="text-5xl m-4 text-green-700 transition-all group-hover:text-6xl" />
        )}
      </div>
    </Link>
  );
}
