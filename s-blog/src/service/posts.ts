import { readFile } from "fs/promises";
import path from "path";

export type Post = {
  id: number;
  title: string;
  content: string;
  date: string;
  category: string;
  path: string;
  mainPost: boolean;
};

export type PostData = Post & {
  content: string;
};

export async function getMainPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => post.mainPost));
}
export async function getNonMainPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => !post.mainPost));
}

export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return readFile(filePath, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}
export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), "data", "posts", `${fileName}.md`);
  const metadata = await getAllPosts().then((posts) =>
    posts.find((post) => post.path === fileName)
  );
  if (!metadata) throw new Error(`${fileName} 포스트를 찾을 수 없습니다.`);

  const content = await readFile(filePath, "utf-8");
  return { ...metadata, content };
}
