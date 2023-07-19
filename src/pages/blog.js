import React, { useEffect, useState } from 'react';
import styles from '@/styles/Blog.module.css'
import Link from 'next/link';
// step 1: Collect all the files from the blog data
// step 2: Iterate through them and populate them
const Blog = (props) => {
  console.log(props)
  const [blogs, setBlogs] = useState(props.allBlogs);
 

  return (
    <>
      <main className={styles.main} >

        <h2>Popular Blogs</h2><br></br>
        {blogs.map((blogitem) => {
          return <div key={blogitem.slug}>
            <Link href={`/blogpost/${blogitem.slug}`}>
              <h3>{blogitem.title}</h3></Link>
            <p>{blogitem.content.substr(0,50)}</p>
            <br></br>
          </div>
        })}
      </main>

    </>
  );
}
export async function getServerSideProps(context){
  
       let data = await fetch('http://localhost:3000/api/blogs')
       let allBlogs = await data.json()
       
   
  return {
    props: {allBlogs}
  }
}

export default Blog;
