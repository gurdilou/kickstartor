import cors from 'cors'
import express from 'express'
import expressWs from "express-ws";
import dotenv from 'dotenv';
import path from 'path';

import {PetsController} from '~/resources/pets/pets.controller'
import {ExceptionsHandler} from '~/middlewares/exceptions.handler'
import {UnknownRoutesHandler} from '~/middlewares/unknownRoutes.handler'

dotenv.config();


const app = express();
const wss = expressWs(app);

app.use(express.json())

// For tests only
app.use(cors())

// Rest sample
app.use('/pets', PetsController)

/**
 * Homepage, is a dummy hello world, have to be replaced by the client build
 */
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});


wss.app.ws('/echo', function (ws) {
    ws.send("Bonjour toi");

    ws.on('message', function (msg) {
        ws.send("XX"+msg);
    });
});


// Middlewares
app.all('*', UnknownRoutesHandler)
app.use(ExceptionsHandler)

/**
 * startup
 */
const port = process.env.PORT || 8000;
app.listen(port, () => console.log('Silence, ça tourne. http://localhost:' + port + "/pets"))