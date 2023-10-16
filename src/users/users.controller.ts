import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('users')
export class UsersController {
  private users = [
    {
      id: 1,
      name: 'User 1',
    },
    {
      id: 2,
      name: 'User 2',
    },
  ];

  @Get()
  getAll(): { name: string; id: number }[] {
    return this.users;
  }

  @Get(':id') // Пользователь будет доступен по users/:id
  findOne(
    @Param('id', ParseIntPipe) id: number, // Метод принимает параметр id, который необходимо конвертировать в int
  ): { name: string; id: number } | null {
    const user = this.users.find((user) => user.id === id);
    return user ? user : null;
  }
}
