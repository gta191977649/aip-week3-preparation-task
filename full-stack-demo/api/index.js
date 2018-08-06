import express from 'express'
import data from '../src/data'
const router = express.Router()
router.get('/data',(req,res)=>{
    res.send({data:data.data});
})

export default router