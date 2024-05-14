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
