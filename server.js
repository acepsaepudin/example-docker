var http = require('http');
var ip = require('ip');
var userCount = 0;
var ip_address = ip.address();
var port = 80;

var server = http.createServer(function (req, res) {
    userCount++;
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello!\n');
    res.write('We have had ' + userCount + ' visits!\n');
    res.write('IP:' + ip_address);
    res.end();
});
server.listen(port);
console.log('running on port:'+port)