const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const conn = require('./config/database');
const app = express();
const userRouter = require('./user/user.router');

app.use(express.json());

// pass all api-ep to userRouter
app.use('/api/user', userRouter);

app.listen(process.env.APP_PORT, () => { console.log('Server up and Runing on PORT:' + process.env.APP_PORT); });


/* 
app.post('/api/user', (req, resp) => {
    resp.send('I am herdde ss');
});  */