import diskDb from 'diskdb';
import helmet from 'helmet';
import morgan from 'morgan';
import express from 'express';
import winston from 'winston';
import bodyParser from 'body-parser';
import serveFavicon from 'serve-favicon';

const server = express();

server.use(serveFavicon('./public/favicon.ico'));

const logger = winston.createLogger({
    level: 'info',
});

logger.add(
    new winston.transports.Console({
        format: winston.format.simple(),
    })
);

const db = diskDb.connect('./db', ['cars']); // checks for db folder and makes cars.json file inside db folder

server.use(helmet());
server.use(morgan('common'));
server.use(bodyParser.json());

server.get('/', (req, res, next) => {
    res.send('This is the response from the index(/) route');
});

server.get('/cars', (req, res, next) => {
    logger.info('Fetching all cars');

    const data = db.cars.find(); // find in diskdb is equivalent to filter of js and finds all the information

    res.json({
        data,
        message: 'List of cars',
    });
});

server.get('/cars/:carIdentifier', (req, res, next) => {
    const carId = req.params.carIdentifier;

    const car = db.cars.findOne({ _id: carId }); // findOne in diskdb is equivalent to find of JS and checks for the card with particular id

    if (!car) {
        logger.error(`Cannot find car with id ${carId}`);

        res.status(404).json({
            message: `Cannot find car with id ${carId}`,
        });

        return;
    }

    res.json({
        data: car,
        message: `Details of carId ${carId}`,
    });
});

server.post('/cars', (req, res, next) => {
    logger.debug('Payload received', req.body);

    const existingData = db.cars.findOne(req.body);

    if (existingData) {
        logger.error('Data with the same payload already exists');

        res.status(400).json({
            message: 'Data with the same payload already exists',
        });

        return;
    }

    const data = db.cars.save(req.body);

    res.json({
        data,
        message: 'Added the record successfully',
    });
});

server.put('/cars/:carIdentifier', (req, res, next) => {
    const carId = req.params.carIdentifier;
    const dataToBeUpdate = db.cars.findOne({ _id: carId }); // findOne in diskdb is equivalent to find of JS and checks for the card with particular id

    if (!dataToBeUpdate) {
        logger.error(`Cannot find car with id ${carId}`);

        res.status(404).json({
            message: `Cannot find car with id ${carId}`,
        });

        return;
    }
    var options = {
        multi: false,
        upsert: false
    };

    var updated = db.cars.update({ _id: carId }, req.body, options);

    res.json({
        updated,
        message: ` Updated details of carId ${carId}`,
    });
});

server.delete('/cars/:carIdentifier', (req, res, next) => {
    const carId = req.params.carIdentifier;
    const dataToBeDelete = db.cars.findOne({ _id: carId }); // findOne in diskdb is equivalent to find of JS and checks for the card with particular id

    if (!dataToBeDelete) {
        logger.error(`Cannot find car with id ${carId}`);

        res.status(404).json({
            message: `Cannot find car with id ${carId}`,
        });

        return;
    }
    var removed = db.cars.remove({ _id: carId }, true);
    res.json({
        removed,
        message: ` Removed details of car with carId ${carId}`,
    });
});

const PORT = 8848;

server.listen(PORT, () => {
    console.log(`Listening on 127.0.0.1:${PORT}`);
});