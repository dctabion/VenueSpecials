//database stuff here
var mongoose = require('mongoose');

console.log('process.env.DATABASE_URL:', process.env.DATABASE_URL);
console.log('process.env.MONGOLAB_URI:', process.env.MONGOLAB_URI);

var connectionString = process.env.DATABASE_URL || process.env.MONGOLAB_URI;

mongoose.connect(connectionString);

mongoose.connection.on('connected', function() {
  console.log("Connected to Database >> specialist");
});

mongoose.connection.on('disconnected', function() {
  console.log("Disconneced From Database >> specialist")
});

mongoose.connection.on('error', function() {
  console.log('There was an error in the database!');
});
