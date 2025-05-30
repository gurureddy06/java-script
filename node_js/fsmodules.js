const fs = require('fs');

fs.readFile('file.txt','utf8',(err, data)=>{
    console.log(err, data);
})
console.log("Finished reading file");

fs.writeFile('file2.txt', "This is a data", ()=> {
    console.log("Written to the file");
})