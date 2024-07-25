const express = require("express");
const path=require('path');


const dbConfig=require("./config/dbConfig")
const app = express();
require("dotenv").config();

dbConfig();

const portfolioRoute=require("./routes/portfolioRoute")

app.use(express.json());
app.use("/api/portfolio",portfolioRoute);

//static files
app.use(express.static(path.join(__dirname,'./portfolio-app/build')))
app.get('*',function(req,res){
  res.sendFile(path.join(__dirname,"./portfolio-app/build/index.html"))
});

const port = process.env.PORT || 5000;
const path=require("path");
if(process.env.NODE_ENV==="production"){
  app.use(express.static(path.join(__dirname,"portfolio-app/build")));
  app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"portfolio-app/build/index.html"))
  })
}

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
