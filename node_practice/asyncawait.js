const http = require('http');
const fs = require('fs');
const req = require('request');
const os = require('os');
const port = 27000;
const debug = require('debug')('request')
const name = 'my-app'
debug('booting %s', name)
async function init()
{
var options = {
    url: 'https://api.github.com/users/warriorfort',
    headers: {
        'User-Agent': 'request'
    }
};
req.get(options, function(err, resp, body) {
    if (err) {
        //
    } else {

        
      //  console.log(JSON.parse(body));
        return "hi there";
    }
})

return "hi there ";
}
async function requesthandler(request,response)
{

console.log(request.url);
//console.log(request);
console.log(os.cpus().length);

if(request.url == '/log'){


    //do some blocking task
    
   // looper();
//    for(var i=0;i<10000;i++) 
//     {
//        // console.log(i);
//         response.write(i.toString());
//     }





await init().then((sum) => {
    console.log(sum);
  });
  await init().then((sum) => {
    console.log(sum);
  });
//response.write(userDetails.toString());
let contents = fs.readFileSync('file.txt', 'utf8');
// this line is not reached until the read results are in
 console.log(contents);
    response.write(contents);
    response.write("hi");
    response.write("no updates in log");
}

response.end("Node Server listening at port 27000"+process.pid);

}

async function looper()
{

    for(var i=0;i<10000;i++) 
    {
       // console.log(i);
        response.write(i.toString());
    }



}

function cb (err)
{

    if(err)
    {
        console.log("Error starting server at port");

    }

    console.log("server listening at port 27000")
}

const server = http.createServer(requesthandler);


server.listen(port,cb);