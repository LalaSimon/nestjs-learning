import { IsString, IsNotEmpty, MinLength, IsOptional } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  taskTitle: string;

  @IsString()
  @IsOptional()
  @MinLength(12)
  taskDescription?: string;
}
