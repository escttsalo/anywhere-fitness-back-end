const router = require('express').Router()
const User = require('./auth-model')
const bcrypt = require('bcryptjs');
const buildToken = require('./token-builder');

const { userCheck, bodyCheck } = require('./auth-middleware')

//Get All Users
router.get('/', async (req, res, next) => { //eslint-disable-line
    const users = await User.getAll()
    res.status(200).json(users)
})

//Get User By Username
router.get('/:username', async (req, res, next) => {
  try {
      const user = await User.getBy(req.params)
      if (user) {
          console.log('users available', user)
          res.status(200).json(user)
      } else {
          res.status(404).json({
              message: 'User not found!'
          })
      }
  } catch (err) {
      next(err)
  }
})

//Post New User
router.post('/register', userCheck, bodyCheck, async (req, res, next) => {
  try {
    let user = req.body
    const rounds = process.env.BCRYPT_ROUNDS || 8
    const hash = bcrypt.hashSync(user.password, rounds);
    user.password = hash;
    const newUser =  await User.addUser(user)
    res.status(201).json(newUser)
  } catch (err) {
    next(err)
  }
});

//Post Login of User
router.post('/login', bodyCheck, async (req, res, next) => {
  try{
    const {username, password} = req.body
    const user = await User.getBy({username})
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = buildToken(user)
      res.status(200).json({
        message:`Welcome, ${user.username}`,
        token,
        user
      })
    } else {
      res.status(401).json({
        message:'invalid credentials'
      })
    }
  } catch (err) {
    next(err)
  }
});

module.exports = router;