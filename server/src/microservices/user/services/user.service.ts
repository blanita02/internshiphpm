import { Injectable } from "@nestjs/common";
import { UserRepository } from "../repositories/user.repository";

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getAllUsers(): Promise<any[]> {
    return this.userRepository.findAll();
  }
}
