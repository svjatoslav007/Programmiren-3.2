const express = require("express");
const app = express();
app.get("/", function (req, res) {
    res.send("<h2>Hello user...</h2>")

});
app.get("/name/:name", function (req, res) {
    let name = req.params.name;
    res.send("<h1> Hello " + name + "</h1>");
})


app.listen(3000, function () {
    console.log("my server is runnig on port 3000....")
});
app.get("/google/:search", function (req, res) {
    let search = req.params.search;
    res.redirect("http://google.com/search?q=" + search);
});

app.get("/*", function (req, res) {
    res.status(404).send("<h1>Error 404</h1>");
});



app.use(express.static('../GOL2'))


app.get("/GOL2"),function(req,res){
    res.redirect("index.html")
}