const ejs= require ('ejs');
const express= require ('express');
const app= express();
app.use(express.urlencoded());
console.log("Server is Running....")
app.set('view engine','ejs');
const si = require('stock-info');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/web', {useNewUrlParser: true, useUnifiedTopology: true});

const FullData = mongoose.model('FullData',{
  alldata : String
});


app.get('/',function(req,res){
 res.render('datashow');
})
app.get('/data',function(req,res){
  res.render('data');
 })


app.post('/', function(req,res){

  si.getSingleStockInfo(req.body.coname).then(function(data){
    var name = req.body.coname;
    datajson= JSON.stringify(data);
    var fullInfo = new FullData({alldata:datajson})
    fullInfo.save().then((data) =>  console.log(data));

var currentPrice=data.regularMarketPrice;
console.log(currentPrice);
  var quantity=req.body.quantity;
  var price =req.body.price;
  var store1=quantity*price;
  var store2 =(quantity*currentPrice).toFixed(2);
  if (store1<store2){
    var x= store1-store2;
    var profit=`Profit : ${x}`; 

  }
  else {
    var y= store2-store1;
    var profit=`Loss : ${y}`;

  }


 res.render('data',{quantity:quantity,price:price,store1:store1,store2:store2,name:name,profit:profit});
  } )


    // fullInfo.find( async function(err,data){
    //   console.log(data[data.length-1].alldata.regularMarketPrice);
    //   var currentPrice =data[data.length-1].alldata.regularMarketPrice; 
    //   console.log(currentPrice);
    //   var quantity=req.body.quantity;
    //   console.log(quantity);
    //   var price =req.body.price;
    //   console.log(price);
    //  var store1=quantity*price;
    //  var store2 =quantity*currentPrice;
    // })






})


app.listen(4000);