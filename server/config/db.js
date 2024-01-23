const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const connectDB = async() => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Connection à la base de donnée: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
}
module.exports = connectDB;


// const mongoose = require('mongoose');

// mongoose.Promise = global.Promise;

// // Connect MongoDB at default port 27017.
// mongoose.connect('mongodb://localhost:27017/DB Name', {
//     useNewUrlParser: true,
//     useCreateIndex: true,
// }, (err) => {
//     if (!err) {
//         console.log('MongoDB Connection Succeeded.')
//     } else {
//         console.log('Error in DB connection: ' + err)
//     }
// });
