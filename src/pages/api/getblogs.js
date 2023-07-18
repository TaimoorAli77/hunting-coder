const fs = require('fs')
//http://localhost:3000/api/getblogs?slug=how-to-learn-javascript
export  default function handler(req,res){

  try {
    const data = fs.readFileSync(`blogdata/${req.query.slug}.json`,"utf-8");
    const jsondata = JSON.parse(data)
    console.log(jsondata)
    res.status(200).json(jsondata);
    
  } catch (error) {
    res.status(400).json({"Error":"No such blog found"})
    console.error(error)
  }
}