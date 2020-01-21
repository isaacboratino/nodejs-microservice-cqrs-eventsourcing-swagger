import { EventPublisher, IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetUserQuery } from '../impl/get-user.query';
import { UserRepository } from '../../repository/user.repository';
import { Logger } from '@nestjs/common';

@QueryHandler(GetUserQuery)
export class GetUserHandler
  implements IQueryHandler<GetUserQuery> {
  constructor(
    private readonly repository: UserRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(query: GetUserQuery, resolve: (value?) => void) {
    Logger.log('Async GetUserQuery...', 'GetUserQuery');

    const {userDto} = query;
    const user = this.publisher.mergeObjectContext(
      await this.repository.createUser(userDto),
    );
    user.commit();
    resolve();
  }
}
