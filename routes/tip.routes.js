const express = require('express');
const router  = express.Router();
const { isLoggedIn } = require('../helpers/auth-helper');

const TipModel = require('../models/Remedy.model');


router.get('/tips', isLoggedIn, (req, res) => {
  TipModel.find()
    .then((tips) => {
      res.status(200).json(tips)
    })
    .catch((err) => {
      res.status(500).json({
        error: 'Something went wrong',
        message: err
      })
    })
})

router.get('/tips/:id', isLoggedIn, (req, res) => {
  TipModel.findById(req.params.id)
   .then((response) => {
        res.status(200).json(response)
   })
   .catch((err) => {
        res.status(500).json({
             error: 'Something went wrong',
             message: err
        })
   }) 
})

router.post('/tips/create', isLoggedIn, (req, res) => {

  const {name, description} = req.body;

  if (!name || !description) {
    res.status(500)
      .json({
        errorMessage: 'Please enter name and description'
      });
    return;  
  }

  let userID = req.session.loggedInUser._id
  console.log(name)
  TipModel.create({name, description, rating: 0, userID})
    .then((response) => {
      res.status(200).json(response)
    })
    .catch((err) => {
      res.status(500).json({
        error: 'Something went wrong',
        message: err
      })
    })
})

router.delete('/tip/:id', isLoggedIn, (req, res) => {
  TipModel.findByIdAndDelete(req.params.id)
        .then((response) => {
             res.status(200).json(response)
        })
        .catch((err) => {
             res.status(500).json({
                  error: 'Something went wrong',
                  message: err
             })
        })  
})

router.patch('/tips/:id', isLoggedIn, (req, res) => {
  let id = req.params.id
  let userID = req.session.loggedInUser._id
  let newRating

  TipModel.findById(id)
    .then((tip) => {
      if (tip.likers.includes(userID)) {
        newRating = tip.rating -1
        TipModel.findByIdAndUpdate(id, {$set: {rating: newRating}, $pull: {likers: userID}})
        .then((response) => {
             res.status(200).json(response)
        })
        .catch((err) => {
             console.log(err)
             res.status(500).json({
                  error: 'Something went wrong',
                  message: err
             })
        }) 
      }
      else {
        newRating = tip.rating +1
        TipModel.findByIdAndUpdate(id, {$set: {rating: newRating}, $push: {likers: userID}})
        .then((response) => {
             res.status(200).json(response)
        })
        .catch((err) => {
             console.log(err)
             res.status(500).json({
                  error: 'Something went wrong',
                  message: err
             })
        }) 
      }
    })

  
})



module.exports = router;