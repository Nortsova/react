import mongoose from 'mongoose';
import config from '../config';
import Todo from './Todo';

const { db: { name, host }} = config;

mongoose.connect(
	`mongodb://${host}/${name}`,
	{ useMongoClient: true, promiseLibrary: global.Promise}
).catch(console.error);

export  {
	Todo
}



