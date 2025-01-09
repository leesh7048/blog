import Banner from "@/components/Banner";
import CarouselPosts from "@/components/CarouselPosts";
import MainPosts from "@/components/MainPosts";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-8">
      <Banner />
      <MainPosts />
      <CarouselPosts />
    </div>
  );
}
