const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=> {
    res.status(200).json({message:'Orders Fetched!!'})
})

router.get('/:orderID',(req,res,next)=> {
    res.status(200).json({message:`${req.params.orderID} is the order id`})
})

router.delete('/:orderID',(req,res,next)=> {
    res.status(200).json({message:`${req.params.orderID} is the deleted product id`})
})

router.post('/',(req,res,next)=> {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    }
    res.status(201).json({message:'Order was created', order: order})
})

module.exports = router;