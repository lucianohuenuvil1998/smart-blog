import { blogsContent } from '@/utils/utils'
import { CardBlog } from '../cardBlog/CardBlog';

const randomBlogs = (array) => {
  const arrayAleatorio = array.sort(() => Math.random() - 0.5);

  return arrayAleatorio.slice(0, 10);
};

const blogs = randomBlogs([...blogsContent]);

export function Blogs (){
  return (
    <div className='mt-2'>
      <div className='flex justify-center w-full'>
        <h2 className="container m-6 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl ">Publicaciones destacadas:</h2>
      </div>
      <div className='flex flex-wrap container mx-auto justify-evenly'>
        <CardBlog blogs={blogs}></CardBlog>
      </div>
    </div>
  )
}
