import  Express  from "express";
import path from "path";

const app = Express();

app.set('view engine',"ejs");
app.use(Express.static(path.join(path.resolve(),"public")));


app.get("/" , (req,res) =>{
   res.render("index" )


})

app.listen(5000 ,()=>{
    console.log("server is listsen ")
})