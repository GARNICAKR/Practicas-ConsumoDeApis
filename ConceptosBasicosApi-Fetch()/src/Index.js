const express=require("express");

const app=express();

//settings
app.set('port',3000);

//middlewares


//routes
app.use(require("./routes/apis"));

app.listen(app.get('port'),()=>{
    console.log("Server on Port 3000");
});