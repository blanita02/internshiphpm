import { Injectable } from "@nestjs/common";
import axios from "axios";

@Injectable()
export class UserRepository {
  async findAll(): Promise<any[]> {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    return response.data;
  }
}
