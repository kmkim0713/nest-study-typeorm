import { Injectable } from "@nestjs/common";
import { UsersRepository } from "../repository/users.repository";

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

  getUserOrderList(id: number): Promise<unknown[] | null> {
    return this.usersRepository.getUserOrderList(id);
  }
}
