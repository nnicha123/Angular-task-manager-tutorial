// Handle connection logic to MongoDB database
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/TaskManager', { useNewUrlParser: true }).then(() => {
  console.log('Connected to MongoDB successfully')
}).catch(e => console.log('Error white attempting to connect to MongoDB'))

mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false)

module.exports = {
  mongoose
}