const fs = require('fs')

export default async function handler(req,res){
try {
  let data = await fs.promises.readdir("blogdata")
  let myfile;
  let allblogs = []
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    console.log(item);
    myfile = await fs.promises.readFile(('blogdata/' + item), "utf-8")
    // console.log(myfile)
    allblogs.push(JSON.parse(myfile))
  }
  res.status(200).json(allblogs);










  // const data = fs.promises.readdirSync("blogdata" )
  // res.status(200).json(data)
//   let d=[]
//  for(i=0 ; i<data.length; i++)
//   d=data[i]
//  const dataS = fs.readFileSync(("data/"+d), "utf-8")
//  res.status(200).json(dataS)
//     console.log(dataS);
// let allblogs = [];
// data.forEach((items)=>{
//    console.log(items)
//    fs.readFileSync(("blogdata/"+ items) , (d)=>{
//     allblogs.push(d);

//    })
//    res.status(200).json(allblogs)
// })
  

  
} 
catch (error) {
  console.error(error)
  
}
} 