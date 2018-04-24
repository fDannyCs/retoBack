const http = require("http");
const fs = require("fs");


const server = http.createServer((req, res) => {

	console.log("Running at 8080 port!");

	fs.readFile("battle.txt", (err, data) => {
		let _data = data.toString();
		res.writeHeader(200, {
			"Content-type": "text/plain; charset=utf-8"
		});
		res.write(_data);
		res.end();
		
	});
});

server.listen(8080);
