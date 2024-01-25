const express=require('express')
const router=express.Router()
const gadgetController=require('../controller/gadgetController')


router.post('/createGadget',gadgetController.createGadget)
router.get('/getGadget',gadgetController.getGadgets)
router.put('/updateGadget/:id',gadgetController.updateGadget)
router.delete('/deleteGadget/:id',gadgetController.deleteGadget)

module.exports=router