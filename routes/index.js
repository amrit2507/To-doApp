const express=require('express');

const router=express.Router();

const homeController=require('../controllers/home_controller');

router.get('/',homeController.home);

//for any further router access from here
//router.use('/routerName',require('./routerFile'));
router.post('/list',homeController.action);

router.post('/delete',homeController.delete);
console.log('router loaded');
module.exports=router;