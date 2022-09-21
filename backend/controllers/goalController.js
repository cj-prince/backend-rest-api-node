const asynchandler = require('express-async-handler')


const getGoals = asynchandler(async (req, res) => {
  res.status(200).json({message:'Get goals'})
})

const setGoal = asynchandler(async (req, res) => {
  if(!req.body.text){
    res.status(400)
    throw new Error('Text feild required')
  }
  res.status(200).json({message:'Set goals'})
})

const updateGoal = asynchandler(async (req, res) => {
  res.status(200).json({message:`Update goal ${req.params.id}`})
})

const deleteGoal = asynchandler(async (req, res) => {
  res.status(200).json({message:`Delete goal ${req.params.id}`})
})



module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal
}