import { WelcomeView } from "../components/welcome-view/WelcomeView"
import { Blogs } from '@/components/blogs/Blogs';
import { RecentPost } from '@/components/recentPost/RecentPost';
// import { SearchForm } from "@/components/form/SearchForm";
import { Carousel } from "@/components/carousel/Carousel";
import { ShowMore } from "@/components/showMore/ShowMore";


export default function Home() {
  return (
    <main>
      <Carousel></Carousel>
      <RecentPost></RecentPost>
      <ShowMore></ShowMore>
      <Blogs></Blogs>
      <ShowMore></ShowMore>
    </main>

  )
}
