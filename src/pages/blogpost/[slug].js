import React from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Blogpost.module.css'

//Find the file corresponding to the slug
//populate them inside the page
const Slug = () => {
  const router = useRouter();
  const { slug } = (router.query)
  return (
    <div className={styles.container}>
      <main className={styles.main} >

      <h1>The title of the page is : {slug} </h1>
      <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem perferendis aperiam, similique id quibusdam sequi impedit rerum cumque quam pariatur, vero consequuntur, asperiores dolorum autem. Atque, alias et. Est architecto rem, fugiat quidem sunt error libero corrupti mollitia, voluptatum reiciendis iusto nobis, eum facilis illo! consectetur adipisicing elit. Dicta, tempora quod eaque adipisci quam temporibus ad facilis necessitatibus assumenda quisquam consectetur officia rerum.</p>
      </main>
    </div>
  );
}

export default Slug;
