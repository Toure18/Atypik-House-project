import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('BookingController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  // Test pour récupérer les réservations d'un utilisateur
  it('/booking/my-bookings (GET)', async () => {
    const response = await request(app.getHttpServer())
      .get('/booking/my-bookings')
      .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.MQ.QMMV4zV6xDRx1N3kskIxixanUV_trI00ClAVoT2SnjA') 
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
  });

  // Test pour vérifier le login
it('/auth/login (POST)', async () => {
  const userCredentials = {
    email: 'test@example.com',
    password: 'password123',
  };

  const response = await request(app.getHttpServer())
    .post('/auth/login')
    .send(userCredentials)
    .expect(201);

  expect(response.body).toHaveProperty('access_token');
  expect(typeof response.body.access_token).toBe('string'); 
  expect(response.body).toHaveProperty('accountType');
  expect(typeof response.body.accountType).toBe('string');
  expect(response.body).toHaveProperty('expires_in');
  expect(typeof response.body.expires_in).toBe('number'); 
  expect(response.body).toHaveProperty('id');
  expect(typeof response.body.id).toBe('string');
});

// Test pour créer un commentaire
it('/comment (POST)', async () => {
  const commentData = {
    text: 'This is a test comment',
    date: '2024-07-17',
  };

  const response = await request(app.getHttpServer())
    .post('/comment?property_id=10')
    .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.MTQ.CsJ6rfJRhYo453Co_Gm1V7oCus91JpHcP2pyjxOqVpM')
    .send(commentData)
    .expect(201);

    expect(response.body).toHaveProperty('text', commentData.text);
    expect(response.body).toHaveProperty('date', commentData.date);
});

});
