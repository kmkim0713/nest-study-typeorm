import { Injectable } from "@nestjs/common";
import { UsersRepository } from "../repository/UsersRepository";
import { UserOrderProductDto } from "../dto/UserOrderInfo";

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}


  findOne(id: number) {
    return this.usersRepository.findOne({
      where: {
        id: id
      }
    })
  }

  getUserOrderList(id: number): Promise<UserOrderProductDto[] | null> {
    return this.usersRepository.getUserOrderList(id);
  }
}
