import { WelcomeView } from "../components/welcome-view/WelcomeView"
import { Blogs } from '@/components/blogs/Blogs';
import { RecentPost } from '@/components/recentPost/RecentPost';
// import { SearchForm } from "@/components/form/SearchForm";
import { Carousel } from "@/components/carousel/Carousel";


export default function Home() {
  return (
    <main>

      <Carousel></Carousel>
      <Blogs></Blogs>
      <RecentPost></RecentPost>
    </main>

  )
}
