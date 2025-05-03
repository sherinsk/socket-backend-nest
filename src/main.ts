import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for your frontend (Vite on localhost:5173)
  app.enableCors({
    origin: 'https://socket-frontend-react.vercel.app',
    credentials: true, // only if you’re sending cookies or auth headers
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
