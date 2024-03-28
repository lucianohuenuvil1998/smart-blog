import { blogsContent } from '@/utils/utils'
import styles from './Blogs.module.css'
import Link from 'next/link';
import React from 'react'
import { Categories } from '@/shared/categories/Categories';


const randomBlogs = (array) => {
  const arrayAleatorio = array.sort(() => Math.random() - 0.5);

  return arrayAleatorio.slice(0, 10);
};

const blogs = randomBlogs([...blogsContent]);

export function Blogs (){
  return (

    <div className='mt-2'>
    

      <h2 class="m-6 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl md:pl-40 pl-0">Publicaciones destacadas:</h2>
      <div className='flex flex-wrap container mx-auto justify-evenly'>


        { blogs.map( blog => 

          <div key={blog.id} className="w-120 lg:w-96 border border-gray-200 rounded-lg shadow bg-white m-2">
              <Link href={blog.url}>
                  <img className="rounded-t-lg object-cover min-h-48 lg:h-48 w-120 lg:w-96" src={blog.imgUrl} alt=""/>
              </Link>
              <div className="p-5">
                  <p className="mb-2 text-xs text-gray-500 dark:text-gray-400">Fecha de publicación: {blog.fecha}</p>
                  <Link href={blog.url}>
                      <h5 className="mb-2 text-2xl text-gray-800 font-bold">{blog.title}</h5>
                  </Link>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{blog.blogContent}</p>
                  <Link href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Leer publicación
                  </Link>
              </div>
          </div>
        )}

      </div>
    </div>

  )
}
