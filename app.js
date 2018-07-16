var express = require('express');
var hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname+"/views/partials");
app.set('view engine','hbs');
app.use(express.static(__dirname+"/public"));

app.use((req,res,next) => {
  res.render("maintanence.hbs");
});

hbs.registerHelper('getCurrentYear',()=>{
  return new Date().getFullYear()
})

hbs.registerHelper('capitalize',(value) =>{
  return value.toUpperCase();
})

app.get('/',(req,res)=>{
  res.render("home.hbs",{
    message : "welcome Madhan!",
    pageName : "Home page"
  });
});

app.get('/about',(req,res)=>{
  res.render("about.hbs",{
    message : "Hello there",
    pageName : 'about page'
  })
});

app.listen(3000,()=>{
  console.log("server starts listening in port 3000");
});
