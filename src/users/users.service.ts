import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

export type User = {
  id: string;
  name: string;
  email: string;
};

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

  createUser(body: CreateUserDto) {
    const existingUser = this.users.find(user => user.email === body.email);

    if (existingUser) throw new BadRequestException('Email already exist');

    const newUser = {
      id: randomUUID(),
      ...body,
    };

    this.users.push(newUser);
    return newUser;
  }

  updateUser(id: string, body: UpdateUserDto) {
    const userToUpdate = this.users.find(user => user.id === id);

    if (!userToUpdate) throw new NotFoundException(`User ${id} not existing`);

    if (body.email) {
      const isEmailTaken = this.users.find(user => user.email === body.email && user.id !== id);
      if (isEmailTaken) throw new BadRequestException('Email already taken');
    }

    const updatedUser = {
      ...userToUpdate,
      ...body,
    };

    this.users = this.users.map(user => (user.id === id ? updatedUser : user));

    return updatedUser;
  }

  deleteUser(id: string) {
    const userToDelete = this.users.find(user => user.id === id);

    if (!userToDelete) throw new NotFoundException(`User ${id} not found!`);

    this.users = this.users.filter(user => user.id !== id);
  }
}
