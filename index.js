const express = require('express');
const cors = require('cors');
const {connection} = require('./connection');
const {questionRouter} = require('./routes/question.route');
const {userRouter} = require('./routes/user.route');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/users', userRouter);
app.use('/questions', questionRouter);


app.listen(process.env.PORT, async () => {
    try{
        await connection;
        console.log(`Server is running on Port ${process.env.PORT}`);

    } catch (error){
        console.log(error.message);
    }
})