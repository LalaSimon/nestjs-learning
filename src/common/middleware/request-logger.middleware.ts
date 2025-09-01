import { Injectable, NestMiddleware } from '@nestjs/common';
import chalk, { ChalkInstance } from 'chalk';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private getStatusColor(status: number): ChalkInstance {
    switch (Math.floor(status / 100)) {
      case 5:
        return chalk.yellow;
      case 4:
        return chalk.red;
      case 3:
        return chalk.blueBright;
      case 2:
        return chalk.green;
      default:
        return chalk.white;
    }
  }

  private getMethodColor(method: string): ChalkInstance {
    switch (method) {
      case 'GET':
        return chalk.greenBright;
      case 'POST':
        return chalk.blueBright;
      case 'DELETE':
        return chalk.redBright;
      case 'PATCH':
        return chalk.yellowBright;
      case 'PUT':
        return chalk.cyanBright;
      default:
        return chalk.whiteBright;
    }
  }

  private formatParams(params: Request['params'], query: Request['query']) {
    const paramsInfo =
      Object.keys(params).length === 0 ? 'No URL parameters' : JSON.stringify(params, null, 2);

    const queryInfo =
      Object.keys(query).length === 0 ? 'No query parameters' : JSON.stringify(query, null, 2);

    return {
      paramsInfo,
      queryInfo,
    };
  }
  use(req: Request, res: Response, next: NextFunction) {
    const requestStartTime = Date.now();
    const { url, params, query } = req;

    res.on('finish', () => {
      const requestEndTime = Date.now();
      const requestTime = requestEndTime - requestStartTime;

      const { paramsInfo, queryInfo } = this.formatParams(params, query);

      const responseMethod = this.getMethodColor(req.method)(req.method);
      const responseMessage = this.getStatusColor(res.statusCode)(
        `[${new Date().toISOString()}] - ${responseMethod}: ${url} - Completed in ${requestTime}ms with status ${res.statusCode}`,
      );

      console.log(chalk.magenta('\nParameters:'));
      console.log(chalk.cyan('URL Parameters: ') + chalk.gray(paramsInfo));
      console.log(chalk.cyan('Query Parameters: ') + chalk.gray(queryInfo));
      console.log(responseMessage);
    });

    next();
  }
}
