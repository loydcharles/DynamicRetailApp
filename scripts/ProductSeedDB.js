const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/retailApp",
  {
    useMongoClient: true
  },
  function (err, res) {
    if(err) {
      console.log("From Client Error" + err);
    }
    else {
      console.log("Client DB connection successful: " + res.stringify);      
    }
  }
);

const productSeed = [
  {
    category: "Breakfast",
    item: "Egg and bacon",
    desc: "how to become obese",
    price: "5.00",
    date: new Date(Date.now())
  },
  {
    category: "Lunch",
    item: "pizza",
    desc: "what ever",
    price: "10.00",
    date: new Date(Date.now())
  },
  {
    category: "Dinner",
    item: "Salad & Tacos",
    desc: "Tarvis's lunch for dinner",
    price: "15.00",
    date: new Date(Date.now())
  }
];

db.Product
  .remove({})
  .then(() => db.Product.collection.insertMany(productSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  })
