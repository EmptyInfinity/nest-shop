import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateUserDto } from '../schemas';
import { UsersService } from '../services';
import { User } from '../interfaces';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
