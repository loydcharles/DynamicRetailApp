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
      console.log("Client DB connection successful: ");
    }
  }
);

const orderSeed = [
 {
    customer_name: "Travis Barnes",
    date: new Date(Date.now()),
    cart: [{item: "Bacon-Eggs", quantity: 1, price: 5},
            {item: "Coffee", quantity: 1, price: 1},
            {item: "HashBrowns", quantity: 1, price: 1}]
  },
  {
    customer_name: "Stacey Feldstein",
    date: new Date(Date.now()),
    cart: [{item: "Steak", quantity: 2, price: 20},
            {item: "Baked Potato", quantity: 2, price: 2},
            {item: "Coke", quantity: 2, price: 2}]
  },
  {
    customer_name: "James Gildersleeve",
    date: new Date(Date.now()),
    cart: [{item: "Grilled Chicken", quantity: 1, price: 10},
            {item: "Fries", quantity: 1, price: 2},
            {item: "Sprite", quantity: 2, price: 2}]
  }
];

db.Order
  .remove({})
  .then(() => db.Order.collection.insertMany(orderSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  })
