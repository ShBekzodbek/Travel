
const Travel =require('../models/travel.model')

const getAllTravels= async (req, res,)=>{
    try {
        const travels = await Travel.find();
        
        return res.status(200).send({
            message:'Success',
            travels
        });
    } catch (error) {
        return  res.send(error.message);
    }
    
    
    
}


const getTravelById= async (req, res,)=>{
    try {
        const travels = await Travel.findById(req.params.id);
        
        
        if(!travels){
            return res.status(404).send({
                message: 'travel not found',
                
            })    }
            
            return res.status(200).send({
                message:'success',
                travels
            })
            
            
            
        } catch (error) {
            console.log(error.message);
        }
        
        
    }
    
    const addTravel= async (req, res,)=>{
        try {
            
            const {title, image, descr,type} = req.body;
            
            const newTravel = await Travel.create({title, descr,image,type});
            
            res.status(200).send({
                message:'success',
                newTravel
            })
            
        } catch (error) {
            console.log(error.message);
        }
        
        
    }
    
    const updateTravel = async (req, res,)=>{
        try {
            
            const {title, image, descr,type} = req.body;
            
            const updatedTravel = await Travel.findByIdAndUpdate(req.params.id,{title, descr,image,type});
            
            res.status(200).send({
                message:'Updated travel',
                updateTravel
            })
            
        } catch (error) {
            console.log(error.message);
        }
        
        
    }
    
    const removeTravel = async (req, res,)=>{
        try {
            
            
            
            await Travel.findByIdAndRemove(req.params.id);
            
            res.status(200).send({
                message:'deleted ',
            })
            
        } catch (error) {
            console.log(error.message);
        }
        
        
    }
    
    const getTravelBookByType = async (req, res)=>{ 
        const typeOfBook = req.params.type;
        const book = await Travel.find({type:typeOfBook});
        if(!book){
            return res.status(404).send({message:'not found'});
        }
        return res.status(200).send({message:'successfully found', book});
        
    }
    
    const getTravelBookByCost = async (req, res)=>{ 
        const costOfBook = req.params.cost;
        const book = await Travel.find({cost:costOfBook});
        if(!book){
            return res.status(404).send({message:'not found'});
        }
        return res.status(200).send({message:'successfully found', book});
        
    }
    
    module.exports ={
        getAllTravels,
        getTravelById, 
        addTravel,updateTravel,
        removeTravel,
        getTravelBookByType,
        getTravelBookByCost
    };