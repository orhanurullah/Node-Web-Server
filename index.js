import http from 'http';

const server = http.createServer((req,res) => {
    const url = req.url;
    if(url === '/'){
        res.writeHead(200, {"content-type":"text/html"});
        res.write('<h1>Index Page</h1>');
    }else if(url === '/about'){
        res.writeHead(200, {"content-type":"text/html"});
        res.write('<h1>About Page</h1>');
    }else if(url === '/contact'){
        res.writeHead(200, {"content-type":"text/html"});
        res.write('<h1>Contact Page</h1>');
    }else{
        res.writeHead(404, {"content-type":"text/html"});
        res.write('<h1>404 Page Not Found</h1>');
    }
});

const port = 5000;

server.listen(port, () => {
    console.log(`The application is starting on ${port}`);
});