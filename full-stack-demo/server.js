import config from './config'
import apiRouter from './api'
import express from 'express'
const server = express()

server.get('/',(req,res) => {
    res.send("Hello world index")
});
server.get('/500',(req,res) => {
    res.send("Hello world 500~")
});
server.use('/api',apiRouter);
server.use(express.static('public'));
server.listen(config.port,()=> {
    console.info('Server is run at port ->',config.port)
});