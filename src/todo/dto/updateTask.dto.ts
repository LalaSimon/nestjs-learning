import { IsString, IsNotEmpty, MinLength, IsOptional } from 'class-validator';

export class UpdateTaskDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @IsOptional()
  taskTitle?: string;

  @IsString()
  @IsOptional()
  @MinLength(12)
  taskDescription?: string;
}
