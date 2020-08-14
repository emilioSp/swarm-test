const http = require('http');
const url = require('url')

const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const init = async () => {
  // Simulate start delay
  await sleep(5000);
  const server = http.createServer( async (req, res) => {
    const requestUrl = url.parse(req.url);
    const path = requestUrl.pathname;
    if (path === '/kill') {
      process.exit(-1);
    }
    res.writeHead(200, {'Content-Type': 'application/json'});
    const response = {
      status: 'OK',
      date: new Date().toISOString()
    }
    console.log(response);
    res.end(JSON.stringify(response));
  });

  server.listen(80);
  console.log('Server started');
}

init();