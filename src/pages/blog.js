import React, { useEffect, useState } from 'react';
import styles from '@/styles/Blog.module.css'
import Link from 'next/link';
// step 1: Collect all the files from the blog data
// step 2: Iterate through them and populate them
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    return () => {
      console.log("useEffect is running")
      fetch('http://localhost:3000/api/blogs').then((a) => {
        return a.json();
      }).then((parsed) => {
        console.log(parsed)
        setBlogs(parsed)

      })
    };
  }, []);

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

export default Blog;
