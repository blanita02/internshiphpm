import { Controller, Get } from "@nestjs/common";
import { UserService } from "../services/user.service";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers(): Promise<any[]> {
    return this.userService.getAllUsers();
  }
}
