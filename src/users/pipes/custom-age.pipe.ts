import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class CustomAgePipe implements PipeTransform {
  transform(value: string) {
    if (value === undefined) return undefined;

    const age = parseInt(value, 10);
    if (isNaN(age)) throw new BadRequestException('Age must be a valid number');

    if (age < 18 || age > 100) throw new BadRequestException('Age must be between 18 and 100');

    return age;
  }
}
