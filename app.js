const express = require('express')


//Routes
const { usersRouter } = require('./routes/userRoute');
const { taskRouter } = require('./routes/taskRoute');

//utils
const { db } = require('./utils/dataBaseUtil')

//init express app  
const app = express();
app.use(express.json());

//EndPoints 
app.use('/api/v1/users', usersRouter)
app.use('/api/v1/users', taskRouter)



db.authenticate()
    .then(() => console.log('Todo okey '))
    .catch(err => console.log(err))


db.sync({ force: true })
    .then(() => console.log('Base de datos creada'))
    .catch(err => console.log(err))


const PORT = 3005
app.listen(PORT)
console.log(`server running on port ${PORT}  `)