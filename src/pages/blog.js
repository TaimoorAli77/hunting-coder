import React, { useEffect, useState } from 'react';
import styles from '@/styles/Blog.module.css'
import Link from 'next/link';
import * as fs from 'fs';
import InfiniteScroll from 'react-infinite-scroll-component';
// step 1: Collect all the files from the blog data
// step 2: Iterate through them and populate them
const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);
  const [count, setCount] = useState(2);
  const fetchData = async () => {
    let d = await fetch(`http://localhost:3000/api/blogs/?count=${count + 2}`)
    setCount(count + 2)
    let data = await d.json();
    setBlogs(data)
  };
  return (
    <div className={styles.all}>
      <main className={styles.main} >
        <h2 className={styles.h22}>Popular Blogs</h2><br></br>
        <InfiniteScroll
          dataLength={blogs.length} //This is important field to render the next data
          next={fetchData}
          hasMore={props.allCount !== blogs.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {blogs && blogs.map((blogitem) => {
            return <div key={blogitem.slug}>
              <br></br>
              <h3>{blogitem.title}</h3>
              <br></br>
              <p>{blogitem.metadesc.substr(0, 70)}</p>
              <Link href={`/blogpost/${blogitem.slug}`}>
                <button className={styles.submit}>Read More</button></Link>
              <br></br>
              <br></br>
            </div>
          })}
        </InfiniteScroll>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let allCount = data.length;
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < 6; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile(("blogdata/" + item), "utf-8")
    allBlogs.push(JSON.parse(myfile))
  }
  return {
    props: { allBlogs, allCount }
  }
}
export default Blog;
