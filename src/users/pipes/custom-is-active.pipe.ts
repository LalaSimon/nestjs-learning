import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class CustomIsActivePipe implements PipeTransform {
  transform(value: string) {
    if (value === undefined) return undefined;
    if (typeof value === 'boolean') return value;
    if (value === 'true') return true;
    if (value === 'false') return false;

    throw new BadRequestException('IsActive must be true or false');
  }
}
