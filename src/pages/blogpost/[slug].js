import React, { useState } from 'react';
import styles from '../../styles/Blogpost.module.css'
import * as fs from 'fs';
//Find the file corresponding to the slug
//populate them inside the page
const Slug = (props) => {
  const [blog, setBlog] = useState(props.blog);
  function createMarkup(d) {
    return { __html: d };
  }


  return (
    <div className={styles.container}>
      <main className={styles.main} >

        <h1>{blog && blog.title} </h1>
        {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
      </main>
    </div>
  );
}


export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "how-to-learn-Django" } },
      { params: { slug: "how-to-learn-flask" } },
      { params: { slug: "how-to-learn-javascript" } },
      { params: { slug: "how-to-learn-NextJS" } },

    ],
    fallback: true
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  let myblog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')
  let blog = JSON.parse(myblog)
  return {
    props: { blog }
  }

}
export default Slug;
