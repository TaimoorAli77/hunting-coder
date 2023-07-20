import React,{useState} from 'react'
import styles from '../styles/Contact.module.css'
const Contact = () => {
const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
const [desc, setDesc] = useState("");

const handleChange = (e)=>{
if(e.target.name==="name"){
  setName(e.target.value)
}
else if(e.target.name==="phone"){
  setPhone(e.target.value)
}
else if(e.target.name==="email"){
  setEmail(e.target.value)
}

 else if(e.target.name==="desc"){
  setDesc(e.target.value)
}
}


const handleSubmit = (e)=>{
  e.preventDefault();
  console.log(name , desc , email, phone);
  const data = {name , desc , email, phone}

  fetch('http://localhost:3000/api/postcontact',{
    method :'POST',
    headers:{
      'Content-Type':'application/json',
    },
    body: JSON.stringify(data)
  })
  .then(response=>response.text())
  
  .then(data=>{
    console.log(data,"Success ! ")
    alert("Thanks for your views!")
  })
  .catch((error)=>{
    console.error('Error:', error)
  });
setDesc("")
setEmail("")
setName("")
setPhone("")
  }
   return (
    <div className={styles.main} >
      <h1 className={styles.h1}>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input type="text" className={styles.input} onChange={handleChange}  id="name" value={name} name="name" aria-describedby="emailHelp" />
        </div>

        <div className={styles.mb}>
          <label htmlFor="phone" className={styles.label}>Phone Number</label>
          <input type="number" onChange={handleChange} value={phone} className={styles.input} id="phone" name="phone" aria-describedby="emailHelp" />
        </div>
        <div className={styles.mb}>
          <label htmlFor="email"  className={styles.label}>Email address</label>
          <input type="email" value={email} onChange={handleChange} required className={styles.input} id="email" name="email" aria-describedby="emailHelp" />
          <div className={styles.formtext}>We will never share your email with anyone else.</div>
        </div>
        <div className={styles.mb}>
          <label htmlFor="desc" className={styles.label}>Elaborate your concerns</label>
          <textarea className={styles.textarea} onChange={handleChange} value={desc} placeholder="Write your concerns here" name="desc" id="desc" style={{"height": 70 }}/>
        </div>

        <button type="submit" className={styles.submit}>Submit</button>
      </form>
    </div>
  )
}

export default Contact
