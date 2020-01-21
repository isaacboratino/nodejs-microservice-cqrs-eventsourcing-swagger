
import { IEventHandler, EventsHandler } from '@nestjs/cqrs';
import { UserGetedEvent } from '../impl/user-geted.event';
import { Logger } from '@nestjs/common';

@EventsHandler(UserGetedEvent)
export class UserCreatedHandler
  implements IEventHandler<UserGetedEvent> {
  handle(event: UserGetedEvent) {
    Logger.log(event, 'UserGetedEvent'); // write here
  }
}
