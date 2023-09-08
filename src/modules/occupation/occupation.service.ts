import { Injectable } from '@nestjs/common';
import { CreateOccupationDto } from './dto/create-occupation.dto';
import { UpdateOccupationDto } from './dto/update-occupation.dto';
import { OccupationRepository } from './repositories/occupation-repository';
import { Occupation } from './entities/occupation.entity';

@Injectable()
export class OccupationService {
  constructor(private occupationRepository: OccupationRepository) {}

  create(createOccupationDto: CreateOccupationDto) {
    return this.occupationRepository.create(createOccupationDto);
  }

  findAll() {
    return this.occupationRepository.findAll();
  }

  findOne(id: string) {
    return this.occupationRepository.findOne(id);
  }

  update(id: string, updateOccupationDto: UpdateOccupationDto) {
    return `This action updates a #${id} occupation`;
  }

  remove(id: string) {
    return `This action removes a #${id} occupation`;
  }
}
