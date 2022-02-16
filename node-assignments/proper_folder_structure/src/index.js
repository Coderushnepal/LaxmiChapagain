 // In index.js we put everything except routes 

 import helmet from 'helmet';
 import morgan from 'morgan';
 import express from 'express';
 import bodyParser from 'body-parser';
 import serveFavicon from 'serve-favicon';

 import router from './routes.js'; // importing routes from routes.js?? ,  package.json mah type:module bhako bhyera .js pan dina pareko, default export bhako bhyera router  deko if named export bhako bhye same name use grana parthio
 import logger from './utils/logger.js';

 const server = express();

 server.use(serveFavicon('./public/favicon.ico'));

 server.use(helmet());
 server.use(morgan('common'));
 server.use(bodyParser.json());

 server.use(router); // using the imported router

 const PORT = 8848;

 server.listen(PORT, () => {
     logger.info(`Listening on 127.0.0.1:${PORT}`);
 });