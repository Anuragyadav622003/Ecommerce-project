const mongoose = require('mongoose');
const db_url = process.env.db_url;
mongoose.connect(`${db_url}e-commerce`,{ useNewUrlParser: true, useUnifiedTopology: true }).then(function(db){
     console.log("database is connected");
})
const  productSchema =  new mongoose.Schema({
    name:String,
     img:String,
     _id:Number,
     title:String,
    price:Number,
    ratting:Number,
    category:String,
    discount:Number,
    brand:String
});


const userSignupSchema = new mongoose.Schema({
    name:String,
    email:{ type: String, unique: true },
    password:String,
    
});

const CartSchema = new mongoose.Schema([{ 
    name:String,
    img:String,
    _id:Number,
    title:String,
   price:Number,
   ratting:Number,
   category:String,
   discount:Number,
   brand:String, 
   user:String


}]);
const cart = mongoose.model('cart',CartSchema);


const watch = mongoose.model("watches",productSchema);
const Books = mongoose.model("books",productSchema);
const Laptops =  mongoose.model('laptops',productSchema);
const electronics = mongoose.model("electronics",productSchema);
const Shoes = mongoose.model('Shoes',productSchema);
const Cloths = mongoose.model("cloths",productSchema);
const homeKitchen = mongoose.model('home&kitchen',productSchema);
const mobile= mongoose.model('mobiles',productSchema);
const user = mongoose.model('user',userSignupSchema);
module.exports= {
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
  
  } 