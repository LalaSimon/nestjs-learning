import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { User, UsersService } from '../users.service';

interface AuthenticatedRequest extends Request {
  user: User;
}

@Injectable()
export class GetUserGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private readonly userService: UsersService,
  ) {}
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const handler = context.getHandler();
    const paramName = this.reflector.get<string>('userId', handler);
    const data = context.switchToHttp().getRequest<AuthenticatedRequest>();
    const userId = data.params[paramName];

    try {
      const user = this.userService.getUser(userId);
      data.user = user;
      return true;
    } catch (err: unknown) {
      console.log(err);
      return false;
    }
  }
}
