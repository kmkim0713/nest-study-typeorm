import { IntersectionType } from '@nestjs/mapped-types';


class UserDto {
  id?: number;
  name?: string;
}

class OrderDto {
  id?: number;
  status?: string;
  createdAt?: Date;
}

class ProductDto {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
  stock?: number;
}

export class UserOrderProductDto extends IntersectionType(
  UserDto,
  OrderDto,
  ProductDto,
) {}
