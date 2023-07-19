import React , {useState , useEffect} from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Blogpost.module.css'

//Find the file corresponding to the slug
//populate them inside the page
const Slug = (props) => {
  const [blog, setBlog] = useState(props.blog);

 
  
  return (
    <div className={styles.container}>
      <main className={styles.main} >

      <h1>{blog && blog.title} </h1>
      <p>{blog && blog.content}</p> </main>
    </div>
  );
}


export async function getServerSideProps(context){
  const {slug} = context.query;

  const data = await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`)
  const blog = await data.json()
  return{
    props:{blog}
  }

}
export default Slug;
