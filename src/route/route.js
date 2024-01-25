const express=require('express')
const router=express.Router()
const gadgetController=require('../controller/gadgetController')


router.post('/createGadget',gadgetController.createGadget)
router.get('/getGadget',gadgetController.getGadgets)
router.put('/updateGadget',gadgetController.updateGadget)
router.delete('/deleteGadget',gadgetController.deleteGadget)

module.exports=router