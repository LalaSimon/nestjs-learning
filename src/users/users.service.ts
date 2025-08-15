import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';

export type User = {
  id: string;
  name: string;
  email: string;
};

export type CreateUser = Omit<User, 'id'>;

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: randomUUID(), name: 'John Doe', email: 'johndoe@gmail.com' },
    { id: randomUUID(), name: 'Janny Doe', email: 'Jannydoe@gmail.com' },
  ];

  getAllUsers(): User[] {
    return this.users;
  }

  getUser(id: string): User | undefined {
    const user = this.users.find(user => user.id === id);

    if (!user) throw new NotFoundException(`User with ID ${id} not found`);

    return user;
  }

  createUser(body: Omit<User, 'id'>) {
    const existingUser = this.users.find(user => user.email === body.email);

    if (existingUser) throw new BadRequestException('Email already exist');

    const newUser = {
      id: randomUUID(),
      ...body,
    };

    this.users.push(newUser);
    return newUser;
  }
}
