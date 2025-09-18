import { IntersectionType } from '@nestjs/mapped-types';

// Query 결과에 따른 dto를 매번 만들수가 없으니 필요한 부분만 발췌하여 내부클래스를 합친 dto를 반환
// User 관련
class UserDto {
  userId?: number;   // u.id AS userId
  userName?: string; // u.name AS userName
}

// Order 관련
class OrderDto {
  orderStatus?: string;       // o.status AS orderStatus
  orderCreatedAt?: Date;      // o.created_at AS orderCreatedAt
}

// Product 관련
class ProductDto {
  productName?: string;        // p.name AS productName
  productDescription?: string; // p.description AS productDescription
  productPrice?: number;       // p.price AS productPrice
  productStock?: number;       // p.stock AS productStock
}

export class UserOrderProductDto extends IntersectionType(
  IntersectionType(UserDto, OrderDto),
  ProductDto,
) {}
