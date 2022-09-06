const Router= require('express');
const router= Router();


const {getAllTravels,
    getTravelById, 
    addTravel,
    updateTravel,
    removeTravel,
    getTravelBookByType,
    getTravelBookByCost}= require('../controllers/travelController')
    
    
    router.get('/',getAllTravels);
    //Get one travel book
    
    router.get('/:id',getTravelById);
    
    router.post('/add',addTravel);
    
    router.put('/:id',updateTravel);
    
    router.delete('/:id',removeTravel);
    
    router.get('/travels/:type',getTravelBookByType);
    
    module.exports = router;
    
    