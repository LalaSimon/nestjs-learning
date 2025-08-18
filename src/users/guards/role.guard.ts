import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const handler = context.getHandler();

    const roles = this.reflector.get<string[]>('roles', handler);

    if (!roles) return true;

    if (roles && Array.isArray(roles) && roles.includes('admin')) {
      const data = context.switchToHttp().getRequest<Request>();
      const isAdmin: boolean = (data.query.isAdmin as string) === 'true';

      return isAdmin ? isAdmin : false;
    }

    return false;
  }
}
