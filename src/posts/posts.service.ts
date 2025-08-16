import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class PostsService {
  constructor(private readonly usersService: UsersService) {}

  getPostsByUserId(id: string) {
    const user = this.usersService.getUser(id);
    if (!user) throw new NotFoundException(`User ${id} not found`);

    if (user.posts?.length === 0) throw new NotFoundException(`User ${id} has no posts`);

    return user.posts;
  }
}
