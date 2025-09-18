import { Module } from '@nestjs/common';
import { ProductsController } from "../controller/ProductsController";
import { ProductsService } from "../service/ProductsService";
import { ProductsRepository } from "../repository/ProductsRepository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Products } from "../entity/ProductsEntity";
import { Category } from "../../entity/Category";

@Module({
  imports: [TypeOrmModule.forFeature([Products, Category])],
  controllers: [ProductsController],
  providers: [ProductsService, ProductsRepository],
  exports: [ProductsService],
})
export class ProductsModule {
}
