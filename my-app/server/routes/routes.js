const controller=require("../controller/controller")
const express=require('express')
const validatetoken = require("../middleware/validatetokenhandler")
const router=express.Router()

router.post("/create",controller.create)
router.post("/login",controller.Login)
router.get("/userprofile",validatetoken,controller.userprofile)
router.put('/updateuser',validatetoken,controller.userupdate)
module.exports=router