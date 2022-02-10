import os from 'os'; // default package of node.js
import fs from 'fs'; // default package of node.js
import helmet from 'helmet';
import morgan from 'morgan';
import express from 'express';
import winston from 'winston';
import bodyParser from 'body-parser';
import serveFavicon from 'serve-favicon';
const server = express();

server.use(serveFavicon('./public/favicon.ico')); // path for favicon

const logger = winston.createLogger({ // winston makes logger instamce and we can use this logger to console throughout the program except in production
    level: 'info',
});

logger.add(
    new winston.transports.Console({
        format: winston.format.simple(),
    })
);

server.use(helmet());
server.use(morgan('common')); // common jastai aaru pani hunxa, eg:combined
server.use(bodyParser.json());

server.get('/', (req, res, next) => {
    res.send('This is the response from the index(/) route');
});

server.get('/cars', (req, res, next) => {
    logger.info('Fetching all cars'); // Logger info is developer compatible but message in .json format is the message to be displayed in clients UI

    fs.readFile('./data.txt', (err, data) => { // Reading data from data.txt file 
        if (err) {
            logger.error(`Error reading from file: ${err.message}`);

            res.status(400).json({ // 400 is status code for error 
                message: `Error reading from file`,
            });

            return;
        }

        const str = data
            .toString()
            .split('\n')
            .filter((a) => !!a)
            .map((row) => JSON.parse(row)); // The data of file is converted to string and spitted on basis of next line and filtered for getting desirable array and then converted into json object using json and parse

        res.json({ // if there is no error in reading file, the list of added informaton is updated in file(database) and is displayed to client
            message: 'List of cars',
            data: str,
        });
    });
});

server.post('/cars', (req, res, next) => {
    logger.debug('Payload received', req.body);

    const body = JSON.stringify(req.body) + os.EOL; // os.EOL is for printing the array splitted in next line

    logger.info('Checking file existence');
    const hasFile = fs.existsSync('./data.txt');

    if (!hasFile) {
        logger.error(`Cannot find file: data.txt`);

        res.status(404).json({
            message: `Cannot find file: data.txt`,
        });

        return;
    }

    logger.info('File existence verified. Now writing to file');

    fs.appendFile('./data.txt', body, (err) => {
        if (err) {
            logger.error(`Error writing to file: ${err.message}`);

            res.status(400).json({
                message: `Error writing to file: ${err.message}`,
            });
        }

        logger.info('Successfully written to file');

        res.json({
            message: 'Added record successfully',
            data: req.body,
        });
    });
});

const PORT = 8848;

server.listen(PORT, () => {
    console.log(`Listening on 127.0.0.1:${PORT}`);
});

// INFO -> For information purpose. For example "Fetching record for car id 1", "Getting all information on cars", "Validation on the request successful"
// ERROR -> For errors. For example "Could not find any car associated with id 1", "The requested resource could not be found", "Invalid data"
// DEBUG -> For developer debugging purpose. It might show actual data or objects "Received request payload: { "firstName": "Prabhat", "lastName": "Gautam" }"

// Validation -> Check if exists -> Update -> Sucessful

// INFO: Starting the validation process

// ERROR: Validation failed. firstName should be a string and not a number

// DEBUG: Payload received: { "firstName": "Prabhat", "lastName": "Gautam" }

// INFO: Validation sucessful. Now checking if the data exists

// ERROR: Cannot find the associated data.

// INFO: Data existence verfified. Updating the data.

// DEBUG: Updated data: { "firstName": "Prabhat", "lastName": "Gautam", "address": "Lalitpur" }

// INFO: Successfully updated the data