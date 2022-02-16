// services folder interacts with models and data tanne kaam garxa i.e services calls  models
//  Data coming from different sources lai response banayera patahuxa or processing , structure garera data pathauxa
// business logic ko code la test garxa and in case if the conditions s not met k garnu parxa vanera vanxa, for example
// if getall data xa vane business logic, services folder ko code le data xaki xaina vanne code handle garirako hunxa



import Car from '../models/Car.js'; // services is calling models
import logger from '../utils/logger.js';

export function getAllCars() {
    logger.info('Fetching a list of all cars');

    const cars = new Car().getAll(); // model bata data taneko because getAll is defined in models

    return {
        data: cars, // json chai controller le banauxa so return matra gareko eta response nagari
        message: 'List of cars',
    };
}

export function getCar(id) {
    logger.info(`Fetching car with carId ${id}`);

    const car = new Car().getById(id); //??? what it does?

    if (!car) {
        logger.error(`Cannot find car with carId ${id}`);

        throw new Error(`Cannot find car with carId ${id}`); // we don not have res object so we are not using res.send Error is native inbuilt class of js and newError returns object. res object xaina vane throw new error
    }

    return {
        data: car,
        message: `Details of carId ${id}`,
    };
}

export function addCar(params) {
    logger.debug('Payload received', params);

    const existingData = new Car().findByParams(params);

    if (existingData) {
        logger.error('Data with the same payload already exists');

        throw new Error('Data with the same payload already exists');
    }

    logger.info('Saving the new car data');

    const data = new Car().save(params);

    return {
        data,
        message: 'Added the record successfully',
    };
}

export function updateCar(id, params) {
    logger.info(`Checking the existence of car with id ${id}`);

    const car = new Car().getById(id);

    if (!car) {
        logger.error(`Cannot find car with id ${id}`);

        throw new Error(`Cannot find car with id ${id}`);
    }

    logger.info(`Updating the data for car id ${id}`);

    new Car().updateById(id, params);

    logger.info(`Fetching the updated data for car id ${id}`);

    const updatedData = new Car().getById(id);

    return {
        data: updatedData,
        message: 'Record updated successfully',
    };
}

export function removeCar(id) {
    logger.info(`Checking if car with id ${id} exists`);

    const car = new Car().getById(id);

    if (!car) {
        logger.error(`Cannot delete car with id ${id} because it doesn't exist`);

        throw new Error(`Cannot delete car with id ${id} because it doesn't exist`);
    }

    new Car().removeById(id);

    return {
        message: 'Record removed successfully',
    };
}