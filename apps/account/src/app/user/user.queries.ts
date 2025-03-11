import { Body, Controller } from '@nestjs/common';
import { RMQRoute, RMQValidate } from 'nestjs-rmq';
import { AccountUserCourses, AccountUserInfo } from '@purple/contracts';
import { UserService } from './user.service';
import { UserRepository } from './repositories/user.repository';

@Controller()
export class UserQueries {
  constructor(private readonly userRepository: UserRepository) {}

  @RMQValidate()
  @RMQRoute(AccountUserInfo.topic)
  async UserInfo(
    @Body() dto: AccountUserInfo.Request
  ): Promise<AccountUserInfo.Response> {
    const user = await this.userRepository.findUserById(dto.id);
    return { user };
  }

  @RMQValidate()
  @RMQRoute(AccountUserCourses.topic)
  async UserCourses(
    @Body() dto: AccountUserCourses.Request
  ): Promise<AccountUserCourses.Response> {
    const user = await this.userRepository.findUserById(dto.id);
    return { courses: user.courses };
  }
}
