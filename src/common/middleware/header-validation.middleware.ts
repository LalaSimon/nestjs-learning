import { BadRequestException, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class HeaderValidation implements NestMiddleware {
  private readonly MethodsWithContentType = ['PUT', 'PATCH', 'POST'];

  private headerCheck(method: string, contentType: string | undefined) {
    if (this.MethodsWithContentType.includes(method)) {
      if (!contentType) {
        throw new BadRequestException('Content-type header is required');
      }
      if (!contentType.includes('application/json')) {
        throw new BadRequestException('Content-type must be application/json');
      }
    }
  }

  use(req: Request, res: Response, next: NextFunction) {
    const { method, headers } = req;
    this.headerCheck(method, headers['content-type']);
    next();
  }
}
