  // Utils folder is a general purpose folder where the code used over the entire application is written. For example: logger 

  import winston from 'winston'; // kei kura chaiyo vane import use garne

  const logger = winston.createLogger({
      level: 'debug',
  });

  logger.add(
      new winston.transports.Console({
          format: winston.format.simple(),
      })
  );

  export default logger; // kei kura dina parda export use garne, yeutai kura lai multiple thau mah use garna import export garnu parxa