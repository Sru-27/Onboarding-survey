const express = require('express');
const infomodel = require('../model/info');
const Surveyrouter = express.Router();

// Create data
Surveyrouter.post('/add', function(req,res,next) {

  let SurveyObj = new infomodel({
    firstname : req.body.firstname,
    Middle : req.body.Middle,
    Last : req.body.Last,
    Birthday : req.body.Birthday, 
    email : req.body.email,
    cemail : req.body.cemail, 
    interests : req.body.interests,
    amount : req.body.amount,
    grow : req.body.grow,
    agg : req.body.agg,
    age : req.body.age,
    website : req.body.website,
    mart : req.body.mart,
    url : req.body.url,
    c : req.body.c,
    link : req.body.link
  })

  SurveyObj.save(function(err,SurveyObj) {
     if(err) {
      res.send({ status:500,message:'Unable to add '}); 
     }
     else {
      res.send({ status:200,message:'Added Data', SurveyObj});
     }
  })
});

// Fetching all data
// Surveyrouter.get('/details', function(req, res,next) {
//   infomodel.find(function(err,Infodetails){
//     if(err) {
//       res.send({ status:500,message:'Unable to find infos'}); 
//      }
//      else {
//       const recordCount = Infodetails.length;
//       res.send({ status:200,recordCount:recordCount ,details:Infodetails});
//      }
//   })
// });

// //Fetching specific data
// Inforouter.get('/single', function(req, res,next) {
//   const userId = req.query.userId;
//   Infomodel.findById(userId,function(err,Infodetail){
//     if(err) {
//       res.send({ status:500,message:'Unable to find info'}); 
//      }
//      else {
//       res.send({ status:200,details:Infodetail});
//      }
//   })
// });

// //Update existing data
// Inforouter.put('/update', function(req, res,next) {
//   const userId = req.body.userId;

//   let newInfo = {
//     firstname : req.body.firstname,
//     Middle : req.body.Middle,
//     Last : req.body.Last,
//     Birthday : req.body.Birthday,
//     email : req.body.email,
//     cemail : req.body.cemail,
//     interests : req.body.interests 
//   };

//   Infomodel.findByIdAndUpdate(userId,newInfo,function(err,Infoupdate){
//     if(err) {
//       res.send({ status:500,message:'Unable to Update info'}); 
//      }
//      else {
//       res.send({ status:200,details:newInfo});
//      }
//   })
// });

 //Delete first document
// Inforouter.route('/delete/:id').delete((req, res, next) => {
//   Infomodel.findOneAndRemove(req.params.id , (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.status(200).json({
//         msg: 'Deleted Successfully' , data 
//       })
//     }
//   })
// })

//Delete last document
// Surveyrouter.route('/delete/:id').delete((req, res, next) => {

//   infomodel.findOneAndRemove(req.params.id).sort({$natural:-1})
//     .then((data) => {
//       if (!data) {
//         res.status(404).send({
//           message: `Cannot delete id ${id}`,
//         });
//       } else {
//         res.send({
//           message: 'user was deleted successfully',
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: 'Could not delete the id ' + id,
//       });
//     });
//   })

// //Delete multiple
// Inforouter.delete('/delete-multiple', function(req, res,next) {
//   const userId = req.query.userId;
//   Infomodel.deleteMany({'firstname' : 'Sruthi'},function(err,Infodetail){
//     if(err) {
//       res.send({ status:500,message:'Unable to Delete info'}); 
//      }
//      else {
//       res.send({ status:200,message:'Deleted Successfully',details:Infodetail});
//      }
//   })
// });


module.exports = Surveyrouter