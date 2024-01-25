const gadgetModel=require('../model/gadgetModel');


const createGadget=async function(req,res){
    try {
        const gadgetData=req.body
        const{name,category,releaseYear,status}=gadgetData
        let newGadget={name,category,releaseYear,status}
        const savedGadget=await gadgetModel.create(newGadget)
        return res.status(201).json(savedGadget)



    } catch (err) {
        return res.status(500).json({err:err.message})
    }
}

const getGadgets=async function(req,res){
    try {
        const gadgets=await gadgetModel.find()
        return res.status(200).send({status:true,message:"fetching all gadget successfully",data:gadgets})


    } catch (err) {
        return res.status(500).json({err:err.message})
    }
}

const updateGadget=async function(req,res){
    try {
        const updatedGadget=await gadgetModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!updatedGadget){
            return res.status(404).send({status:true,message:"Gadget not found"})
        }res.json({updatedGadget})


    } catch (err) {
        return res.status(500).json({err:err.message})
    }
}

const deleteGadget=async function(req,res){
    try {
        
        const deletedGadget=await gadgetModel.findByIdAndDelete(req.params.id)
        if(!deletedGadget){
            return res.status(404).send({status:true,message:"Gadget not found"})
        }
        res.json({message:'Gadget deleted successfully'})
    } catch (err) {
        return res.status(500).json({err:err.message})
    }
}



module.exports={createGadget,getGadgets,updateGadget,deleteGadget};