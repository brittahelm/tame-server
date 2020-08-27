const express = require('express');
const router  = express.Router();

const MigraineModel = require('../models/Migraine.model');
const UserModel = require('../models/User.model');
const RemedyModel = require('../models/Remedy.model');


router.get('/migraines', (req, res) => {
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

router.post('/migraines/create', (req, res) => {
  const {start, end, painlevel, symptoms, triggers, remedies} = req.body;

  MigraineModel.create({start, end, painlevel, symptoms, triggers, remedies})
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



module.exports = router;