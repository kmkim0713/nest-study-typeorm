import { Controller, Get, Param, Post } from "@nestjs/common";
import { UsersService } from "../service/UsersService";
import { User } from "../entity/Users";
import { UserOrderProductDto } from "../dto/UserOrderInfo";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @Get(':id')
  getOne(@Param('id') id: number): Promise<User | null> {
    return this.usersService.findOne(id);
  }

  @Get(':id/order/list')
  getUserOrderList(@Param('id') id: number): Promise<UserOrderProductDto[] | null> {
    return this.usersService.getUserOrderList(id).then((data: UserOrderProductDto[])=> {
      return data;
    });
  }

}
