import React , {useState , useEffect} from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Blogpost.module.css'

//Find the file corresponding to the slug
//populate them inside the page
const Slug = () => {
  const [blog, setBlog] = useState();

  const router = useRouter();

  useEffect(() => {
    if(!router.isReady)return;
    const { slug } = (router.query)
   fetch(`http://localhost:3000/api/getblogs?slug=${slug}`).then((d)=>{
    return d.json()
   }).then((parsedata)=>{
    setBlog(parsedata);
   })
  }, [router.isReady]);

  
  return (
    <div className={styles.container}>
      <main className={styles.main} >

      <h1>{blog && blog.title} </h1>
      <p>{blog && blog.content}</p> </main>
    </div>
  );
}

export default Slug;
