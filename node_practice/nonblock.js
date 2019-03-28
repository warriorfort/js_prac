const fs = require('fs');
const https = require('https');
const { spawn } = require('child_process');
const child = spawn('pwd');
//callback approach
// fs.readFile('file.txt',function cb(error,data){

//     if(error) {console.log("error reading file");}

//     else      {
//         console.log("hi there");
//         console.log(data);}


// })

//wrap it in async function then use await

async function filereader()
{
    var data = await fs.readFile('file.txt',(error,data)=>{console.log(data)});
    
    console.log("in here");
    console.log(data);


}

//filereader();

async function fetch(url)
{
return new Promise((resolve,reject) =>{
https.get(url,(res)=>{

let data = '';
res.on('data',(rd)=> {data = data +rd;});
res.on('end',()=>{

   resolve(data);
    //console.log(data);
    console.log("finished reading");
    
}
);

});
    });
//return datar;
}


const data = fetch('https://fast-ocean-23782.herokuapp.com').then((data)=>{console.log(data)});

//console.log(data);

async function wrap()
{
    const data = await fetch('https://fast-ocean-23782.herokuapp.com');
    console.log("inside wrap "+data);
};
wrap();


child.on('exit', function (code, signal) {
    console.log('child process exited with ' +
                `code ${code} and signal ${signal}`);
  });