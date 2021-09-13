import { expect, http, headers } from '../utils/common.util';
import {
  RandomPostCodes,
  ErrorSchema,
  ArrayOfCodes
} from '../schemas/getSchemas';

import { PostCodesData, InvalidPostodes } from '../data/postCodes';

describe('GET', () => {
  describe('Randon Post Codes', () => {
    let response: ChaiHttp.Response;
    before('HTTP request health check page', async () => {
      response = await http.get('/random/postcodes');

      if (response.status !== 200) {
        throw new Error(
          `Status Code: ${response.status}, Message: ${response.error}`
        );
      }
    });

    it('should return a 200 OK', () => {
      expect(response.status).eq(200);
      if (response.status !== 200) {
        throw new Error(
          `Status Code: ${response.status}, Message: ${response.error}`
        );
      }
    });
    it('response should match the schema', () => {
      expect(response.body).to.be.jsonSchema(RandomPostCodes);
    });
  });
  for (const postCode of PostCodesData) {
    describe(`Information for PostCode ${postCode}`, () => {
      let response: ChaiHttp.Response;
      before('HTTP request health check page', async () => {
        response = await http.get(`/postcodes/${postCode}`);

        if (response.status !== 200) {
          throw new Error(
            `Status Code: ${response.status}, Message: ${response.error}`
          );
        }
      });

      it('should return a 200 OK', () => {
        expect(response.status).eq(200);
      });
      it('response should match the schema', () => {
        expect(response.body).to.be.jsonSchema(RandomPostCodes);
      });
      it('response should have headers', () => {
        expect(response).to.have.header;
      });
      it('response should have a "content-type" header ', () => {
        expect(response).to.have.header('content-type');
      });
      it('response should have allow all origins', () => {
        expect(response.header['access-control-allow-origin']).to.eql('*');
      });
    });
  }
  describe('Invalid PostCodes', () => {
    for (const postCode of InvalidPostodes) {
      describe(`Information for PostCode ${postCode}`, () => {
        let response: ChaiHttp.Response;
        before('HTTP request health check page', async () => {
          response = await http.get(`/postcodes/${postCode}`);
        });

        it('should return the correct error Code', () => {
          expect(response.status).eq(404);
        });
        it('response should match the schema', () => {
          expect(response.body).to.be.jsonSchema(ErrorSchema);
        });
      });
    }
    describe(`Information for empty PostCode in query params`, () => {
      let response: ChaiHttp.Response;
      before('HTTP request', async () => {
        response = await http.get(`/postcodes/`);
      });

      it('should return the correct error Code', () => {
        expect(response.status).eq(400);
      });
      it('response should match the schema', () => {
        expect(response.body).to.be.jsonSchema(ErrorSchema);
      });
    });
  });
});
describe('POST', () => {
  for (const postCode of PostCodesData) {
    describe(`PostCode: ${postCode}`, () => {
      let response: ChaiHttp.Response;
      before('HTTP request', async () => {
        response = await http
          .post('/postcodes/')
          .set(headers)
          .send({
            postcodes: [postCode]
          });
      });

      it('it should return the correct code', () => {
        expect(response.status).eq(200);
      });
      it('response should match the schema', () => {
        expect(response.body).to.be.jsonSchema(ArrayOfCodes);
      });
      it("should contain the query's postcode", () => {
        expect(response.body.result[0].query).eq(postCode);
      });
    });
  }
});
