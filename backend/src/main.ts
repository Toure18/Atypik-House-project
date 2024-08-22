import express from 'express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

// Crée une instance d'Express
const server = express();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

  // Configuration CORS
  app.enableCors({
    origin: 'https://atypichouse-dfb81.web.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Configuration des pipes de validation
  app.useGlobalPipes(new ValidationPipe());

  // Configuration de Swagger
  const config = new DocumentBuilder()
    .setTitle('AtypicHouse API')
    .setDescription('The AtypicHouse API description')
    .setVersion('1.0')
    .addTag('AtypicHouse')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // Configuration Swagger
  SwaggerModule.setup('swagger', app, document, {
    customSiteTitle: 'AtypicHouse API Docs', // Titre personnalisé de l'onglet Swagger
    customCss: '.swagger-ui .topbar { display: none }', // CSS personnalisé
  });

  // Initialise l'application NestJS
  await app.init();
}

// Fonction qui sera utilisée par Vercel pour gérer les requêtes
export default async (req: express.Request, res: express.Response) => {
  if (!req.body) {
    await bootstrap();
  }
  server(req, res);
};
