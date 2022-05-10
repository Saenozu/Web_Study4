var express = require("express");

var app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(3000, function () {
	console.log("listening on port 3000");
});

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/public/index.html");
});

app.post("/", function(req, res) {
	res.send("이름 : "+req.body.name+"<br>나이 : "+req.body.age);
});