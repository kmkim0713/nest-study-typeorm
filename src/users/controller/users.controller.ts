import { Controller, Get, Param } from "@nestjs/common";
import { UsersService } from "../service/users.service";
import { User } from "../../entity/user.entity";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @Get()
  getOne(@Param('id') id: number): Promise<User | null> {
    return this.usersService.findOne(id);
  }

}
