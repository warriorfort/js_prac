const http = require('http');
const pid = process.pid;

http.createServer((req, res) => {
  for (let i=0; i<1e7; i++); // simulate CPU work
  res.write(`Handled by process ${pid}`);
  res.end(`Users: ${usersCount}`);
  console.log("Handled by process"+pid);
}).listen(8080, () => {
  console.log(`Started process ${pid}`);
});

process.on('message', msg => {
    console.log(`Message from master: ${msg}`);
  });
  process.on('message', msg => {
    usersCount = msg.usersCount;
  });
