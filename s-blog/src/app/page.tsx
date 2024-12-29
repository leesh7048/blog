import CarouselPosts from "@/components/CarouselPosts";
import MainPosts from "@/components/MainPosts";

export default function HomePage() {
  return (
    <div className="w-full max-w-screen-lg mx-auto">
      <MainPosts />
      <CarouselPosts />
    </div>
  );
}
