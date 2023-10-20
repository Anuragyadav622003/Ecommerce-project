require('dotenv').config();
const {
  watch,
  Books,
  Laptops,
  electronics,
  Shoes,
  Cloths,
  homeKitchen,
  mobile,
  cart,
  user

} = require('./mvc/productModel')
const { 
    getProductItems,
    postProductItems,
    cartpostProductItems,
    paramProductItems,
     //user
     postUser,
     postSignInUser,
     getSignInUser,
  } = require('./mvc/productController');
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use(express.static(path.join(__dirname, "./client/build")));
// app.get("*", function(_, res) {
//   const indexPath = path.join(__dirname, "./client/build/index.html");
//   res.sendFile(indexPath, function(err) {
//     if (err) {
//       console.error("Error serving index.html:", err);
//       res.status(500).send("Internal Server Error");
//     }
//   });
// });




app.get("/watch",async (req,res)=>{
 await getProductItems(req,res,watch)
})
.post("/watch",async(req,res)=>
{
  await postProductItems(req,res,watch)
}).get('/watch/product',async(req,res)=>{
  await paramProductItems(req,res,watch)
 })

 app.get("/Books",async (req,res)=>{
  await getProductItems(req,res,Books)
 })
 .post("/Books",async(req,res)=>
 {
   await postProductItems(req,res,Books)
 })
 .get('/Books/product',async(req,res)=>{
   await paramProductItems(req,res,Books)
  })
 
  app.get("/shoes",async (req,res)=>{
    await getProductItems(req,res,Shoes)
   })
   .post("/shoes",async(req,res)=>
   {
     await postProductItems(req,res,Shoes)
   })
   .get('/shoes/product',async(req,res)=>{
     await paramProductItems(req,res,Shoes)
    }) 

    app.get("/laptops",async (req,res)=>{
      await getProductItems(req,res,Laptops)
     })
     .post("/laptops",async(req,res)=>
     {
       await postProductItems(req,res,Laptops)
     })
     .get('/laptops/product',async(req,res)=>{
       await paramProductItems(req,res,Laptops)
      })

      app.get("/electronics",async (req,res)=>{
        await getProductItems(req,res,electronics)
       })
       .post("/electronics",async(req,res)=>
       {
         await postProductItems(req,res,electronics)
       })
       .get('/electronics/product',async(req,res)=>{
        
         await paramProductItems(req,res,electronics)
        })
       
        app.get("/cloths",async (req,res)=>{
          await getProductItems(req,res,Cloths)
         })
         .post("/cloths",async(req,res)=>
         {
           await postProductItems(req,res,Cloths)
         })
         .get('/cloths/product',async(req,res)=>{
           await paramProductItems(req,res,Cloths)
          })

          app.get("/home&kitchen",async (req,res)=>{
            await getProductItems(req,res,homeKitchen)
           })
           .post("/home&kitchen",async(req,res)=>
           {
             await postProductItems(req,res,homeKitchen)
           })
           .get('/home&kitchen/product',async(req,res)=>{
             await paramProductItems(req,res,homeKitchen)
            })

            app.get("/mobile",async (req,res)=>{
              await getProductItems(req,res,mobile)
             })
             .post("/mobile",async(req,res)=>
             {
               await postProductItems(req,res,Books)
             })
             .get('/mobile/product',async(req,res)=>{
               await paramProductItems(req,res,mobile)
              })

              app.get("/Carts",async (req,res)=>{
                const doc = await cart.find({user:req.query.user})
                res.json(doc)
               })
               .post("/Carts",async(req,res)=>
               { 
                 await cartpostProductItems(req,res,cart,user)
               })
               .get('/Carts/product',async(req,res)=>{
                 await paramProductItems(req,res,cart)
                })
                .delete('/Carts',async(req,res)=>{ 

                  await cart.deleteOne({name:req.body.name}) 
                 })
               
             //user

      app.post('/user',async(req,res)=>{ 
        await postUser(req,res,user);
      })
   
      app.post('/user/signIn',async(req,res)=>{
        await postSignInUser(req,res,user);
      })
      .get('/user/signIn',async(req,res)=>{
        await getSignInUser(req,res)
      })


const PORT = process.env.PORT ||8000
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});