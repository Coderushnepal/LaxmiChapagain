import Router from 'express'; // We are using Router from express because router.js has no "server" property

import * as carController from './controllers/car.js';

const router = Router(); // Router is also a part of express which handles routes

router.get('/', (req, res, next) => {
    res.send('This is the response from the index(/) route');
});

router.get('/cars', carController.getCars);

router.get('/cars/:carIdentifier', carController.getCar);

router.post('/cars', carController.saveCar);

router.put('/cars/:carIdentifier', carController.updateCar);

router.delete('/cars/:carIdentifier', carController.removeCar);

export default router; //Kei kura dina parda use garne, and here route.js bata index .js lai deko xa