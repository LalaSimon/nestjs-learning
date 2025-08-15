import { Injectable, NotFoundException } from '@nestjs/common';

type User = {
  id: string;
  name: string;
  email: string;
};

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: '1', name: 'John Doe', email: 'johndoe@gmail.com' },
    { id: '2', name: 'Janny Doe', email: 'Jannydoe@gmail.com' },
  ];

  getAllUsers(): User[] {
    return this.users;
  }

  getUser(id: string): User | undefined {
    const user = this.users.find(user => user.id === id);

    if (!user) throw new NotFoundException(`User with ID ${id} not found`);

    return user;
  }
}
