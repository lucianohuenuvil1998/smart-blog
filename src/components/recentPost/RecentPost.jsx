import { blogsContent } from '@/utils/utils';
import { CardBlog } from '../cardBlog/CardBlog';

const lastBlogs = (array) => {  
    return array.slice(-3); // Toma los primeros 10 elementos
  };
  
const blogs = lastBlogs(blogsContent);

export function RecentPost()  {
  return (
    <div className='mt-2'>
      <div className='flex justify-center w-full'>
        <h2 className="container m-6 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl ">Publicaciones recientes:</h2>
      </div>
      <div className='flex flex-wrap container mx-auto justify-evenly'>
        <CardBlog blogs={blogs}></CardBlog>
      </div>
    </div>
  )
}
