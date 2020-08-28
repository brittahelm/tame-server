const express = require('express');
const router  = express.Router();
const { isLoggedIn } = require('../helpers/auth-helper');

const MigraineModel = require('../models/Migraine.model');
const UserModel = require('../models/User.model');
const RemedyModel = require('../models/Remedy.model');


router.get('/migraines', isLoggedIn, (req, res) => {
  MigraineModel.find()
    .then((migraines) => {
      res.status(200).json(migraines)
    })
    .catch((err) => {
      res.status(500).json({
        error: 'Something went wrong',
        message: err
      })
    })
})

router.get('/migraines/:id', isLoggedIn, (req, res) => {
  MigraineModel.findById(req.params.id)
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

router.post('/migraines/create', isLoggedIn, (req, res) => {
  const {start, end, painlevel, symptoms, triggers, remedies} = req.body;

  let userID = req.session.loggedInUser._id

  MigraineModel.create({start, end, painlevel, symptoms, triggers, remedies, userID})
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

router.delete('/migraines/:id', isLoggedIn, (req, res) => {
  MigraineModel.findByIdAndDelete(req.params.id)
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

router.patch('/migraines/:id', isLoggedIn, (req, res) => {
  let id = req.params.id
  const {start, end} = req.body;
  MigraineModel.findByIdAndUpdate(id, {$set: {start: start, end: end}})
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
})



module.exports = router;