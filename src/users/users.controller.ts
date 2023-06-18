import { Controller, Get, Post, Patch, UseGuards, Req } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/decorpator/get-user.decorator';

@Controller('users')
export class UsersController {
  @UseGuards(JwtGuard)
  @Get('me')
  getMe(@GetUser() user) {
    return user;
  }

  @UseGuards(JwtGuard)
  @Patch('update')
  
}
