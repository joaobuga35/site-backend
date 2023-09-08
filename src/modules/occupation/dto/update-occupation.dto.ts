import { PartialType } from '@nestjs/swagger';
import { CreateOccupationDto } from './create-occupation.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateOccupationDto extends PartialType(CreateOccupationDto) {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  office: string;

  @IsString()
  @IsOptional()
  image: string;

  @IsOptional()
  @IsString()
  linkedin?: string;

  @IsOptional()
  @IsString()
  discord?: string;
}
