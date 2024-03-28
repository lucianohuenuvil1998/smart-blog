import { blogsContent } from '@/utils/utils';
import styles from './RecentPost.module.css'
import React from 'react'

const lastBlogs = (array) => {  
    return array.slice(-3); // Toma los primeros 10 elementos
  };
  
const blogs = lastBlogs(blogsContent);

export function RecentPost()  {

  return (
    <div className={styles.container}>

      <div>
        <h2>ÚLTIMAS PUBLICACIONES</h2>
      </div>

      <div className={styles.blogContainer}>

      { blogs.map( blog => 

          <div className={styles.blog} key={blog.id}>


            <img src={ blog.imgUrl} alt="" />

          {/* ---------------------
          id: { blog.id}
          img: { blog.img}
          name: { blog.name}
          url: { blog.url }

--------------------- */}
      </div>

)}



      </div>


 

    </div>
  )
}
