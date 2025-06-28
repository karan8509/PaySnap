import express from "express"
import Razorpay from "razorpay";

const router = express.Router();


const rezorpayInstance = new Razorpay({
  key_id: "",
  key_secret: "",
});



router.post("/order"  , (req , res) => {
    const {amount} = req.body
    try {
        const options = {
            amount : Number(amount * 100),
            currency : "INR",
            receipt :crypto.randomBytes(10).toString("hex")
        }

   rezorpayInstance.orders.create(options , (err , order) => {
    if(err){
        console.log(err)
        return res.status(500).json({message : "Something  Went Wrong!"})
    }
    console.log(order)
    res.json({
        data : order
    })
   })

    } catch (error) {
        
    }
})


export default router;
