const  { Person } = require('./Person');
const dotenv = require('dotenv');
const conectDataBase = require('./src/database/connect');

dotenv.config();

conectDataBase();

//require('./modules/path');
//require('./modules/fs');
// require('./modules/http');
require('./modules/express');

//const person = new Person("Patrick");

//console.log(person.sayMyName());

