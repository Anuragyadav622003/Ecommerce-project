
const bcrypt = require('bcrypt');
async function getProductItems(req,res,item){
        try {
            var docs;
  if(req.query.id)
     docs = await item.find({_id:req.query.id});
  
  else
      docs =  await item.find({});
     res.json(docs);

        } catch (error) {
          res.status(500).json({ error: "Internal Server Error" });
        }
      };
  

async function postProductItems(req,res,item){
  
        try {
            let data;
     data={
        _id:req.body.Id,
        name:req.body.name,
        title:req.body.title,
        img:req.body.img,
        price:req.body.price,
        ratting:req.body.ratting,
        category:req.body.category,
        discount:req.body.discount
    };
     let resp = await item.insertMany(data)
     res.json(req.body);

        } catch (error) {
          res.status(500).json({ error: "Internal Server Error" });
        }
      };


async function paramProductItems(req,res,item){
    
        try {
            if(req.query.max==="over")
            {
                  req.query.max=20000000;
            }
            var data =await item.find({$and:[{price:{$gt:req.query.min}},{price:{$lt:req.query.max}}]})
            if(req.query.r)
            { 
              data = await item.find({ratting:{$gte:req.query.r}})
            }
            else if(req.query.n)
            {
              
                 data = await item.find({brand:{$eq:req.query.n}})
            }
            else if(req.query.c)
            {
                  data = await item.find({category:req.query.c});
            }
            res.json(data)
        } catch (error) {
          res.status(500).json({ error: "Internal Server Error" });
        }
      };
     


      async function cartpostProductItems(req,res,item,user)
      { 
       
        try { 
          const id = await item.countDocuments();
          const userId = await user.find({email:req.query.user});
  
          if(userId)
          {
        data={
           _id:id+1,
           name:req.body.name,
           title:req.body.title,
           img:req.body.img,
           price:req.body.price,
           ratting:req.body.ratting,
           category:req.body.category,
           discount:req.body.discount,
           user:req.query.user
       };
       const it = await item.find({name:req.body.name,user:req.query.user,title:req.body.title,brand:req.body.brand})
       if(!it.length){
        const cartItem = await item.insertMany(data); 
      
          }
        }
   res.json(req.body);

      } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
      }
    };
    
      
//user
var status=null;
async function postUser(req,res,User){ 
    const saltround = 10;
    bcrypt.genSalt(saltround, function(err,salt){
   bcrypt.hash(req.body.password,salt,async function(err,hash){
  
     const data = await User.find({email:req.body.email}).countDocuments();
     if(data==0)
     {      
         
         await User.insertMany({name:req.body.name,email:req.body.email,password:hash})
        res.send({status:'register successfully'})
     }
     else{ const response = (await User.find({email:req.body.email}).select({password:1,_id:1}))
  
          bcrypt.compare(req.body.password,response[0].password,function(err,result){ 
   
              if(!result)
            res.send({status:"Incorrect Password"})
              else
              res.send({status:'Already register'})
          })
     }
   })
    })


  }

  async function postSignInUser(req,res,User)
  {
    const saltround = 10;
    bcrypt.genSalt(saltround, function(err,salt){
   bcrypt.hash(req.body.password,salt,async function(err,hash){
    
     const data = await User.find({email:req.body.email}).countDocuments();
     if(data==0)
     { 
         
        res.send({status:'you are not registered yet, get register user'})
     }
     else{ const response = (await User.find({email:req.body.email}).select({password:1,_id:1}))
  
          bcrypt.compare(req.body.password,response[0].password,function(err,result){ 
   
              if(result)
          { 
            res.send({status:'sign in successfully'}) 
           }
            else
            res.send({status:'incorrect password'})
          })
     }
   })
    })

    
  }
  async function getSignInUser(req,res)
  {
    console.log(status)
    if(status==false)
    status = "incorrect password"
    else if(status==true)
    status= "sign in successfully"
    console.log(status)
     res.json({status:status})

     res.json({status:"hello"})
  }

  

module.exports={ 
    getProductItems,
    postProductItems,
    cartpostProductItems,
    paramProductItems,
 
    //user
    postUser,
    postSignInUser,
    getSignInUser

}