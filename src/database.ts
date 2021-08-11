import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const {
    ENV, 
    POSTGRES_HOST,
    POSTGRES_TEST_DB,
    POSTGRES_DB,
    POSTGRES_USER,
    POSTGRES_PWD
} = process.env;

let client;
console.log(ENV);
if(ENV === 'test') {
    client = new Pool({
        host: POSTGRES_HOST,
        database: POSTGRES_TEST_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PWD
    })
};

if(ENV === 'dev') {
    client = new Pool({
        host: POSTGRES_HOST,
        database: POSTGRES_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PWD
    })
};

export default client;
