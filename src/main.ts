import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const PORT = process.env.PORT;
               

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
                .setTitle('Backend')
                .setDescription('REST API')
                .setVersion('1.0.0')
                .build()

  const document = SwaggerModule.createDocument(app, config) 
  SwaggerModule.setup('api/docs', app, document)

  await app.listen(PORT, () => {
    console.info(`Server launched on port ${PORT}`)
  });
}

bootstrap();
