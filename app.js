var express = require("express");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);

server.listen(3000);

app.get("/",function(req,res){
	res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static(__dirname + "/public"))

io.on("connection",function(socket){
	socket.on("switch",function(data){
		if(data == "aan"){
			console.log("het lampje gaat aan");
		}
		if(data == "uit"){
			console.log("het lampje gaat uit");
		}
	})
})