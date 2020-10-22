// // const express= require('express');
// // const app= express();
// // const si = require('stock-info');
// // const fs = require ('fs');

// // app.use (express.urlencoded());

// // app.get('/',function(req,res){
// //     res.sendFile(__dirname+'/index.html');
// //     console.log(__dirname);

// // })

// // app.post('/save',function(req,res){
// //     var a=req.body.name;
// //     console.log(req.body.name);
// //     var b=req.body.quantity;
// //     console.log(req.body.quantity);
// //     var c=req.body.price;
// //     console.log(req.body.price);
// //     si.getSingleStockInfo(a).then (function(stock){
        
// //         var x,y;
// //         x=(b*c);
// //         y=(b*stock.regularMarketPrice);
// //         console.log("Total buying price " + x);
// //         console.log("Total current price " + y);
// //         var p=y-x;
// //         var q=x-y;
// //         if(y>x){
// //         console.log("profit: "+p);
// //         }
// //         else{
// //         console.log("loss: "+q);
// //         }
// //   fs.readFile("stockinfo.txt",function(err,data){
        
// //     var result1=JSON.parse(data);
// //     var result2={company:a,Quantity:b,BuyingPrice:c,Totalbuyingprice:x,Totalcurrentprice:y, profit:p, Loss:q}
    
        
// //     result1.push(result2);
// //     var z = JSON.stringify(result1);
// //     fs.writeFile('stockinfo.txt',z,function(err){

// //     })
// //    })

// // res.write("<h1>Company Name: "+a+"</h1>")
// // res.write("<h1> Quantity: "+b+"</h1>")
// // res.write("<h1> Buying Price: "+c+"</h1>")
// // res.write("<h1> Total Buying price: "+x+"</h1>")
// // res.write("<h1> Total Market price: "+y+"</h1>")
// // if(y>x){
// //     res.write("<h1>profit: "+p+"</h1");
// //     }
// //     else{
// //         res.write("<h1>Loss: "+q+"</h1");
// //     }
// //  res.send();
// //     })


// // });


// // app.listen(3000)




// const ejs= require ('ejs');
// const express= require ('express');
// const app= express();
// app.use(express.urlencoded());
// app.set('view engine','ejs')


// app.get('/',function(req,res){
//    res.render('index');
// })
// app.post('/save',function(req,res){
//   var a=req.body.num1;
//   console.log(req.body.num1);
//   var b=req.body.num2;
//   console.log(req.body.num2);

//   var sum=0;
//   var av=0;
//   var i=0;

//   var x=parseInt(a);
//   var y=parseInt(b);

//   for(i=x;i<=y;i++){
//   sum=sum+i;
//   }

//   var s=((y-x)+1);
//    av=sum/s;
//     console.log(sum);
//   console.log(av);
//   console.log(s);

//   var movieList = [
//     { title: "star wars episode 7", year: 1977, length: 125, rating: 8.7, genre: "sci-fi" },
//     { title: "The Matrix Revolutions", year: 2003, length: 129, rating: 6.7, genre: "sci-fi" },
//     { title: "Omen The Final Conflict", year: 1981, length: 108, rating: 6.7, genre: "horror" },
//     { title: "Gladiator", year: 2000, length: 155, rating: 8.5, genre: "historical" },
//     { title: "The Patriot", year: 2000, length: 165, rating: 7.1, genre: "historical" },
//     {title: "The Matrix Reloaded", year: 2003, length: 138, rating: 7.2, genre: "sci-fi"}
//   ];
  


// var mm = [sum,av,s];
// var xa =[movieList[0].title,movieList[0].year,movieList[0].length,movieList[0].rating,movieList[0].genre];
// var xb =[movieList[1].title,movieList[1].year,movieList[1].length,movieList[1].rating,movieList[1].genre];
// var xc =[movieList[2].title,movieList[2].year,movieList[2].length,movieList[2].rating,movieList[2].genre];
// var xd =[movieList[3].title,movieList[3].year,movieList[3].length,movieList[3].rating,movieList[3].genre];
// var xe =[movieList[4].title,movieList[4].year,movieList[4].length,movieList[4].rating,movieList[4].genre];
// var xf =[movieList[5].title,movieList[5].year,movieList[5].length,movieList[5].rating,movieList[5].genre];

// for (var i=0;i<=movieList.length;i++)
// {
//   aa=movieList[i];
//   console.log(aa);
// }

// res.render('data',{

//   movieList:movieList
// })
// })
// app.listen(4000);

const ejs= require ('ejs');
const express= require ('express');
const app= express();
app.use(express.urlencoded());
app.set('view engine','ejs')

var data=[

  {
    name:"Dairy Milk",
    url:"https://www.searchpng.com/wp-content/uploads/2019/01/Cadbury-Dairy-Milk-Chocolate-PNG-Image-715x663.png",
    amount:45,
    price:90,
    Category:"Chocolates"
  },
  {
    name:"Skittles",
    url:"https://i2-prod.manchestereveningnews.co.uk/incoming/article11544961.ece/ALTERNATES/s1200/Skittles.jpg",
    amount:45,
    price:90,
    Category:"Candies"
  },
  {
    name:"Lolipop",
    url:"https://previews.123rf.com/images/bluedarkat/bluedarkat1301/bluedarkat130100042/17613847-lollipop-candy-rainbow-colors.jpg",
    amount:45,
    price:90,
    Category:"Candies"
  },
  {
    name:"m & m's",
    url:"https://previews.123rf.com/images/bluedarkat/bluedarkat1301/bluedarkat130100042/17613847-lollipop-candy-rainbow-colors.jpg",
    amount:45,
    price:90,
    Category:"Chocolates"
  },
  {
    name:"Dairy Milk",
    url:"https://www.searchpng.com/wp-content/uploads/2019/01/Cadbury-Dairy-Milk-Chocolate-PNG-Image-715x663.png",
    amount:45,
    price:90,
    Category:"Chocolates"
  },
  {
    name:"Skittles",
    url:"https://i2-prod.manchestereveningnews.co.uk/incoming/article11544961.ece/ALTERNATES/s1200/Skittles.jpg",
    amount:45,
    price:90,
    Category:"Candies"
  },
  {
    name:"Lolipop",
    url:"https://previews.123rf.com/images/bluedarkat/bluedarkat1301/bluedarkat130100042/17613847-lollipop-candy-rainbow-colors.jpg",
    amount:45,
    price:90,
    Category:"Candies"
  },
  {
    name:"m & m's",
    url:"https://previews.123rf.com/images/bluedarkat/bluedarkat1301/bluedarkat130100042/17613847-lollipop-candy-rainbow-colors.jpg",
    amount:45,
    price:90,
    Category:"Chocolates"
  },


  {
    name:"Shuttlecock",
    url:"https://atlas-content-cdn.pixelsquid.com/stock-images/shuttlecock-Va7JLK5-600.jpg",
    amount:2000,
    price:3000,
    Category:"Badmiton"
  },

  {
    name:"T-shirt",
    url:"https://ae01.alicdn.com/kf/HTB1vaCRmrZnBKNjSZFhq6A.oXXaw/Free-Printing-Badminton-shirt-Men-Women-sports-badminton-t-shirt-Table-Tennis-shirts-Tennis-wear-dry.jpg",
    amount:2000,
    price:3000,
    Category:"Badmiton"
  },
  {
    name:"Li-Ning T-shirt",
    url:"https://ae01.alicdn.com/kf/Hd131366caf7e422794e628559e4cfaefu/Li-Ning-Men-Badminton-T-Shirts-AT-DRY-Breathable-Competition-Top-Comfort-Fitness-LiNing-Sports-Tees.jpg",
    amount:2000,
    price:3000,
    Category:"Badmiton"
  },
  {
    name:"Yonex T-shirt",
    url:"https://ae01.alicdn.com/kf/HTB1LtdaSNjaK1RjSZFAq6zdLFXaT.jpg",
    amount:2000,
    price:3000,
    Category:"Badmiton"
  },
  {
    name:"Yonex Racket",
    url:"https://5.imimg.com/data5/CN/HZ/EA/SELLER-65772240/yonex-badminton-racket-500x500.jpg",
    amount:2000,
    price:3000,
    Category:"Badmiton"
  },
  {
    name:"Li-Ning Racket",
    url:"https://cf.shopee.com.my/file/71889cd728aa61f24c5ec530c9d6d273",
    amount:2000,
    price:3000,
    Category:"Badmiton"
  },
  {
    name:"Li-Ning Shoes",
    url:"https://shopbadmintononline.com/images_zoom/mens-badminton-shoe-AYTM037-3-B.jpg",
    amount:2000,
    price:3000,
    Category:"Badmiton"
  },
  {
    name:"Yonex Shoes",
    url:"https://www.stringersworld.com/images/detailed/36/SHB65XMEX_BR.jpg?t=1524149597",
    amount:2000,
    price:3000,
    Category:"Badmiton"
  },

  {
      name:"Football",
      url:"https://lh3.googleusercontent.com/proxy/WuW69n-kws8-aH1xP2FjXJ5RXOI-13gPlwKe902WjSJxCIss0seXkIH-7Ron_t299zdLdqfmkge1yt2ZVeIbiAQAH4w-xKSe1TLahAlTjVTUG8T3",
      amount:1050,
      price:2000,
      Category:"Football"
    },
    {
      name:"Hand Gloves",
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqrnEdabJDm6qYGVhikEeiON82hfy9WHhnkY60NkBuIo3iv_rd",
      amount:1050,
      price:2000,
      Category:"Football"
    },
    {
      name:"Shoes",
      url:"https://www.umbro.com/en-us/wp-content/uploads/sites/2/2019/07/UX-Accuro-3-Homepage-Background-Image-2000x1125px.jpg",
      amount:1050,
      price:2000,
      Category:"Football"
    },
    {
      name:"FC Barcelona T-shirt",
      url:"https://img.favpng.com/13/23/22/camp-nou-fc-barcelona-t-shirt-jersey-png-favpng-87UT3ZWbvrJMP33YyXQF8tvB7.jpg",
      amount:1050,
      price:2000,
      Category:"Football"
    },
    {
      name:"Real Madrid",
      url:"https://images-na.ssl-images-amazon.com/images/I/71VXrKSqB6L._SL1500_.jpg",
      amount:1050,
      price:2000,
      Category:"Football"
    },
    {
      name:"Brazil Flag",
      url:"https://i.ebayimg.com/images/g/1v0AAOSwp91cmKgK/s-l300.jpg",
      amount:1050,
      price:2000,
      Category:"Football"
    },
    {
      name:"Brazil T-shirt",
      url:"https://www.uksoccershop.com/images/1522014176-brazil-nike-2018-19-home-football-shirt.jpg",
      amount:1050,
      price:2000,
      Category:"Football"
    },
    {
      name:"Brazil T-shirt",
      url:"https://c.76.my/Malaysia/brazil-cbf-stadium-world-cup-2018-fans-jersey-l-jersey-1901-18-F1019169_4.jpg",
      amount:1050,
      price:2000,
      Category:"Football"
    },

    {
      name:"Cricket Bad",
      url:"https://lh3.googleusercontent.com/proxy/3kvyIZ6a9St1m3xHF4FQmt_it1UY_G4FukW8WW1ckmsMCZRFU1QAjs3TF4WgZh-D66xWyJeGDjrxcY3VOO62_uiDaOkeVGo95supaiokTy-szvE_",
      amount:1055,
      price:3050,
      Category:"Cricket"
    },
    {
      name:"Cricket Ball",
      url:"https://static6.depositphotos.com/1157310/657/v/450/depositphotos_6578814-stock-illustration-shiny-red-traditional-cricket-ball.jpg",
      amount:1055,
      price:3050,
      Category:"Cricket"
    },
    {
      name:"Cricket Bading gloves",
      url:"https://images-na.ssl-images-amazon.com/images/I/71MZH9aBaXL._SX466_.jpg",
      amount:1055,
      price:3050,
      Category:"Cricket"
    },
    {
      name:"Cricket Keeping gloves",
      url:"https://cdn.shopify.com/s/files/1/1221/2962/products/Keeping_Gloves_BG_copy_large.jpg?v=1472141361",
      amount:1055,
      price:3050,
      Category:"Cricket"
    },
    {
      name:"Cricket Pads",
      url:"https://www.threewickets.com/wp-content/uploads/2017/11/RS_Pad_RH_1.jpg",
      amount:1055,
      price:3050,
      Category:"Cricket"
    },
    {
      name:"Cricket Helmet",
      url:"https://www.nicepng.com/png/detail/249-2496693_cricket-helmet-png-image-background.png",
      amount:1055,
      price:3050,
      Category:"Cricket"
    },
    {
      name:"Cricket Bad",
      url:"https://lh3.googleusercontent.com/proxy/3kvyIZ6a9St1m3xHF4FQmt_it1UY_G4FukW8WW1ckmsMCZRFU1QAjs3TF4WgZh-D66xWyJeGDjrxcY3VOO62_uiDaOkeVGo95supaiokTy-szvE_",
      amount:1055,
      price:3050,
      Category:"Cricket"
    },
    {
      name:"Cricket Ball",
      url:"https://static6.depositphotos.com/1157310/657/v/450/depositphotos_6578814-stock-illustration-shiny-red-traditional-cricket-ball.jpg",
      amount:1055,
      price:3050,
      Category:"Cricket"
    },

  {
    name:"Apple",
    url:"https://s1.1zoom.me/big0/408/Apples_Closeup_White_background_Red_Three_3_535366_1280x873.jpg",
    amount:60,
    price:90,
    Category:"Fruits"
  },
  {
    name:"Apple",
    url:"https://s1.1zoom.me/big0/408/Apples_Closeup_White_background_Red_Three_3_535366_1280x873.jpg",
    amount:60,
    price:90,
    Category:"Fruits"
  },
  {
    name:"Apple",
    url:"https://s1.1zoom.me/big0/408/Apples_Closeup_White_background_Red_Three_3_535366_1280x873.jpg",
    amount:60,
    price:90,
    Category:"Fruits"
  },
  {
    name:"Apple",
    url:"https://s1.1zoom.me/big0/408/Apples_Closeup_White_background_Red_Three_3_535366_1280x873.jpg",
    amount:60,
    price:90,
    Category:"Fruits"
  },
  {
    name:"Apple",
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQE5lkCU4RZvcmd0CcrwWQSl6pkd7qpA--7UYVmAXwAppCKDhJE",
    amount:60,
    price:90,
    Category:"Fruits"
  },
  {
    name:"Apple",
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQE5lkCU4RZvcmd0CcrwWQSl6pkd7qpA--7UYVmAXwAppCKDhJE",
    amount:60,
    price:90,
    Category:"Fruits"
  },
  {
    name:"Apple",
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQE5lkCU4RZvcmd0CcrwWQSl6pkd7qpA--7UYVmAXwAppCKDhJE",
    amount:60,
    price:90,
    Category:"Fruits"
  },
  {
    name:"Apple",
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQE5lkCU4RZvcmd0CcrwWQSl6pkd7qpA--7UYVmAXwAppCKDhJE",
    amount:60,
    price:90,
    Category:"Fruits"
  },
  {
    name:"Ladys Finger",
    url:"https://image.freepik.com/free-photo/lady-fingers-okras-gumbos-white-background_62856-2361.jpg",
    amount:60,
    price:90,
    Category:"Vegetables"
  },
  {
    name:"Ladys Finger",
    url:"https://image.freepik.com/free-photo/lady-fingers-okras-gumbos-white-background_62856-2361.jpg",
    amount:60,
    price:90,
    Category:"Vegetables"
  },
  {
    name:"Ladys Finger",
    url:"https://image.freepik.com/free-photo/lady-fingers-okras-gumbos-white-background_62856-2361.jpg",
    amount:60,
    price:90,
    Category:"Vegetables"
  },
  {
    name:"Ladys Finger",
    url:"https://image.freepik.com/free-photo/lady-fingers-okras-gumbos-white-background_62856-2361.jpg",
    amount:60,
    price:90,
    Category:"Vegetables"
  },
  {
    name:"Ladys Finger",
    url:"https://image.freepik.com/free-photo/lady-fingers-okras-gumbos-white-background_62856-2361.jpg",
    amount:60,
    price:90,
    Category:"Vegetables"
  },
  {
    name:"Ladys Finger",
    url:"https://image.freepik.com/free-photo/lady-fingers-okras-gumbos-white-background_62856-2361.jpg",
    amount:60,
    price:90,
    Category:"Vegetables"
  },
  {
    name:"Ladys Finger",
    url:"https://image.freepik.com/free-photo/lady-fingers-okras-gumbos-white-background_62856-2361.jpg",
    amount:60,
    price:90,
    Category:"Vegetables"
  },
  {
    name:"Ladys Finger",
    url:"https://image.freepik.com/free-photo/lady-fingers-okras-gumbos-white-background_62856-2361.jpg",
    amount:60,
    price:90,
    Category:"Vegetables"
  },


  {
    name:"Raw Beef",
    url:"https://image.freepik.com/free-photo/raw-pork-cutlet-white-background-meat-pig_55716-1077.jpg",
    amount:350,
    price:350,
    Category:"Meat"
  },
  {
    name:"Raw Chicken",
    url:"https://lh3.googleusercontent.com/proxy/2upKRP8ZagojEonuqliWrvEGbCFwpFd8TqvPef3JU8wMnr61WWBMt-Y01g-6HiBaa2ldpXSz5PMCJwkvj9Jg5dS6-UXaHtCpaF29dbwVm-qAW74p3Umm_WxLpH5gK-ilUP_JaREEUqmdygnaYFxWzXtTjJFjhjoXC2C_2DTLJiKgN-Yw2H1SYtOqyzF75oDKFUY",
    amount:150,
    price:150,
    Category:"Meat"
  },
  {
    name:"Raw Beef",
    url:"https://image.freepik.com/free-photo/raw-pork-cutlet-white-background-meat-pig_55716-1077.jpg",
    amount:350,
    price:350,
    Category:"Meat"
  },
  {
    name:"Raw Chicken",
    url:"https://lh3.googleusercontent.com/proxy/2upKRP8ZagojEonuqliWrvEGbCFwpFd8TqvPef3JU8wMnr61WWBMt-Y01g-6HiBaa2ldpXSz5PMCJwkvj9Jg5dS6-UXaHtCpaF29dbwVm-qAW74p3Umm_WxLpH5gK-ilUP_JaREEUqmdygnaYFxWzXtTjJFjhjoXC2C_2DTLJiKgN-Yw2H1SYtOqyzF75oDKFUY",
    amount:150,
    price:150,
    Category:"Meat"
  },
  {
    name:"Raw Beef",
    url:"https://image.freepik.com/free-photo/raw-pork-cutlet-white-background-meat-pig_55716-1077.jpg",
    amount:350,
    price:350,
    Category:"Meat"
  },
  {
    name:"Raw Chicken",
    url:"https://lh3.googleusercontent.com/proxy/2upKRP8ZagojEonuqliWrvEGbCFwpFd8TqvPef3JU8wMnr61WWBMt-Y01g-6HiBaa2ldpXSz5PMCJwkvj9Jg5dS6-UXaHtCpaF29dbwVm-qAW74p3Umm_WxLpH5gK-ilUP_JaREEUqmdygnaYFxWzXtTjJFjhjoXC2C_2DTLJiKgN-Yw2H1SYtOqyzF75oDKFUY",
    amount:150,
    price:150,
    Category:"Meat"
  },
  {
    name:"Raw Beef",
    url:"https://image.freepik.com/free-photo/raw-pork-cutlet-white-background-meat-pig_55716-1077.jpg",
    amount:350,
    price:350,
    Category:"Meat"
  },
  {
    name:"Raw Chicken",
    url:"https://lh3.googleusercontent.com/proxy/2upKRP8ZagojEonuqliWrvEGbCFwpFd8TqvPef3JU8wMnr61WWBMt-Y01g-6HiBaa2ldpXSz5PMCJwkvj9Jg5dS6-UXaHtCpaF29dbwVm-qAW74p3Umm_WxLpH5gK-ilUP_JaREEUqmdygnaYFxWzXtTjJFjhjoXC2C_2DTLJiKgN-Yw2H1SYtOqyzF75oDKFUY",
    amount:150,
    price:150,
    Category:"Meat"
  },

  {
    name:"Raw Carp",
    url:"https://i.pinimg.com/originals/59/6d/5d/596d5d9127b7ed800add1dd5cdd02917.jpg",
    amount:200,
    price:200,
    Category:"Fish"
  },
  {
    name:"Rohu",
    url:"https://www.rdmall.in/image/cache/products/Sea%20food/Fish/images%20(28)-910x1155.jpeg",
    amount:200,
    price:200,
    Character:"Fish"
  },
  {
    name:"Boal",
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSnGxdKP1G1FgSJ-I7d5iNnHTgliC7wZ-kXBhPL8uRlSmJI--K",
    amount:200,
    price:200,
    Category:"Fish"
  },
  {
    name:"Boal",
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSnGxdKP1G1FgSJ-I7d5iNnHTgliC7wZ-kXBhPL8uRlSmJI--K",
    amount:200,
    price:200,
    Category:"Fish"
  },
  {
    name:"Hilsa",
    url:"https://thumbs.dreamstime.com/b/tenualosa-ilisha-hilsa-herring-terbuk-fish-white-background-tenualosa-ilisha-hilsa-herring-terbuk-fish-169955285.jpg",
    amount:1200,
    price:2200,
    Category:"Fish"
  },
  {
    name:"Catfish",
    url:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Ameiurus_melas_by_Duane_Raver.png/1200px-Ameiurus_melas_by_Duane_Raver.png",
    amount:1200,
    price:2200,
    Category:"Fish"
  },
  {
    name:"Rui",
    url:"https://thumbs.dreamstime.com/b/labeo-rohita-fish-isolated-white-background-163794275.jpg",
    amount:200,
    price:200,
    Category:"Fish"
  },
  {
    name:"Rita",
    url:"https://image.shutterstock.com/image-photo/rita-fishes-bangladesh-over-white-260nw-201725783.jpg",
    amount:200,
    price:200,
    Category:"Fish"
  },



  {
    name:"Fresh Cut Breads",
    url:"https://thumbs.dreamstime.com/b/fresh-cut-bread-white-background-4798436.jpg",
    amount:50,
    price:30,
    Category:"Breads"
  },
  {
    name:"Fresh Cut Breads",
    url:"https://thumbs.dreamstime.com/b/fresh-cut-bread-white-background-4798436.jpg",
    amount:50,
    price:30,
    Category:"Breads"
  },
  {
    name:"Fresh Cut Breads",
    url:"https://thumbs.dreamstime.com/b/fresh-cut-bread-white-background-4798436.jpg",
    amount:50,
    price:30,
    Category:"Breads"
  },
  {
    name:"Fresh Cut Breads",
    url:"https://thumbs.dreamstime.com/b/fresh-cut-bread-white-background-4798436.jpg",
    amount:50,
    price:30,
    Category:"Breads"
  },
  {
    name:"Fresh Cut Breads",
    url:"https://thumbs.dreamstime.com/b/fresh-cut-bread-white-background-4798436.jpg",
    amount:50,
    price:30,
    Category:"Breads"
  },
  {
    name:"Fresh Cut Breads",
    url:"https://thumbs.dreamstime.com/b/fresh-cut-bread-white-background-4798436.jpg",
    amount:50,
    price:30,
    Category:"Breads"
  },
  {
    name:"Fresh Cut Breads",
    url:"https://thumbs.dreamstime.com/b/fresh-cut-bread-white-background-4798436.jpg",
    amount:50,
    price:30,
    Category:"Breads"
  },
  {
    name:"Fresh Cut Breads",
    url:"https://thumbs.dreamstime.com/b/fresh-cut-bread-white-background-4798436.jpg",
    amount:50,
    price:30,
    Category:"Breads"
  },

  {
    name:"Tim Tam",
    url:"https://thumbs.dreamstime.com/b/packet-tim-tam-chocolate-biscuits-18181547.jpg",
    amount:50,
    price:30,
    Category:"Biscuits"
  },
  {
    name:"Oreo",
    url:"https://www.japonshop.com/med/img/productos/dulces_snacks/galletas/prd-galleta-oreo-menta-japonshop.webp",
    amount:50,
    price:30,
    Category:"Biscuits"
  },
  {
    name:"Black Man",
    url:"https://sc01.alicdn.com/kf/HTB1VPruKXXXXXcpXVXXq6xXFXXXv/BLACKMAN.jpg",
    amount:50,
    price:30,
    Category:"Biscuits"
  },
  {
    name:"Tim Tam",
    url:"https://thumbs.dreamstime.com/b/packet-tim-tam-chocolate-biscuits-18181547.jpg",
    amount:50,
    price:30,
    Category:"Biscuits"
  },
  {
    name:"Horlicks",
    url:"https://mashudgroup.com/wp-content/uploads/2017/10/Horlicks-Biscuits.jpg",
    amount:150,
    price:160,
    Category:"Biscuits"
  },
  {
    name:"Dry Cakes",
    url:"https://mashudgroup.com/wp-content/uploads/2017/10/Dry-Cake-Mini-Pack.jpg",
    amount:150,
    price:160,
    Category:"Biscuits"
  },
  {
    name:"Tip",
    url:"https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/watermarked/2018-10-22_171854.964303Tip_Biscuit.jpg",
    amount:30,
    price:30,
    Category:"Biscuits"
  },
  {
    name:"Sweet Toast",
    url:"https://sindabad.com/media/catalog/product/cache/15869ca78e92508fe510db2b345701fc/p/c/pcfv0200031g300.jpg",
    amount:30,
    price:30,
    Category:"Biscuits"
  },

  {
    name:"Chocolate Cakes",
    url:"https://lh3.googleusercontent.com/proxy/WlStEnwdsrWILUoCkSS0-XCX0LBhbxIK8Zy-VaeQakAX_Vs8GfhZR3JUNWoc1vunsbodLbUXx_KPmeb1UGHwjH_vmmcsrVFLNb5JH6CkxG-ur-iMpn4pEsPevKoufStQUl3HoTVePab0GqYzy1VhMILGyQUO92GvsHne",
    amount:650,
    price:1130,
    Category:"Cakes"
  },
  {
    name:"Venila Cakes",
    url:"https://media.istockphoto.com/photos/birthday-cake-with-flowers-rose-on-white-background-picture-id909432600?k=6&m=909432600&s=170667a&w=0&h=sWKgvfZ12EU-_9rqBndWmp830DYXN6y7EQemKTXQh0g=",
    amount:650,
    price:1130,
    Category:"Cakes"
  },
  {
    name:"Chocolate Cakes",
    url:"https://lh3.googleusercontent.com/proxy/WlStEnwdsrWILUoCkSS0-XCX0LBhbxIK8Zy-VaeQakAX_Vs8GfhZR3JUNWoc1vunsbodLbUXx_KPmeb1UGHwjH_vmmcsrVFLNb5JH6CkxG-ur-iMpn4pEsPevKoufStQUl3HoTVePab0GqYzy1VhMILGyQUO92GvsHne",
    amount:650,
    price:1130,
    Category:"Cakes"
  },
  {
    name:"Venila Cakes",
    url:"https://media.istockphoto.com/photos/birthday-cake-with-flowers-rose-on-white-background-picture-id909432600?k=6&m=909432600&s=170667a&w=0&h=sWKgvfZ12EU-_9rqBndWmp830DYXN6y7EQemKTXQh0g=",
    amount:650,
    price:1130,
    Category:"Cakes"
  },
  {
    name:"Tiffin Cakes",
    url:"https://mashudgroup.com/wp-content/uploads/2017/10/Tiffin-Cake-Mini-Pack.jpg",
    amount:20,
    price:30,
    Category:"Cakes"
  },
  {
    name:"Softy Cakes",
    url:"https://www.globe.com.bd/biscuits/wp-content/uploads/2017/11/Softy-300x300.jpg",
    amount:20,
    price:30,
    Character:"Cakes"
  },
  {
    name:"Bear Cakes",
    url:"https://www.globe.com.bd/biscuits/wp-content/uploads/2017/11/Yummy-Bear-300x300.jpg",
    amount:20,
    price:30,
    Category:"Cakes"
  },
  {
    name:"Choco Bites",
    url:"https://www.globe.com.bd/biscuits/wp-content/uploads/2017/09/choco-bites-300x300.jpg",
    amount:20,
    price:30,
    Category:"Cakes"
  },
  {
    name:"The Creep",
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFblxv2IbhXvkuTQI0MxJNiLNCkRZC4ilX9L1I1qqvqrG-etBa",
    amount:350,
    price:530,
    Category:"Horror"
  },
  {
    name:"Ami Topu",
    url:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1438351473l/3918747._SY475_.jpg",
    amount:350,
    price:530,
    Category:"Horror"
  },
  {
    name:"Roboo Nishi",
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQe08myWxR67qigNMdIIUsivTrpbUMTF0rzQM1CsBiypCIaDa7l",
    amount:350,
    price:530,
    Category:"Horror"
  },
  {
    name:"Onno Jibon",
    url:"https://boiporibd.com/wp-content/uploads/2019/09/%E0%A6%85%E0%A6%A8%E0%A7%8D%E0%A6%AF-%E0%A6%9C%E0%A7%80%E0%A6%AC%E0%A6%A8.jpg",
    amount:350,
    price:530,
    Category:"Horror"
  },
  {
    name:"Adarer Janalata Khula",
    url:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1486146256l/34108844._SY475_.jpg",
    amount:350,
    price:530,
    Category:"Horror"
  },
  {
    name:"Pishac Bari",
    url:"https://bdebooks.com/wp-content/uploads/2019/09/imgrok0711_15190-185x265.gif",
    amount:350,
    price:530,
    Category:"Horror"
  },
  {
    name:"New Moon",
    url:"https://allfreebd.com/wp-content/uploads/2019/04/1469409220.jpg",
    amount:350,
    price:530,
    Category:"Horror"
  },
  {
    name:"Norok",
    url:"https://www.boichoi.com/uploads/product/35366fdb7b10150a61f093eeda75c392.jpg",
    amount:350,
    price:530,
    Category:"Horror"
  },

  {
    name:"Gone With the Wind",
    url:"https://upload.wikimedia.org/wikipedia/en/6/6b/Gone_with_the_Wind_cover.jpg",
    amount:350,
    price:530,
    Category:"History"
  },
  {
    name:"Buman",
    url:"https://static01.nyt.com/images/2019/11/20/books/19bookthant-myint-u1/19bookthant-myint-u1-superJumbo.jpg",
    amount:350,
    price:530,
    Category:"History"
  },
  {
    name:"Norman Stone",
    url:"https://fivebooks.com/app/uploads/2011/10/0500251754.01.LZ_-196x300.jpg",
    amount:350,
    price:530,
    Category:"History"
  },
  {
    name:"Hackney Child",
    url:"https://d28hgpri8am2if.cloudfront.net/tagged_assets/cvr9781471129834/hackney-child-9781471129834_hr.jpg",
    amount:350,
    price:530,
    Category:"History"
  },
  {
    name:"Hackney Child",
    url:"https://d28hgpri8am2if.cloudfront.net/tagged_assets/cvr9781471129834/hackney-child-9781471129834_hr.jpg",
    amount:350,
    price:530,
    Category:"History"
  },
  {
    name:"Norman Stone",
    url:"https://fivebooks.com/app/uploads/2011/10/0500251754.01.LZ_-196x300.jpg",
    amount:350,
    price:530,
    Category:"History"
  },
  {
    name:"Buman",
    url:"https://static01.nyt.com/images/2019/11/20/books/19bookthant-myint-u1/19bookthant-myint-u1-superJumbo.jpg",
    amount:350,
    price:530,
    Category:"History"
  },
  {
    name:"Gone With the Wind",
    url:"https://upload.wikimedia.org/wikipedia/en/6/6b/Gone_with_the_Wind_cover.jpg",
    amount:350,
    price:530,
    Category:"History"
  },

  {
    name:"Extruded Snacks",
    url:"https://3.imimg.com/data3/KW/WB/GLADMIN-85354/extruded-snack-500x500.jpg",
    amount:50,
    price:30,
    Category:"Snacks Foods"
  },
  {
    name:"Lays Chips",
    url:"https://5.imimg.com/data5/LJ/HJ/MY-37165569/lay-e2-80-99s-american-style-cream-and-onion-chips-250x250.png",
    amount:50,
    price:30,
    Category:"Snacks Foods"
  },
  {
    name:"Mr. Twist Chips",
    url:"https://images.othoba.com/images/thumbs/0058691_bombay-sweets-mr-twist-chips-25gm.jpeg",
    amount:50,
    price:30,
    Category:"Snacks Foods"
  },
  {
    name:"Bombay Sweets ChanaChur",
    url:"https://www.allhalalfood.com/image/cache/catalog/product-images/Spices/284_Chanachur_-1000x1000.jpg",
    amount:50,
    price:30,
    Category:"Snacks Foods"
  },
  {
    name:"Ruchi ChanaChur",
    url:"https://lh3.googleusercontent.com/proxy/GL813Se812aLkkZsckchy6kb5-_VE1BZISo7Bdmao_WynRHJ9eUY0PAD69ev1-b-7mnHx7iopyR0efgOvD50PdvbpPcLIOskbGs6PuNxHYRB-0F-J0-ku8AqHebVBBo1wsozeTD0qdBWBVQJZ5-UlXfKtqzSToCDncFVHgUGSgi7y_tjebyjalnj",
    amount:50,
    price:30,
    Category:"Snacks Foods"
  },
  {
    name:"Ruchi ChanaChur",
    url:"https://images.othoba.com/images/thumbs/0053910_ruchi-chanachur-hot-170gm.jpeg",
    amount:50,
    price:30,
    Category:"Snacks Foods"
  },
  {
    name:"Kurkure Chips",
    url:"https://images.othoba.com/images/thumbs/0053910_ruchi-chanachur-hot-170gm.jpeg",
    amount:50,
    price:30,
    Category:"Snacks Foods"
  },
  {
    name:"Lays Chips",
    url:"https://5.imimg.com/data5/LJ/HJ/MY-37165569/lay-e2-80-99s-american-style-cream-and-onion-chips-250x250.png",
    amount:50,
    price:30,
    Category:"Snacks Foods"
  },

  {
    name:"Chinese Noodles",
    url:"https://thumbs.dreamstime.com/b/chinese-noodles-18293605.jpg",
    amount:150,
    price:230,
    Category:"Instant Foods"
  },
  {
    name:"Bhapa Pitha",
    url:"https://2.bp.blogspot.com/-nNcwn0PEk24/UQBw1boBK5I/AAAAAAAACPk/YSASVA-6utU/s1600/final1.JPG",
    amount:15,
    price:20,
    Category:"Instant Foods"
  },
  {
    name:"Beef Tikka",
    url:"https://2.bp.blogspot.com/-nNcwn0PEk24/UQBw1boBK5I/AAAAAAAACPk/YSASVA-6utU/s1600/final1.JPG",
    amount:150,
    price:200,
    Category:"Instant Foods"
  },
  {
    name:"Chinese Noodles",
    url:"https://thumbs.dreamstime.com/b/chinese-noodles-18293605.jpg",
    amount:150,
    price:230,
    Category:"Instant Foods"
  },
  {
    name:"Patishapta Pitha",
    url:"https://i.ytimg.com/vi/Q31YXjgEMHY/maxresdefault.jpg",
    amount:150,
    price:230,
    Category:"Instant Foods"
  },
  {
    name:"Pitha puli",
    url:"https://eisamaylive.com/wp-content/uploads/2018/01/image0011.jpg",
    amount:150,
    price:230,
    Category:"Instant Foods"
  },
  {
    name:"Chinese Noodles",
    url:"https://thumbs.dreamstime.com/b/chinese-noodles-18293605.jpg",
    amount:150,
    price:230,
    Category:"Instant Foods"
  },
  {
    name:"Bhapa Pitha",
    url:"https://2.bp.blogspot.com/-nNcwn0PEk24/UQBw1boBK5I/AAAAAAAACPk/YSASVA-6utU/s1600/final1.JPG",
    amount:15,
    price:20,
    Category:"Instant Foods"
  },

  {
    name:"7Oils",
    url:"https://5.imimg.com/data5/BM/LM/MY-13920102/emami-7-oils-in-one-100ml-bottle-500x500.jpg",
    amount:1050,
    price:100,
    Category:"Household Items"
  },
  {
    name:"Sunsilk Shampoo",
    url:"https://prosadhoni.com/wp-content/uploads/2019/09/SSHG180H-1000.jpg",
    amount:1050,
    price:1130,
    Category:"Household Items"
  },
  {
    name:"Handwash Dettol",
    url:"https://media-services.digital-rb.com/s3/live-productcatalogue/sys-master/images/hfc/h62/8867998236702/DettolOriginalLiquidHandwash.jpg",
    amount:1050,
    price:3330,
    Category:"Household Items"
  },
  {
    name:"Basket",
    url:"https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4370874.jpg",
    amount:1050,
    price:3330,
    Category:"Household Items"
  },
  {
    name:"Handwash Dettol",
    url:"https://media-services.digital-rb.com/s3/live-productcatalogue/sys-master/images/hfc/h62/8867998236702/DettolOriginalLiquidHandwash.jpg",
    amount:1050,
    price:3330,
    Category:"Household Items"
  },
  {
    name:"Basket",
    url:"https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4370874.jpg",
    amount:1050,
    price:3330,
    Category:"Household Items"
  },
  {
    name:"7Oils",
    url:"https://5.imimg.com/data5/BM/LM/MY-13920102/emami-7-oils-in-one-100ml-bottle-500x500.jpg",
    amount:1050,
    price:100,
    Category:"Household Items"
  },
  {
    name:"Sunsilk Shampoo",
    url:"https://prosadhoni.com/wp-content/uploads/2019/09/SSHG180H-1000.jpg",
    amount:1050,
    price:1130,
    Category:"Household Items"
  },
  {
    name:"Shools Bags",
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQaZb15flPryhvbPTDnP_uXwz6S943cfQRq67I1sGR4cCTecX6L",
    amount:450,
    price:1030,
    Category:"Bags"
  },
  {
    name:"Ladys Bags",
    url:"https://image.freepik.com/free-photo/close-up-lady-s-bag-isolated-white-background_93675-56028.jpg",
    amount:450,
    price:1030,
    Category:"Bags"
  },
  {
    name:"Student Bags",
    url:"https://thumbs.dreamstime.com/b/happy-smiling-female-student-bag-books-against-isolated-white-background-portrait-130537800.jpg",
    amount:450,
    price:1030,
    Category:"Bags"
  },
  {
    name:"Ladys Bags",
    url:"https://image.freepik.com/free-photo/close-up-lady-s-bag-isolated-white-background_93675-56028.jpg",
    amount:450,
    price:1030,
    Category:"Bags"
  },
  {
    name:"Shopping Bags",
    url:"https://thumbs.dreamstime.com/b/big-white-paper-bag-isolated-white-27625558.jpg",
    amount:150,
    price:230,
    Category:"Bags"
  },
  {
    name:"Luggage",
    url:"https://images-submarino.b2w.io/produtos/01/00/img/47393/4/47393451_1GG.jpg",
    amount:4150,
    price:5230,
    Category:"Bags"
  },
  {
    name:"Shools Bags",
    url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQaZb15flPryhvbPTDnP_uXwz6S943cfQRq67I1sGR4cCTecX6L",
    amount:450,
    price:1030,
    Category:"Bags"
  },
  {
    name:"Student Bags",
    url:"https://thumbs.dreamstime.com/b/happy-smiling-female-student-bag-books-against-isolated-white-background-portrait-130537800.jpg",
    amount:450,
    price:1030,
    Category:"Bags"
  },
];

app.get('/',function(req,res){
   res.render('data',{
    data:data
   });
})

app.listen(3000);