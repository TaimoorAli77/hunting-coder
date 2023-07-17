import React from 'react';
import styles from '@/styles/Blog.module.css'
import Link from 'next/link';
// step 1: Collect all the files from the blog data
// step 2: Iterate through them and populate them
const Blog = () => {
  return (
    <div>
            <main className= {styles.main} >

      <h2>Popular Blogs</h2><br></br>

      <div>
        <Link href={'/blogpost/learn-javascript'}>
          <h3>How to learn javaScript in 2023?</h3></Link>
        <p>Javascript is the language used to design web logic.</p>
      </div>
      <br></br>

      <div>
        <h3>How to learn javaScript in 2023?</h3>
        <p>Javascript is the language used to design web logic.</p>
        <br></br>
      </div>
      <div>
        <h3>How to learn javaScript in 2023?</h3>
        <p>Javascript is the language used to design web logic.</p>
        <br></br>
      </div><div>
        <h3>How to learn javaScript in 2023?</h3>
        <p>Javascript is the language used to design web logic.</p>
        <br></br>
      </div>
      </main>
    </div>
  );
}

export default Blog;
