require('dotenv').config();

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { Request, RequestHandler, Response } from 'express-serve-static-core';

import * as Firebase from './Firebase';

const api = express();
api.use(
	cors({
		origin: '*',
		optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
	})
);

// Body Parser Middleware
api.use(bodyParser.json() as unknown as RequestHandler);

(async function () {
	const server = api.listen(process.env.PORT || 8080, function () {
		// @ts-ignore
		var port = server.address().port;
		console.log('App now running on port', port);
	});

	api.post('/', Firebase.validateAuth);
})();
