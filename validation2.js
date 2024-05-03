db .createCollection("information",{
    validator:{
           $jsonSchema:{
            required:['name','add','mobile'],
            properties:{
                name:{
                    bsonType:"string",
                    description:"name must be string"
                },
                mobile:{
                    bsonType:"number",
                    description:"mobile must be number",
                },
                add:{
                    bsonType:'array',
                    description:"must be array or required *",
                    items:{
                        bsonType:"object",
                        required:['ca','pa'],
                        properties:{
                            ca:{
                                bsonType:"string"
                            },
                            pa:{
                                bsonType:"string"
                            }
                        }
                    }
                }
            }
           }
    },
    validationAction:"error"
})