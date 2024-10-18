import { Injectable, Logger } from '@nestjs/common';
import { IAMClient, ListUsersCommand } from '@aws-sdk/client-iam';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  async getHello(): Promise<string> {
    this.logger.log('getHello()');

    const iamClient = new IAMClient({ region: 'sa-east-1' });

    const response = await iamClient.send(new ListUsersCommand());

    const userList = response.Users;

    this.logger.log('userList: ' + JSON.stringify(userList));

    return 'Hello World!';
  }
}