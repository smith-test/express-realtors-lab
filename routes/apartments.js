///****ROUTES Folder***** */
const express = require('express');//leveraging express code
const router = express.Router();  //Router object - Router is a built in function and is using the "new" 
// keyword so we don't have to say new router
const apartmentCtrl = require('../controllers/apartments');
//const housesCtrl = require('../controllers/houses');


//Routes to apartment requests
router.get('/', apartmentCtrl.index);


router.get('/:id', apartmentCtrl.show);



module.exports = router;  
