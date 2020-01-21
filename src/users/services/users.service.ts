import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { UserIdRequestParamsDto } from '../dtos/users.dto';
import { UserDto } from '../dtos/users.dto';
import { GetUserQuery } from '../queries/impl/get-user.query';
import { CreateUserCommand } from '../commands/impl/create-user.command';
import { UpdateUserCommand } from '../commands/impl/update-user.command';
import { DeleteUserCommand } from '../commands/impl/delete-user.command';

@Injectable()
export class UsersService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
  ) {}

  async getUser(user: UserIdRequestParamsDto) {
    return await this.queryBus.execute(
      new GetUserQuery(user),
    );
  }

  async createUser(user: UserDto) {
    return await this.commandBus.execute(
      new CreateUserCommand(user),
    );
  }

  async updateUser(user: UserDto) {
    return await this.commandBus.execute(
      new UpdateUserCommand(user),
    );
  }

  async deleteUser(user: UserIdRequestParamsDto) {
    return await this.commandBus.execute(
      new DeleteUserCommand(user),
    );
  }

  async findUsers() {
    // TODO
  }
}
