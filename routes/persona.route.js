const router = require('express').Router();
const User  = require("..models/User");
const bcrypt = require("bcrypt");

// Register a new User
router.post('/register', async (req, res) => {  
  try {
        //Hash password
    const salt = await bcrypt.genSalt(10);
    const hasPassword = await bcrypt.hash(req.body.password, salt);

    // Create an user object
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hasPassword,
    });
// Save User in the database
    const User = await newUser.save();
    res.status(200).json(user);
    } catch (err) {
    res.status(500).json(err)
    }    
});
