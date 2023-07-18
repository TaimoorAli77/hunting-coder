const fs = require('fs')

export default function handler(req,res){
try {
  const data = fs.readdirSync("blogdata" )
  // const parsedata = JSON.parse(data)
  res.status(200).json(data)
  console.log(data)

  
} catch (error) {
  console.error(error)
  
}
} 