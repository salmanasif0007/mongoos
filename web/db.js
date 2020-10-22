const ejs= require ('ejs');
const mongoose = require('mongoose');
const express= require ('express');
const fs=require('fs');
const app= express();
mongoose.connect('mongodb://localhost:27017/web', {useNewUrlParser: true, useUnifiedTopology: true});
app.use(express.urlencoded());
app.set('view engine','ejs')

const Info = mongoose.model('Info', { 
  pName: {
      type:String ,
      min:1,
      max:30
  },
  email:{ type:String ,
      require:true
  },
  password:{
     type:String,
     min:5,
     max:19
  }
});

const Newsfeed = mongoose.model('Newsfeed', { 
  name:String,
  caption: String,
  image:String,
});

app.get('/',function(req,res){
  res.render('mainpage');     
})

app.get('/signUp',function(req,res){
    res.render('homepage');     
  })
  app.get('/logIn',function(req,res){
    res.render('loginpage');     
  })






  app.get('/data',function(req,res){
    // app.set('realName', req.body.pName);
    app.set('dataName', app.get('dataNane'));
    res.render('data');     
  })








  app.get('/signUpRoute',function(req,res){
    res.render('loginpage');     
  })
  app.get('/newsfeed',function(req,res){
    res.render('newsfeed');     
  })
  app.get('/saveData',function(req,res){
       
  })



app.post('/',function(req,res){
   
    const fullInfo = new Info({ pName:req.body.name ,email:req.body.email,password:req.body.password });
    Info.find(function (err ,data) {

  var count =0;
   for(var i=0;i<data.length;i++){
      if(req.body.logEmail == data[i].email && req.body.logPassword == data[i].password){
        app.set('dataName', data[i].pName)
       res.render('data',{data:data[i]});
       count++;
      }
     }
     if(count==0){
      res.render('warning');
     }
  


  })
  
//  fullInfo.save().then((data) => console.log(data));
})

app.post('/signUpRouth',function(req,res){
  const fullInfo = new Info({ pName:req.body.name ,email:req.body.email,password:req.body.password });
  fullInfo.save().then((data) => console.log(data));
  res.render('loginpage');
})

app.post('/newsfeed',function(req,res){

  app.get('dataName');


  const fulldata = new Newsfeed({ caption:req.body.caption ,image:req.body.img,name:dataName });
  fulldata.save().then((data) => console.log(data));
  Newsfeed.find(function(err,data){
    res.render('newsfeed',{data:data});
    console.log(data)
  })
  res.render('data');
})


app.listen(4000);