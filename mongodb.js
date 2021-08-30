// REFERENCE PAGE

// CRUD operaions

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

// const { MongoClient, ObjectId } = require('mongodb')

// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'task-manager'

// const id = new ObjectId()
// console.log(id.id.length)
// console.log(id.toHexString().length)

// MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
//     if (error) {
//         return console.log('Unable to connect to database!')
//     }

//     const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Lee',
    //     age: 30
    // }, (error, result) =>  {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     } else {
    //         console.log(result)
    //     }
    // })

    // db.collection('users').insertMany([
    // {
    //     name: 'Mac',
    //     age: 24
    // }, {
    //     name: 'Gil',
    //     age:24
    // }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert users')
    //     } else {
    //         console.log(result)
    //     }
    // })

//     db.collection('tasks').insertMany([
//         {
//             description: 'Do the dishes',
//             completed: true
//         }, {
//             description: "Do the laundry",
//             completed: false
//         }, {
//             description: 'Take out the trash',
//             completed: true
//         }
//     ], (error, result) => {
//         if (error) {
//             return console.log('Unable to add tasks')
//         } else {
//             console.log(result)
//         }
//     })


//     db.collection('users').findOne({ _id: new ObjectId("6107e30902535510d1b8070a") }, (error, user) => {
//         if (error) {
//             return console.log('Unable to find user')
//         } else {
//             console.log(user)
//         }
//     })

    // db.collection('users').find({ age: 24 }).toArray((error,users) => {
    //     console.log(users)
    // })
    // db.collection('users').find({ age: 24}).count((error, count) => {
    //     console.log(count)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectId("6107e4ef9953f7348f00244f") }, (error, task) => {
    //     if (error) {
    //         console.log('Unable to find task')
    //     } else {
    //         console.log(task)
    //     }
    // })

    // db.collection('tasks').find({ completed: true }).toArray((error, tasks) => {
    //     console.log(tasks)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectId('6108067e56ae0b7e802eb65b') 
    // }, {
    //     // $set: {
    //         // name: 'Rob'
    //     // }
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((err) => {
    //     console.log(err)
    // });


        // db.collection('tasks').updateMany({ completed: false }, {
        //     $set: {
        //         completed: true
        //     }
        // }).then((result) => {
        //     console.log(result)
        // }).catch((err) => {
        //     console.log(err)
        // });
        

        // db.collection('users').deleteMany({ age: 24 })
        // .then((result) => {
        //     console.log(result)
        // }).catch((err) => {
        //     console.log(err)
        // });

        // db.collection('tasks').deleteOne({ 
        //     description: 'Do the dishes' 
        // }).then((result) => {
        //     console.log(result)
        // }).catch((err) => {
        //     console.log(error)
        // });

// })


