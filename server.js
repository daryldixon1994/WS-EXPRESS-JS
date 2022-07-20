const express = require("express");
const path = require("path");
const app = express();
//middlewares
app.use(express.json());
// app.set("view engine", "pug");

app.use("/api/admin", require("./routes/admin/admin"));

// app.get("/", (req, res) => {
//     res.render("index", { title: "Hey", message: "Hello there!" });
// });
//app.all

//app.listen
app.listen(5000, (err) => {
    if (err) throw err;
    console.log(`Server is running on http://localhost:5000/`);
});
