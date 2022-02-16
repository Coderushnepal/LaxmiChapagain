// kata kata bata data aako xa herne, services call garne. request bata kk data aako xa vanera herne, response ko format banauxa
// error aako xa ki xaina herne ani error xa vane error message dekhaune

import * as carService from '../services/car.js'; //  dherai kura export garna xa vane named export mah we use this convention , car.js ko sabai function call gardinxa

export function getCars(req, res, next) {
    try {
        const data = carService.getAllCars();

        res.json(data);
    } catch (err) {
        res.status(400).json({
            message: err.message,
        });
    }
}

export function getCar(req, res, next) {
    const id = req.params.carIdentifier; // request bata k id aako xa tanyo

    try {
        const data = carService.getCar(id); // carService is called

        res.json(data); // data aako xa vane response pathaune 
    } catch (err) {
        res.status(400).json({
            message: err.message,
        });
    }
}

export function saveCar(req, res, next) {
    try {
        const data = carService.addCar(req.body);

        res.json(data);
    } catch (err) {
        res.status(400).json({
            message: err.message,
        });
    }
}

export function updateCar(req, res, next) {
    const id = req.params.carIdentifier;
    const body = req.body;

    try {
        const data = carService.updateCar(id, body);

        res.json(data);
    } catch (err) {
        res.status(400).json({
            message: err.message,
        });
    }
}

export function removeCar(req, res, next) {
    try {
        const data = carService.removeCar(req.params.carIdentifier);

        res.json(data);
    } catch (err) {
        res.status(400).json({
            message: err.message,
        });
    }
}