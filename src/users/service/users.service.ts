import { Injectable } from "@nestjs/common";
import { UsersRepository } from "../repository/users.repository";

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}


  findOne(id: number) {
    return this.usersRepository.findOne({
      where: {
        id: 1
      }
    })
  }
}
