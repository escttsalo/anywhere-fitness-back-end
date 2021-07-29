const router = require('express').Router()
const User = require('./auth-model')
const bcrypt = require('bcryptjs');
const buildToken = require('./token-builder');

const { userCheck, bodyCheck } = require('./auth-middleware')

router.get('/', async (req, res, next) => {
    const users = await User.getAll()
    res.status(200).json(users)
})

router.post('/register', userCheck, bodyCheck, async (req, res, next) => {
  console.log('check')
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

router.post('/login', bodyCheck, async (req, res, next) => {
  console.log('check login')
  try{
    const {username, password} = req.body
    const user = await User.getBy({username})
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = buildToken(user)
      res.status(200).json({
        message:`Welcome, ${user.username}`,
        token
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