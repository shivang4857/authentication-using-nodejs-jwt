import Express from "express";
import path from "path";
import mongoose from "mongoose";

//connecting the database
mongoose
  .connect("mongodb://127.0.0.1:27017", {
    dbName: "backend",
  })
  .then(() => console.log("database connected"))
  .catch((e) => console.log(e));
// defining the schema
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
});
// making the collection or fancy  name model & passing the schema
const Messge = mongoose.model("Mesaage", messageSchema);

const app = Express();
//using the middlewares
app.set("view engine", "ejs");
app.use(Express.static(path.join(path.resolve(), "public")));
app.use(Express.urlencoded({ extended: true })); //gives the data of the form  which is on post method
//by default each thing on the webpage is on the get method by default

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/sucess", (req, res) => {
    res.render("sucess");
  });
  

app.get("/add",(req, res) => {
  Messge.create({ name: "shivang", email: "shivang4857@gmail.com" }).then(
    () => {
      res.send("nice");
    }
  );
});



app.post("/", async(req, res) => {
    const messagedata = {name:req.body.name , email: req.body.email}
    await Messge.create(messagedata);
    console.log(messagedata);

  res.redirect("/sucess")
});

app.listen(5000, () => {
  console.log("server is listsen ");
});
