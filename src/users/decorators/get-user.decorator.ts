import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '../users.service';

interface AuthenticatedRequest extends Request {
  user: User;
}

export const GetUser = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const req = ctx.switchToHttp().getRequest<AuthenticatedRequest>();
  return req.user;
});
