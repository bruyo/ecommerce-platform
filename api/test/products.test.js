const request = require('supertest');
const app = require('../app');

describe('Products API', () => {
  test('GET /products should return status 200', async () => {
    const response = await request(app).get('/products');

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
