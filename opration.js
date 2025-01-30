const fs1=require('fs')

//Read the file -readFile()
fs1.readFile('kle.txt','utf8',(err,data)=>
{
  if(err)
  {
    console.error('Error reading file:',err)
  }
console.log(data);
})
//write-->writefile()
fs1.writeFile('kle.txt','Helloworld!!',(err)=>{
    if(err)
    {
        console.log(err)
    }
    console.log('file written successfully');
})
//Append-->appendFile()
fs1.appendFile('kle.txt','\nAppend textworld',(err)=>{
    if(err)
    {
        console.error(err)
    }
    console.log('file Append successfully');
})
//Delete-->unlink()
fs1.unlink('kle.txt',(err)=>{
    if(err)
    {
        console.error(err);
    }
    console.log('deleted successfully');
})
