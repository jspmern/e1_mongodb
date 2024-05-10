// Write a MongoDB query to find the average score for each cuisine.

//Write a MongoDB query to find the highest score for each cuisine.

// Write a MongoDB query to find the lowest score for each cuisine.

//Write a MongoDB query to find the average score for each borough.

//Write a MongoDB query to find the highest score for each borough

// Write a MongoDB query to find the lowest score for each borough..


// {
//     "address": {
//        "building": "1007",
//        "coord": [ -73.856077, 40.848447 ],
//        "street": "Morris Park Ave",
//        "zipcode": "10462"
//     },
//     "borough": "Bronx",
//     "cuisine": "Bakery",
//     "grades": [
//        { "date": { "$date": 1393804800000 }, "grade": "A", "score": 2 },
//        { "date": { "$date": 1378857600000 }, "grade": "A", "score": 6 },
//        { "date": { "$date": 1358985600000 }, "grade": "A", "score": 10 },
//        { "date": { "$date": 1322006400000 }, "grade": "A", "score": 9 },
//        { "date": { "$date": 1299715200000 }, "grade": "B", "score": 14 }
//     ],
//     "name": "Morris Park Bake Shop",
//     "restaurant_id": "30075445"
//   }


db.text.insertMany([{
    name:"utsav",
    passion:'youtube'
},
{
    name:"utsav",
    passion:'youtuber'
},
{
    name:"arvind",
    passion:"singer"
}
])