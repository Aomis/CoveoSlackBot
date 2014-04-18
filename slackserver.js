var express = require("express");

var app = express();

app.get("/", function(req, res) {
    res.send("Hello world! zzz");
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
    console.log("listening on " + port);
});