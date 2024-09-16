const express = require('express');
const usercontroller = require('../controllers/usercontroller');
const router = express.Router();
router.get('/user',(req,res)=>{
    usercontroller.getUser(req,res);
})
router.get('/user/:id',(req,res)=>{
    usercontroller.getParticularUser(req,res);
})
module.exports = router;