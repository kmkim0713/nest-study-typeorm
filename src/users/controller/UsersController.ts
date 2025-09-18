import { Controller, Get, Param, Post } from "@nestjs/common";
import { UsersService } from "../service/UsersService";
import { User } from "../../entity/Users";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @Get(':id')
  getOne(@Param('id') id: number): Promise<User | null> {
    return this.usersService.findOne(id);
  }

  @Get(':id/order/list')
  getUserOrderList(@Param('id') id: number): Promise<unknown[] | null> {
    return this.usersService.getUserOrderList(id);
  }

}
