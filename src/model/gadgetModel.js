const mongoose=require('mongoose')

const gadgetSchema=new mongoose.Schema({
name:{
    type :String,
    required:true
},
category:{
    type :String,
    required:true
},
releaseYear:{
    type :String,
    required:true
},
status:{
    type:String,
    required:true
}
})

module.exports=mongoose.model('gadgets',gadgetSchema)





