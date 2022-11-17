const mongoose = require('mongoose');
const infoSchema = mongoose.Schema({
  firstname: String,
  Middle : String,
  Last : String,
  Birthday : String,
  email : String,
  cemail : String,
  interests : String,
  amount : Number,
  grow : Number,
  agg : Number,
  age : String,
  website : String,
  mart : String,
  url : String,
  c : String,
  link :String
});

const infomodel = mongoose.model("Info", infoSchema)
module.exports = infomodel;

//Testing purpose - Postman

// { 
//   "firstname" : "Sruthi",
//   "Middle" : "K",
//   "Last" : "Murali",
//   "Birthday" : "27.12.2000",
//   "email" : "muralishrurhi2959@gmail.com",
//   "cemail" : "sru@27gmail.com",
//   "interests" : "Movies",
//   "amount" : 30,
//   "grow" : 40,
//   "agg" : 30,
//  "age" : "10-20",
//   "website" :"https://recruitment.py.gov.in" ,
//   "mart" : "Emarketing",
//   "url" : "http //jiofi.local.html",
//  "c" : "abc",
//   "link" : "https://cowin.gov.in.cowin"
// }