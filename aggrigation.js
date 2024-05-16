db.match.insertMany([
  {
    _id: ObjectId("512bc95fe835e68f199c8686"),
    author: "dave",
    score: 80,
    views: 100,
  },
  {
    _id: ObjectId("512bc962e835e68f199c8687"),
    author: "dave",
    score: 85,
    views: 521,
  },
  {
    _id: ObjectId("55f5a192d4bede9ac365b257"),
    author: "ahn",
    score: 60,
    views: 1000,
  },
  {
    _id: ObjectId("55f5a192d4bede9ac365b258"),
    author: "li",
    score: 55,
    views: 5000,
  },
  {
    _id: ObjectId("55f5a1d3d4bede9ac365b259"),
    author: "annT",
    score: 60,
    views: 50,
  },
  {
    _id: ObjectId("55f5a1d3d4bede9ac365b25a"),
    author: "li",
    score: 94,
    views: 999,
  },
  {
    _id: ObjectId("55f5a1d3d4bede9ac365b25b"),
    author: "ty",
    score: 95,
    views: 1000,
  },
]);

db.match.aggregate([
  {
    $match: {
      $or: [{ score: { $gt: 85, $lt: 999 } }, { views: { $gt: 600 } }],
    },
  },
]);
db.group.insertMany([
  {
    _id: 1,
    item: "t-shirt",
    quantity: 10,
    price: 15,
    date: ISODate("2024-05-01T08:00:00Z"),
    store: "A",
  },

  {
    _id: 2,
    item: "jeans",
    quantity: 5,
    price: 30,
    date: ISODate("2024-05-01T09:00:00Z"),
    store: "B",
  },
  {
    _id: 3,
    item: "dress",
    quantity: 8,
    price: 50,
    date: ISODate("2024-05-02T10:00:00Z"),
    store: "A",
  },
  {
    _id: 4,
    item: "t-shirt",
    quantity: 12,
    price: 15,
    date: ISODate("2024-05-03T11:00:00Z"),
    store: "B",
  },
  {
    _id: 5,
    item: "jeans",
    quantity: 7,
    price: 30,
    date: ISODate("2024-05-04T12:00:00Z"),
    store: "A",
  },
]);

//query
//1.
db.group.aggregate([
  {
    $group: {
      _id: "item",
      totalPrice: { $sum: { $multiply: ["$price", "$qunatity"] } },
    },
  },
]);
//2.
db.group.aggregate([
  { $group: { _id: "$item", product_count: { $sum: 1 } } },
  { $match: { product_count: { $gt: 0 } } },
  { $sort: { product_count: -1 } },
]);

//3.
db.group.aggregate([{ $group: { _id: "$item", product_count: { $sum: 1 } } }]);

//4.
db.group.aggregate([
  {
    $group: {
      _id: "$price",
      maximumprice: { $max: "$quantity" },
      allitem: { $push: "$item" },
    },
  },
]);

//5.
db.group.aggregate([
  {
    $group: {
      _id: "$price",
      maximumprice: { $max: "$quantity" },
      allitem: { $push: "$item" },
    },
  },
  { $count: "allitem" },
]);
//6.
db.dry.insertMany([{name:'utsav',age:10},{name:'c',age:10},{name:'d',age:20},{name:'b',age:20},{name:'a',age:18}])

//7.
db.dry.aggregate([{$group:{_id:"$age",nameofuser:{$push:"$name"}}}])
   //data set
   db.lookup.insertMany( [
    {
      gender: "male",
      age: 30,
      name: "Ravi Kumar",
      address: "123 Main St, Anytown, USA",
      mobile: "9876543210"
    },
    {
      gender: "female",
      age: 25,
      name: "Priya Patel",
      address: "456 Elm St, Othertown, USA",
      mobile: "9876543211"
    },
    {
      gender: "male",
      age: 35,
      name: "Arun Sharma",
      address: "789 Oak St, Anothertown, USA",
      mobile: "9876543212"
    },
    {
      gender: "female",
      age: 28,
      name: "Ananya Singh",
      address: "456 Pine St, Citytown, USA",
      mobile: "9876543213"
    },
    {
      gender: "male",
      age: 32,
      name: "Vikram Yadav",
      address: "789 Cedar St, Villagetown, USA",
      mobile: "9876543214"
    },
    {
      gender: "female",
      age: 22,
      name: "Neha Gupta",
      address: "123 Maple St, Smalltown, USA",
      mobile: "9876543215"
    },
    {
      gender: "male",
      age: 40,
      name: "Sandeep Reddy",
      address: "456 Birch St, Largetown, USA",
      mobile: "9876543216"
    },
    {
      gender: "female",
      age: 27,
      name: "Shreya Mishra",
      address: "789 Walnut St, Beachtown, USA",
      mobile: "9876543217"
    },
    {
      gender: "male",
      age: 33,
      name: "Amit Das",
      address: "123 Ash St, Mountaintown, USA",
      mobile: "9876543218"
    },
    {
      gender: "female",
      age: 29,
      name: "Kavita Choudhary",
      address: "456 Hickory St, Hilltown, USA",
      mobile: "9876543219"
    }
   
  
   
  ])
db.lookup.aggregate([{$match:{gender:"male"}},{$bucket:{groupBy:"$age",boundaries:[29,33,40],default:"grater than 30",output:{count:{$sum:1},names:{$push:"$name"}}}}])
