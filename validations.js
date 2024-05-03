db.createCollection("validator", {
  validator: {
    $jsonSchema: {
      required: ["name", "age", "add"],
      properties: {
        name: {
          bsonType: "string",
          description: " name must be string type",
        },
        age: {
          bsonType: "number",
          description: "must be a number",
        },
        add: {
          bsonType: "string",
          description: "must be string",
        },
      },
    },
  },
  validationAction: "error",
});
