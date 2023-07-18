const fs = require('fs');
export default function handler(req,res){
  
res.status(200).json({"title":"Taimoor Awsome"})
}


try {
  const data = fs.readFileSync('/Users/joe/test.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}
