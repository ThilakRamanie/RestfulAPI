const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=> {
    res.status(200).json({message:'Get works yay!!'})
})

router.get('/:productId',(req,res,next)=> {
    res.status(200).json({message:`${req.params.productId} is the product id`})
})

router.patch('/:productId',(req,res,next)=> {
    res.status(200).json({message:`${req.params.productId} is the updated product id`})
})

router.delete('/:productId',(req,res,next)=> {
    res.status(200).json({message:`${req.params.productId} is the deleted product id`})
})

router.post('/',(req,res,next)=> {
    res.status(200).json({message:'Post works yay!!'})
})

module.exports = router;