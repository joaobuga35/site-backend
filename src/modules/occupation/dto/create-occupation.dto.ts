import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateOccupationDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  office: string;

  @IsString()
  @IsNotEmpty()
  image: string;

  @IsOptional()
  @IsString()
  linkedin?: string;

  @IsOptional()
  @IsString()
  discord?: string;
}
