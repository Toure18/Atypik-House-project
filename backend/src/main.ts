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
    .setTitle('AtypicHouse Api')
    .setDescription('The AtypicHouse API description')
    .setVersion('1.0')
    .addTag('AtypicHouse')
    .setBasePath('/swagger') 
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document, {
    jsonDocumentUrl: 'swagger/json',
    customCssUrl: 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.3/swagger-ui.css',
    customJsStr: `
      window.onload = function() {
        const script1 = document.createElement('script');
        script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.3/swagger-ui-bundle.js';
        document.head.appendChild(script1);

        const script2 = document.createElement('script');
        script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.3/swagger-ui-standalone-preset.js';
        document.head.appendChild(script2);
      }
    `,
    customSiteTitle: 'AtypicHouse Doc Api',
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
