import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', // o 'nest_user' si creaste uno
      password: 'postgres123', // reemplaza con tu contraseña
      database: 'productos',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // solo para desarrollo! Crea tablas automáticamente
      logging: true, // muestra consultas SQL en consola
    }),
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}