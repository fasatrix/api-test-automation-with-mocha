import chaiHttp from 'chai-http';
import chai from 'chai';

chai.use(chaiHttp);
chai.use(require('chai-json-schema-ajv'));

const envConf = require('./config.json');
const env: string = process.env.ENV ?? 'test';
const testEnv = envConf[env];

export const urlToTest = process.env.TEST_URL ?? testEnv.url;
export const http = chai.request(urlToTest);

export const { expect } = chai;

export const headers = [
  'Content-Type: application/json',
  'Connection: Keep-Alive',
  'Access-Control-Request-Method: POST',
  'Access-Control-Allow-Origin: *',
  'Access-Control-Allow-Methods: POST, GET, OPTIONS'
];
