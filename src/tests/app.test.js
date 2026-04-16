const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('returns app info', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message');
  });
});

describe('GET /health', () => {
  it('returns ok status', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});

describe('/api/items', () => {
  it('GET / returns list', async () => {
    const res = await request(app).get('/api/items');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST / creates item', async () => {
    const res = await request(app).post('/api/items').send({ name: 'Test Item' });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Test Item');
  });

  it('GET /:id returns item', async () => {
    const res = await request(app).get('/api/items/1');
    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe(1);
  });

  it('GET /:id returns 404 for unknown id', async () => {
    const res = await request(app).get('/api/items/9999');
    expect(res.statusCode).toBe(404);
  });
});
